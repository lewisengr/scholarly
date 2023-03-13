import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

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
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};

export { signInWithGoogle };
