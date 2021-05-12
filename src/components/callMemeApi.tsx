import React, { useEffect, useState } from "react";
import './CSS/memeContainer.css';

const DisplayMeme = () => {
    const [memes, setMemes] = useState([]);

    useEffect(() => { // useEffect is a hook
        fetch('https://memeton-back.azurewebsites.net/all_meme')
            .then(res =>
                res.json().then(response => setMemes(response))
            );
    }, []); // empty array means the effect is working on mount

    return (

        <div className="memeContainer">

            {memes.map(meme => {
                return <img src={meme.url} className="memeImg" />
                })
            }
                
        </div>

//! To see how to parse my JSON I go to network in inspect browser, in this case I have a list with url objects inside, so I use map to loop throw all of thel and find each ones url. 
    );
}

export default DisplayMeme