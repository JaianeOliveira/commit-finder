import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyC1-9EhcN1LOJm2sDoBjWbJvi7CqMznKe4",
  authDomain: "commit-finder.firebaseapp.com",
  projectId: "commit-finder",
  storageBucket: "commit-finder.appspot.com",
  messagingSenderId: "481611527446",
  appId: "1:481611527446:web:82bc428bbc91531857cc37"
};

const firebase = initializeApp(firebaseConfig);

export default firebase;