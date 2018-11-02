import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBQWo7y56JcIY06trEUsY9PGyzMcVSmVcI",
  authDomain: "movingparty-c3952.firebaseapp.com",
  databaseURL: "https://movingparty-c3952.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
