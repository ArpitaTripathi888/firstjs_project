// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWiu85-3QcI_r_j47ZQne_G_KkPznKQLQ",
  authDomain: "web-nextjs-project.firebaseapp.com",
  projectId: "web-nextjs-project",
  storageBucket: "web-nextjs-project.appspot.com",
  messagingSenderId: "696188091238",
  appId: "1:696188091238:web:e985ff6f97d45df23a26a7",
  measurementId: "G-6DE9ZM9GHE"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// export default {app, auth};

export default firebase;
