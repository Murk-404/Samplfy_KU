import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'
// import firebase from "firebase";


const firebaseConfig  = {
  apiKey: "AIzaSyDeoQZ6j4Y4w-t4fXqatjvcHFc2TaJ75d0",
  authDomain: "spotify-react-project-d3cd9.firebaseapp.com",
  projectId: "spotify-react-project-d3cd9",
  storageBucket: "spotify-react-project-d3cd9.appspot.com",
  messagingSenderId: "297128653449",
  appId: "1:297128653449:web:1563e193bcf8b08047cc58",
  measurementId: "G-ZNS5VZ4NHD"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export {db}

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();
  
// export default db;