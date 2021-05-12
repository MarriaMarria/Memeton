import React, { useState } from 'react';



function Upload() {

    const [fileData, setFileData] = useState();

    const fileChangeHandler = (e) => {
        setFileData(e.target.files[0]);
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
    };

    const data = new FormData()

    data.append('image', fileData)

    fetch("https://memeton-back.azurewebsites.net/upload", {
        method: "POST",
        body: data,
    })
        .then((result) => {
            console.log("File sent successfully");
        })
        .catch((err) => {
            console.log(err.message);
        });

    return (
        <div className="upload">
            <form onSubmit={onSubmitHandler}>
                <input type="file" onChange={fileChangeHandler} />
                <br />

                <button type="submit">Upload</button>
            </form>
        </div>
    );
}





export default Upload;