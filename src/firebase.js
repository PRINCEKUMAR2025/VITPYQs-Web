import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBwSMNKfmIWzYrdETQLsXepSOAReRArjnQ",
  authDomain: "fir-check-acf98.firebaseapp.com",
  databaseURL: "https://fir-check-acf98-default-rtdb.firebaseio.com",
  projectId: "fir-check-acf98",
  storageBucket: "fir-check-acf98.appspot.com",
  messagingSenderId: "810627274140",
  appId: "1:810627274140:web:d11d7b3c4b9a7ad55de459",
  measurementId: "G-MRXBKCJ8VR"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const database = getDatabase(app);
const auth = getAuth(app);

export { storage, database, auth };