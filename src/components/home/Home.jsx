import React, { useState,useEffect } from "react";
import { getAllArt } from "../../apiCalls";

import "./Home.css"



const Home = () => {
    const [images, setImages] = useState([])
  useEffect(() => {
   const getImages = async() => {
    const resp = await getAllArt()
    //const data = await resp.json()
    console.log(resp.artObjects);
    setImages(resp.artObjects);
    console.log(images);
   }
   getImages()
  },[]);

 
  const allImages = images.map(Image => <img className="images" src={Image.webImage.url}></img>)
  console.log(images);
  return allImages
};

export default Home;
