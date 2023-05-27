 import firebase from "firebase";

//initialize your database
const firebaseConfig = {
  apiKey: "AIzaSyCfHMPpp56V0JT1lvwb2MA2XtXaH0fqeSM",
  authDomain: "project-35-7ef8a.firebaseapp.com",
  databaseURL: "https://project-35-7ef8a-default-rtdb.firebaseio.com",
  projectId: "project-35-7ef8a",
  storageBucket: "project-35-7ef8a.appspot.com",
  messagingSenderId: "184248570998",
  appId: "1:184248570998:web:b69be8a9468daf684c7b57"
};

let app = firebase.initializeApp(firebaseConfig);

  export default app.database()
 

  