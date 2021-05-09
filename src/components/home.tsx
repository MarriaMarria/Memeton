import * as React from "react";
import DisplayMeme from './callMemeApi'
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Button from './button'

export default function Home() {
    return (
        <div>
            <div className="container-body">
                
            <h1 className="neon">MEMETON</h1>
            
        </div>
            <h2>The wonderful world of memes</h2>
                
                <div className="seeAllMemesButton">
                    
                    <Link to={{ pathname: "/all_meme"}}><Button buttonText="See all memes" /></Link>
            
                </div>
        </div>
    )

}
