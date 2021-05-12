import * as React from "react";
import DisplayMeme from './callMemeApi'
import FileUploader from './add_meme'

export default function All_meme() {
    return (
        <div className="container-body">
            {<DisplayMeme /> }   
        </div>
        
    )

}
