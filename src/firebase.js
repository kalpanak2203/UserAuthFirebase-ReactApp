import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDnIoyMo-079HJZW1pAgW4iYXmiNbgEYrA",         
  authDomain: "authapp-9e3e5.firebaseapp.com",
  projectId: "authapp-9e3e5",
  storageBucket: "authapp-9e3e5.firebasestorage.app",
  messagingSenderId: "798630579039",
  appId: "1:798630579039:web:24b481693ddd215b2e04ea"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
