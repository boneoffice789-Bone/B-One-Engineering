// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, getDoc, updateDoc, deleteDoc, doc, query, where, orderBy, limit, serverTimestamp, onSnapshot, setDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, sendPasswordResetEmail, updateProfile } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// ⚠️ ປ່ຽນເປັນຄ່າຈາກ Firebase Console ຂອງທ່ານ
const firebaseConfig = {
  apiKey: "AIzaSyBkLZAa0YR5QzWFyaHkoA2rxQREI8D9DeA",
  authDomain: "b-one-engineering-39728.firebaseapp.com",
  projectId: "b-one-engineering-39728",
  storageBucket: "b-one-engineering-39728.firebasestorage.app",
  messagingSenderId: "952177236727",
  appId: "1:952177236727:web:2d1cb669ca76286d83d1f2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { 
  db, auth,
  collection, addDoc, getDocs, getDoc, updateDoc, deleteDoc, doc, query, where, orderBy, limit, serverTimestamp, onSnapshot, setDoc,
  createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, sendPasswordResetEmail, updateProfile
};
