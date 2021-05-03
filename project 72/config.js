import firebase from 'firebase'
require("@firebase/firestore")


const firebaseConfig = {
  apiKey: "AIzaSyABUHm8aRLrv8_UoIPNnygneLO8qiusAT0",
  authDomain: "storything-d18e3.firebaseapp.com",
  databaseURL: "https://storything-d18e3-default-rtdb.firebaseio.com",
  projectId: "storything-d18e3",
  storageBucket: "storything-d18e3.appspot.com",
  messagingSenderId: "439952905538",
  appId: "1:439952905538:web:3f7caaf004ae4e751d24db",
  measurementId: "G-LGVG2SEGPJ"
};



firebase.initializeApp(firebaseConfig);

export default firebase.firestore()