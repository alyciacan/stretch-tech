import "./App.css";

import { Router, Switch, NavLink, Route } from "react-router-dom";

import React, {useState, useEffect, useContext} from "react";
import Home from "../home/Home";
import Form from "../form/Form";
import IndividualPainting from "../individualPainting/IndividualPainting";
import Navbar from "../navbar/Navbar";
import MyGallery from "../myGallery/MyGallery";
import PageNotFound from "../pageNotFound/PageNotFound";
import { getAllArt } from "../../apiCalls"


function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getImages = () => {
      getAllArt()
      .then(response => {setImages(response.artObjects)})
      .catch(err => console.log(err))    
    };
    getImages();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return <Home images={images}/>;
          }}
        />

        <Route
          path="/IndividualPainting/:id"
          render={({ match }) => {
            const id = match.params.id
            if(images.find( image => image.objectNumber === id)){
              return (
                <div>
                  <IndividualPainting memeTitle={memeTitle} setMemeTitle={setMemeTitle} selectedId={id}/> <Form getMemeTitle={getMemeTitle}/>
                </div>
              );
            }else{
              return(<Route component={PageNotFound} />)
            }
           
            return (
              <div>
                <IndividualPainting 
                // memeTitle={memeTitle} 
                // setMemeTitle={setMemeTitle} 
                selectedId={id}/> 
              </div>
            );
          }}
        />
        <Route 
          path="/mygallery"
          render={() => {
            return <MyGallery />
          }} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
