// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFCV6suMtEzXi5Yy2m9KZCymbe7pI13oQ",
  authDomain: "isbaah-book-wearhouse.firebaseapp.com",
  projectId: "isbaah-book-wearhouse",
  storageBucket: "isbaah-book-wearhouse.appspot.com",
  messagingSenderId: "160189529192",
  appId: "1:160189529192:web:278bc21328335b5e7f8fdd",
  measurementId: "G-3PMMKBBJJC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export { auth, analytics };
