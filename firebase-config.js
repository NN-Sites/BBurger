// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCglpLNJdn_RSxhyJeOHtVINDuL4NsXXz0",
  authDomain: "b-burger-orders.firebaseapp.com",
  databaseURL: "https://b-burger-orders-default-rtdb.firebaseio.com",
  projectId: "b-burger-orders",
  storageBucket: "b-burger-orders.firebasestorage.app",
  messagingSenderId: "339715291942",
  appId: "1:339715291942:web:4d8a2f2278820dfc149fe7",
  measurementId: "G-BLKCV74R8J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref };