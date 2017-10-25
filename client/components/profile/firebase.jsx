import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDAgjRD2Ad08tn8r4ZYh7asPnkr-POLKlI",
  authDomain: "hackathon-4b4ff.firebaseapp.com",
  databaseURL: "https://hackathon-4b4ff.firebaseio.com",
  projectId: "hackathon-4b4ff",
  storageBucket: "",
  messagingSenderId: "584770318198"
};;

const fire = firebase.initializeApp(config);
export default fire;
