import React, { useEffect, useState } from "react";
import './CSS/memeContainer.css';

const DisplayMeme = () => {
    const [memes, setMemes] = useState([]);


    // `http://api.giphy.com/v1/gifs/trending?api_key=${process.env.REACT_APP_GIPHY_KEY}&limit=100`

    useEffect(() => { // useEffect is a hook
        // fetch(`http://api.giphy.com/v1/gifs/trending?api_key=76792192255c42c3a11c58ea1acfbe27&limit=100`)
        fetch('http://localhost:3004/all_meme')
            .then(res =>
                // res.json().then(response => setMemes(response.data))
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

    );
}

export default DisplayMeme