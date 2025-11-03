import React, { useState } from "react";

function App() {
  const [file, setFile] = useState(null);

  function handleFileChange(e) {
    setFile(e.target.files[0]);
  }

  async function handleUpload() {
    const formData = new FormData();
    formData.append("image", file);

    const response = await fetch("http://localhost:3000/api/myimages/uploads", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    console.log("Upload Response:", data);
  }

  return (
    <div>
      <h2>Image Upload</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default App;