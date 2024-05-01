import React from 'react';
import im1 from "./profile-image-removebg-preview.png"
import im2 from "./programmer.png"
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';


const Getid = () => {
    const navigate = useNavigate();
  const [selectedImageId, setSelectedImageId] = useState(null);

  const handleImageClick = (imageId) => {
    navigate(`/image/${imageId}`);
  };

  return (
    <div>
      <h1>Form Page</h1>
      <form>
      
        <div>
          <h2>Click an image to select:</h2>
         <img src={im1} onClick={() => handleImageClick("660e39e66c8cbba467b78782")} style={{width:'20%',height:'20%'}} alt='image-1'></img>
         <img src={im2} onClick={() => handleImageClick("660e3a376c8cbba467b78784")} style={{width:'20%',height:'20%'}} alt='image-2'></img>
        </div>
      </form>
    </div>
  );
};

export default Getid;
