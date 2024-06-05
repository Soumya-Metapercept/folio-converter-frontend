// App.js
import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [file, setFile] = useState(null);
    const [downloadUrl, setDownloadUrl] = useState("");

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleFileUpload = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", file);

        try {
            await axios.post("/api/upload", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            alert("File uploaded successfully.");
        } catch (error) {
            console.error("Error uploading file", error);
        }
    };

    const handleFileConvertAndDownload = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get("/api/convert", {
                responseType: "blob",
            });

            const url = window.URL.createObjectURL(new Blob([response.data]));
            setDownloadUrl(url);
        } catch (error) {
            console.error("Error converting and downloading file", error);
        }
    };

    return (
        <div>
            <form onSubmit={handleFileUpload}>
                <input type="file" onChange={handleFileChange} />
                <button type="submit">Upload</button>
            </form>
            <button onClick={handleFileConvertAndDownload}>Convert & Download</button>
            {downloadUrl && (
                <a href={downloadUrl} download="converted.zip">
                    Download Converted Files
                </a>
            )}
        </div>
    );
}

export default App;
