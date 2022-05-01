
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"



const firebaseConfig = {
  apiKey: "AIzaSyCF35gYZDaEXi8zbVs7kUrJAsbDrKsamMM",
  authDomain: "ecommecereact.firebaseapp.com",
  projectId: "ecommecereact",
  storageBucket: "ecommecereact.appspot.com",
  messagingSenderId: "1032177962839",
  appId: "1:1032177962839:web:8b34d3a303c19db9e1f812"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app)