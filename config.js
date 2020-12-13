import firebase from 'firebase';
require('@firebase/firestore')

 // Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyCXnFu75CaxJIOA7jkgggwuRJkJ5tsiw2U",
  authDomain: "booksanta-app-c8c94.firebaseapp.com",
  databaseURL: "https://booksanta-app-c8c94.firebaseio.com",
  projectId: "booksanta-app-c8c94",
  storageBucket: "booksanta-app-c8c94.appspot.com",
  messagingSenderId: "223951525412",
  appId: "1:223951525412:web:759a90de2482246e662ab1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
