/* eslint-disable no-restricted-syntax */
/* eslint-disable import/no-unresolved */
/* eslint-disable array-callback-return */
/* eslint-disable no-alert */
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
import axios from "axios";
import { useState, useEffect } from "react";

import "./ProjectImage.css";

export default function ProjectImage() {
  const [image, setImage] = useState([]);
  const getImage = async () => {
    try {
      const data = await axios
        .get(`${import.meta.env.VITE_BACKEND_URL}pictures`)
        .then((response) => response.data);
      setImage(data);
      console.log(data);
    } catch (err) {
      if (err.response.status === 401) {
        alert("not found");
      }
    }
  };
  useEffect(() => {
    getImage();
  }, []);
  return (
    <div className="image-project">
      {image.map((picture) => (
        <div key={picture.id}>
          <a href="https://www.youtube.com/">
            <img
              src={`${import.meta.env.VITE_IMAGES_URL}${picture.file}`}
              alt={picture.describe}
            />
          </a>
        </div>
      ))}
    </div>
  );
}
