import "./App.css";

import { Switch, Route, Redirect } from "react-router-dom";

import React, {useState, useEffect} from "react";
import Home from "../home/Home";
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
          .catch(response => response)
    }
    getImages()
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
                  <IndividualPainting selectedId={id} />
                </div>
              );
            }else{
              return(<Route component={PageNotFound} />)
            }
          }}
        />
        <Route 
          path="/mygallery"
          render={() => {
            return <MyGallery />
          }} />
        <Route path="/error" component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
