import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCKo2UJMBX0NB4SCpThUY7dtG9Zo2OiBUQ",
  authDomain: "muso-ninja-e0ff1.firebaseapp.com",
  projectId: "muso-ninja-e0ff1",
  storageBucket: "muso-ninja-e0ff1.appspot.com",
  messagingSenderId: "452464070941",
  appId: "1:452464070941:web:1c896c5a627ef923e651f4"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }
