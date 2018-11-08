import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';


const config = {
  apiKey: "AIzaSyCrvxDPgh5VCPkiy2u7AjQ2lA8LAVDwGt8",
  authDomain: "m-city-33253.firebaseapp.com",
  databaseURL: "https://m-city-33253.firebaseio.com",
  projectId: "m-city-33253",
  storageBucket: "m-city-33253.appspot.com",
  messagingSenderId: "775937527598"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');
const firebasePromotions = firebaseDB.ref('promotions');
const firebaseTeams = firebaseDB.ref('teams');
const firebasePlayers = firebaseDB.ref('players');

export {
  firebase,
  firebaseMatches,
  firebasePromotions,
  firebaseTeams,
  firebaseDB,
  firebasePlayers
}