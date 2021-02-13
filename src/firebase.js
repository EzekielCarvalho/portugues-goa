import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCLXp81Q5ot3EgDPnNK6NVwBk8K57WueBg",
  authDomain: "goa-porto-contact-form.firebaseapp.com",
  projectId: "goa-porto-contact-form",
  storageBucket: "goa-porto-contact-form.appspot.com",
  messagingSenderId: "836171322202",
  appId: "1:836171322202:web:8ef1bd299c15bcf11c5963"
});

var db = firebaseApp.firestore();

export { db };
 
 


