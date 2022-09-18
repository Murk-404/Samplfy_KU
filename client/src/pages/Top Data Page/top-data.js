import './top-data.css'
import React, {useState, useEffect} from 'react'
import {collection, addDoc, Timestamp, query, orderBy, onSnapshot} from "firebase/firestore"
import {db} from './/../../firebase-db'
import Credentials from '../../Credentials/Credentials'
// import axios from 'axios'

const Song = () => {

  const CLIENT_ID = Credentials.CLIENT_ID;
  const REDIRECT_URI = Credentials.REDIRECT_URI;
  const CLIENT_SECRET = Credentials.CLIENT_SECRET;

  const [CODE, setCODE] = useState([])
  const addCode = () => {
    const code = localStorage.getItem('code');
    try {
        addDoc(collection(db, 'users'), {
        code: code,
        created: Timestamp.now()
      })
      // onClose()
    } catch (err) {
      alert(err)
    }
    return
  }

  window.addEventListener('load', (event) => {
    addCode()
  });

  async function readCode() {
    const q = query(collection(db, 'users'), orderBy('created', 'desc'))
    onSnapshot(q, (querySnapshot) => {
      setCODE(querySnapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    })
  }
  const runSomething = () => {
    readCode().then(
      function() { 
        console.log('This is the code')
        console.log(CODE[0].data.code)
      }
    )
  }
  
  return (
    <div id='container'>
      <div id='text'>
        <button onClick={ runSomething }> Read Code </button>
      </div>
    </div>
  );
};
  
export default Song;