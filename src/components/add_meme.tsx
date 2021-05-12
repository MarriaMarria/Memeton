import * as React from "react";
import Button from "./button"
import Upload from "./uploadMemeApi";
import './CSS/upload.css'


export default function UploadPage() {

    return (
        <div className="uploadContainer">
            <h1>Upload your own meme!</h1>
            <Upload />
        </div>
    )
}