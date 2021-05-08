let express = require('express')
const app = express()
var port = process.env.PORT || 3000

// Librairie pour encoder mes mots de passes
const bcrypt = require("bcryptjs")

// Librairie pour les token de vérification
const jwt = require("jsonwebtoken")

require('dotenv').config()

const cors = require("cors")
app.use(cors());

const MongoClient = require('mongodb').MongoClient;
const url = process.env.CONNECTION_STRING

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

async function findUser(username_query) {

    const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true } ).catch(err => { console.log(err); });
    try {
        //On se connecte à la bonne table et on cherche si un username match avec le username en parametre
        let result = await client.db("authentification").collection('user').findOne({ username: username_query });
        client.close(); 
        return result;
    } catch (err) {
        console.log(err);
    }
}

async function createUser(username_query, password_query_hash) {

    const client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true } ).catch(err => { console.log(err); });
    try {
        //On se connecte à la bonne table et on cherche si un username match avec le username en parametre
        let result = await client.db("authentification").collection('user').insertOne({ username: username_query , password_hash : password_query_hash});
        return result
        client.close(); 
    } catch (err) {
        console.log(err);
    }
}

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/all_meme', function (req, res) {
    //Nom de la DB
    const dbName = 'imagedb'
    //Nom de la collection
    const colName = 'images'

    MongoClient.connect(url, function(err, client) {
        //message d'erreur en cas d'echec de connection
        if (err) throw err;
    
        //initialisation de la db
        var db = client.db(dbName);
        let my_urls = []
        // let my_results = await db.collection(colName).find()
        // console.log(my_results)
        
        //Insert one car on a une array grace au parsing
        db.collection(colName).find({},{projection:{"_id":0,"url":1}}).toArray(function (err, result) {
            if (err) {
                console.log(err);
            } else {
                // let my_urls = []
                // for(let i = 0; i < (result.length - 1); i++)
                // {
                //     my_urls.push(result[i]["url"])
                // } 
                
                // console.log("type:", typeof(JSON.stringify(my_urls)))
                res.send(JSON.stringify(result));
            }
        })
    })
})

//méthode post pour envoyer des données à mon serveur
app.post('/register',async function (req, res){
    
    try {
        //Définition des variables qui vont récuperer les données
        const username_query = req.body.username;
        const password_query = req.body.password;
        const password_verified_query = req.body.password_verified;

//////////////////     VALIDATION DES IDENTIFIANTS     //////////////////////

        //Verification que chaque champ existe
        if (!username_query || !password_query || !password_verified_query){
            return res.status(400).json({errorMessage : "Please enter all required field"})
        }

        //Verification que le pmot de passe est assez long
        if(password_query.length < 5){
            return res.status(400).json({errorMessage : "Password is too short"})
        }

        //Verification que les deux mots de passes coïncident
        if(password_query !== password_verified_query){
            return res.status(400).json({errorMessage : "Please enter same password"})
        }

        //Verification que le user n'existe pas
        let existingUser =  await findUser(username_query);
        //console.log('mon user :', existingUser)
        if (existingUser != null){
            return res.status(400).json({errorMessage : "Existing user"})
        }

///////////////////////////    HASH THE PASSWORD    ////////////////////////////////////

        const salt = await bcrypt.genSalt();
        const password_query_hash = await bcrypt.hash(password_query,salt);
        
        //Voir le mot de passe encrypté
        //console.log(password_query_hash)


//////////////////////////     CREATE A NEW USER     ////////////////////////////////////
        let newUser = await createUser(username_query, password_query_hash);


/////////////////////////   LOG USER 1      //////////////////////////////

        //Je crée un token avec l'id venant de la db et le password de mon serveur stocké dans le .env
        const token = jwt.sign(
            {
                user: newUser._id,
            },
            process.env.JWT_PASSWORD
        ); 
        
        //console.log(token);

        //stockage du token dans les cookies
        res.cookie("token", token, {
            httpOnly : true,
        })
            .send({
                'response : ' : "A new user has been created",
            })
    } catch (err) {
        console.log(err);
        res.status(500).send();
    }


})


app.post('/login', async function (req, res){
    try {
        //Définition des variables qui vont récuperer les données
        const username_query = req.body.username;
        const password_query = req.body.password;

        //Verification que chaque champ existe => seulement 2 champs
        if (!username_query || !password_query ){
            return res.status(400).json({errorMessage : "Please enter all required field"})
        }

        //On va chercher si le User existe donc on réutilise la fonction de register qui cherche une utilisateur
        const matchUser = await findUser(username_query);
        if (!matchUser) {
            // 400 - Bad Request | 401 - Unauthorized Request
            return res.status(401).json({errorMessage : "Wrong username or password"})
        }

        //On compare le mot de passe de la requete avec celui stocké dans la BDD => password_hash. Retourne "true" si y a match
        const matchPassword = await bcrypt.compare(password_query, matchUser.password_hash);

        if (matchPassword == false){
            return res.status(401).json({errorMessage : "Wrong username or password"})
        }

        //Je crée un token avec l'id venant de la db et le password de mon serveur stocké dans le .env
        const token = jwt.sign(
            {
                user: matchUser._id,
            },
            process.env.JWT_PASSWORD
        ); 

        res.send({
            'response : ' : "Logged in !! Bien joué",
            'token : ' : token
        })

    } catch(err) {
        console.error(err);
        res.status(500).send();
    }
})


app.listen(port, function () {
  console.log('Server on port ' + port )
})

