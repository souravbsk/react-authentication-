// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYbWA1JimoBLXmBFfCAg_9pEd-tRW9nng",
  authDomain: "the-dragon-newspaper-recap.firebaseapp.com",
  projectId: "the-dragon-newspaper-recap",
  storageBucket: "the-dragon-newspaper-recap.appspot.com",
  messagingSenderId: "987767662360",
  appId: "1:987767662360:web:f62fd1e9457752819ce06d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;