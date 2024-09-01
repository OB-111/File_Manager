import React, { useState } from "react";
import axios from "axios";
import { useAppSelector } from "../../redux/hooks";

const HomeView: React.FC = () => {
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const userId = useAppSelector((state) => state.userSlice.selectedUser.u_id);
  const handleUpload = async () => {
    if (!selectedFiles) return;

    const fd = new FormData();
    Array.from(selectedFiles).forEach((file) => {
      fd.append("files", file);
    });
    // Log the contents of FormData
    for (const pair of fd.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
    try {
      // Sending the files to the backend
      const response = await axios.post(
        `http://localhost:3000/files/upload/${userId}`,
        fd,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error uploading files:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>File Uploader</h1>
      <input
        type="file"
        name="file"
        multiple
        onChange={(e) => setSelectedFiles(e.target.files)}
      />
      <button onClick={handleUpload} disabled={!selectedFiles}>
        Upload Files
      </button>
    </div>
  );
};

export default HomeView;
