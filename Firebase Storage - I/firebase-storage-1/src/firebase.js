
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyB3qjkOjisqVt3SuQHNsFfh8eVxGAcak9c",
  authDomain: "auth-task-efbec.firebaseapp.com",
  databaseURL: "https://fir-authenticate-e615a-default-rtdb.firebaseio.com",
  projectId: "auth-task-efbec",
  storageBucket: "auth-task-efbec.appspot.com",
  messagingSenderId: "586559944638",
  appId: "1:586559944638:web:16b301311dceb6135aebef",
  measurementId: "G-9LFR8VNPPV"
};


const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export{database}
