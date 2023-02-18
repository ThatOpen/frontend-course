import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { initializeApp } from "firebase/app";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjR_ivQkdToY7uyeVWgyXld1Awl1jcSsQ",
  authDomain: "ifcjs-frontend-exercise.firebaseapp.com",
  projectId: "ifcjs-frontend-exercise",
  storageBucket: "ifcjs-frontend-exercise.appspot.com",
  messagingSenderId: "490019428851",
  appId: "1:490019428851:web:9b912649cc47d7929c9a86",
};

// Initialize Firebase
initializeApp(firebaseConfig);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
