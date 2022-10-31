import "./App.css";

import { Router, Switch, NavLink, Route } from "react-router-dom";

import React, {useState, useEffect} from "react";
import Home from "../home/Home";
import Form from "../form/Form";
import IndividualPainting from "../individualPainting/IndividualPainting";
import Navbar from "../navbar/Navbar";
import PageNotFound from "../../pageNotFound/PageNotFound";
import {getAllArt, getSinglePainting} from "../../apiCalls"


function App() {
 // const [selectedPainting, setPainting] = useState(null)
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getImages = () => {
      getAllArt().then(response => {
        setImages(response.artObjects)
      })      
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
            console.log(id);
            return (
              <div>
                <IndividualPainting selectedId={id}/> <Form />
              </div>
            );
          }}
        />

        <PageNotFound />
      </Switch>
    </div>
  );
}

export default App;
