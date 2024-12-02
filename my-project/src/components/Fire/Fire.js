// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnH9nirNfEZooPSkU18AcWqNuOXFGyRUw",
  authDomain: "assinment-9-1e364.firebaseapp.com",
  projectId: "assinment-9-1e364",
  storageBucket: "assinment-9-1e364.firebasestorage.app",
  messagingSenderId: "195107945994",
  appId: "1:195107945994:web:ed375fef927bd45d20a9f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const auth=getAuth(app)
