// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-room-redesign-2080b.firebaseapp.com",
  projectId: "ai-room-redesign-2080b",
  storageBucket: "ai-room-redesign-2080b.firebasestorage.app",
  messagingSenderId: "1080521410871",
  appId: "1:1080521410871:web:b83e362ef46a767fb9f2b2",
  measurementId: "G-ECXKV2M439"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
