// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getReactNativePersistence } from "@firebase/auth/dist/rn/index.js";
import { initializeAuth } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "[apiKey]",
  authDomain: "[authDomain]",
  projectId: "[projectId]",
  storageBucket: "[storageBucket]",
  messagingSenderId: "[messagingSenderId]",
  appId: "[appId]",
  measurementId: "[measurementId]",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
export const db = getFirestore(app);
