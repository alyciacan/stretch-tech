import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "../src/components/app/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { MemeProvider } from '../src/contexts/MemeContext';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
    <Router>
      <MemeProvider>
        <App />
      </MemeProvider>
    </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
