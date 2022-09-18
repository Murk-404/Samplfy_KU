// import {useState} from 'react'
// import {db} from './firebase-db'
// import {collection, addDoc, Timestamp} from 'firebase/firestore'

// function doSum({onClose, open}) {

//   const [name, setName] = useState('')

//   /* function to add new task to firestore */
//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     try {
//       await addDoc(collection(db, 'tasks'), {
//         title: title,
//         description: description,
//         completed: false,
//         created: Timestamp.now()
//       })
//       onClose()
//     } catch (err) {
//       alert(err)
//     }
//   }
// }

