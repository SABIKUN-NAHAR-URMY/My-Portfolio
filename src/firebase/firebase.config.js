// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbGPfAwtXAoXXQEuVRxjQ1KK0cN3qJalI",
  authDomain: "my-portfolio-449b5.firebaseapp.com",
  projectId: "my-portfolio-449b5",
  storageBucket: "my-portfolio-449b5.appspot.com",
  messagingSenderId: "972787301931",
  appId: "1:972787301931:web:d32a7781757cf17077f46e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;