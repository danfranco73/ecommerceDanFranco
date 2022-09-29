import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3-CrcDbrqI7SVzBSJN5Yf4qB8jD6n0T8",
  authDomain: "coderhouse-ecommerce-3c1c6.firebaseapp.com",
  projectId: "coderhouse-ecommerce-3c1c6",
  storageBucket: "coderhouse-ecommerce-3c1c6.appspot.com",
  messagingSenderId: "146036619301",
  appId: "1:146036619301:web:91f454db2d8bbe9240a7cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
