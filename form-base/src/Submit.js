import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import './Submit.css'

function Submit()
{
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  
const { imageId } = useParams();
  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/api/submitform/${imageId}`);
      setFormData(response.data);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  }
    return(
       <div className="base">
         <h1>EMPLOYEE DETAILS</h1>
       
       <div className="div2">
       <div className="prof">
        <div className="images">
        <img src={`http://localhost:4000/${formData.imagePath}`}></img>
        </div>
        <div className="names">
         <h2>{formData.name}</h2>
         <p>{formData.role}</p>
        </div>
        </div>
        <div className="sum-res">
          <div className="sum">
            <h3>Bio</h3>
            <p>{formData.bio}</p>
          </div>
          <div className="res">
          <h3>Responsiblity</h3>
          <p>{formData.resp}</p>
          </div>
        </div>
        <div className="contact">
        <div className="skills">
          <h3>Skills</h3>
          <ul>
          {formData.skills && formData.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
        </ul>
         
        </div>
        <div className="exp">
          <h3 style={{textAlign:'left'}}>Experience</h3>
         <ul>
          <li>No of years</li>
          <li>Tag line</li>
         </ul>
        </div>
        <div className="other">
        <h3><b>Other Details</b></h3>
        <ul>
          <li><b>interests:</b>&nbsp;{formData.int}</li>
          <li>{formData.tag}</li>
        </ul>
        </div>
        <div className="con">
          <div className="mail">
            <h3>Contact</h3>
            <ul>
              <li>{formData.email}</li>
              <li>{formData.phone}</li>
            </ul>
          </div>
        </div>
        </div>
       </div>
      
      <div className="end">
        
      </div>
        </div>
        
    )
}
export default Submit;