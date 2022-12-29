// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUhT418gidgPOQnT2ZZmXarwS54E1r8IY",
  authDomain: "allutilitytools.firebaseapp.com",
  projectId: "allutilitytools",
  storageBucket: "allutilitytools.appspot.com",
  messagingSenderId: "101603962570",
  appId: "1:101603962570:web:38a7f247ad657a8957ce33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app