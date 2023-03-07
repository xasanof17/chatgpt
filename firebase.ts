import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCSKWMen-7N0pr2pYFAKMuFXwyWXIAqLrY",
  authDomain: "chatgpt-369d4.firebaseapp.com",
  projectId: "chatgpt-369d4",
  storageBucket: "chatgpt-369d4.appspot.com",
  messagingSenderId: "108660631018",
  appId: "1:108660631018:web:cc93dcdde3306e67c77e93",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
