import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBu6GfGLAOwePEn0aKM08ZMAWQs7E18ULk",
  authDomain: "hosting-d6c22.firebaseapp.com",
  projectId: "hosting-d6c22",
  storageBucket: "hosting-d6c22.appspot.com",
  messagingSenderId: "543851412429",
  appId: "1:543851412429:web:2319afabd209d96e77a284",
  measurementId: "G-RQRN55FFGH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app); 