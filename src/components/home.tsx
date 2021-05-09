import * as React from "react";
import DisplayMeme from './callApi'

export default function Home() {
    return (
        <div className="container-body">
            <h1>MEMETON</h1>
            <h2>The wonderful world of memes</h2>

            {/* <img src="assets/debug.jpeg"></img>   */}
                
            {<DisplayMeme /> }   
        </div>
        
    )

}
