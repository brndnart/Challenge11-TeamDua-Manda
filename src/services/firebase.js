import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import {
  getFirestore,
  query,
  getDocs,
  doc,
  collection,
  where,
  setDoc,
  updateDoc,
} from "firebase/firestore";

import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
// };

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBA8xhNcKB7wHffy5Zg-glFS96vr-MkyL0",
  authDomain: "binarchallenge11-fahmi.firebaseapp.com",
  projectId: "binarchallenge11-fahmi",
  storageBucket: "binarchallenge11-fahmi.appspot.com",
  messagingSenderId: "642595193481",
  appId: "1:642595193481:web:7a5ad85483801f9a4c7c58",
  measurementId: "G-RRY2MGLX80"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

const googleProvider = new GoogleAuthProvider();

async function signInWithGoogle() {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
}

async function updatePhotoProfile(uid, downloadUrl) {
  await updateDoc(doc(db, "users", uid), {
    profileUrl: downloadUrl,
  });
}

function logout() {
  signOut(auth);
}

export { auth, db, logout, signInWithGoogle, storage, updatePhotoProfile };
