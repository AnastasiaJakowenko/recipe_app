import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCIsCfwOa_ci8JmxxEeCqIc0oRQEUh2IyI",
  authDomain: "react-recipe-yt-b9d26.firebaseapp.com",
  projectId: "react-recipe-yt-b9d26",
  storageBucket: "react-recipe-yt-b9d26.appspot.com",
  messagingSenderId: "656981132984",
  appId: "1:656981132984:web:fc3835b6759215dc13964d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export{db}