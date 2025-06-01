// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getReactNativePersistence } from "@firebase/auth/dist/rn/index.js";
import { initializeAuth } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCY65U2mlR9uAlA6MULXP9_tBbJ-R5P7t8",
  authDomain: "projetomobile-5218f.firebaseapp.com",
  projectId: "projetomobile-5218f",
  storageBucket: "projetomobile-5218f.firebasestorage.app",
  messagingSenderId: "367812761187",
  appId: "1:367812761187:web:9214ef3729147a7cfe0a56",
  measurementId: "G-PGGV6CY4TD",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export const db = getFirestore(app);
