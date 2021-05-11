import * as React from "react";
import Button from "./button"



export default function FileUploader(){
    const handleFileInput = () => {}

    return (
        <div className="file-uploader">
            <input type="file" onChange={handleFileInput} />
        </div>
    )
}