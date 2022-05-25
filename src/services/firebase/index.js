
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"



const firebaseConfig = {
  apiKey: Process.env.REACT_APP_apiKey,
  authDomain: Process.env.REACT_APP_authDomain,
  projectId: Process.env.REACT_APP_projectId,
  storageBucket: Process.env.REACT_APP_storageBucket,
  messagingSenderId: Process.env.REACT_APP_essagingSenderId,
  appId: Process.env.REACT_APP_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app)