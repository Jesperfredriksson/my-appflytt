import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBQWo7y56JcIY06trEUsY9PGyzMcVSmVcI",
  authDomain: "movingparty-c3952.firebaseapp.com",
  databaseURL: "https://movingparty-c3952.firebaseio.com",
  projectId: "movingparty-c3952",
  storageBucket: "movingparty-c3952.appspot.com",
  messagingSenderId: "418037210231",
})

const fireStore = firebaseApp.firestore()

export { firebaseApp, fireStore }
