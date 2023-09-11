import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB0c5w2emBZN0a11tswp_gpicK6GU_U2u8",
  authDomain: "scholarly-380407.firebaseapp.com",
  projectId: "scholarly-380407",
  storageBucket: "scholarly-380407.appspot.com",
  messagingSenderId: "55005882059",
  appId: "1:55005882059:web:efe0e55dbe274f8ec2dd4e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const provider = new GoogleAuthProvider();

const signInWithGoogle = () => {
  return signInWithPopup(auth, provider);
};

export { signInWithGoogle, app, auth, db };
