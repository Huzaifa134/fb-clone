
import { initializeApp } from "firebase/app";
import { FacebookAuthProvider, getAuth } from "firebase/auth";
import {
  getFirestore,
} from 'firebase/firestore';
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyC-Z5Azog3r8SvO3w26JsyCbG3uUqLQPCU",
  authDomain: "fb-clone-3e12c.firebaseapp.com",
  projectId: "fb-clone-3e12c",
  storageBucket: "fb-clone-3e12c.appspot.com",
  messagingSenderId: "638560220855",
  appId: "1:638560220855:web:e85b1b6a8e9b8623c8ff32"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const provider = new FacebookAuthProvider();

export const db = getFirestore();
export const storage = getStorage(app);
// export const storage = firebaseConfig.storage();
// const userDocRef = doc(db, 'posts');

// export const storage = await getDoc(userDocRef);
