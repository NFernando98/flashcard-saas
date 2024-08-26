// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_ME-8muHX8Jclgy2mrVUAvmz--AnAs_M",
  authDomain: "flashcards-c4219.firebaseapp.com",
  projectId: "flashcards-c4219",
  storageBucket: "flashcards-c4219.appspot.com",
  messagingSenderId: "958276847123",
  appId: "1:958276847123:web:0f816b64f48c658af521e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;