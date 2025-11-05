// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDIVKWbWLEw9FTjeHL0yaiNNLEInvoCX50",
  authDomain: "giao-lam-bai-tap.firebaseapp.com",
  databaseURL: "https://giao-lam-bai-tap-default-rtdb.firebaseio.com",
  projectId: "giao-lam-bai-tap",
  storageBucket: "giao-lam-bai-tap.firebasestorage.app",
  messagingSenderId: "871841901031",
  appId: "1:871841901031:web:0db2313fce1334244ff542"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
