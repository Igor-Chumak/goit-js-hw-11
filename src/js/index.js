// npm install firebase@9.23.0
import firebase from 'firebase/compat/app';
//// Required for side-effects
import 'firebase/firestore';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAWL009d3fIg7FDNeFa1MpQ8vcCju1UWEQ',
  authDomain: 'project-js-fson82.firebaseapp.com',
  databaseURL: 'https://project-js-fson82-default-rtdb.firebaseio.com',
  projectId: 'project-js-fson82',
  storageBucket: 'project-js-fson82.appspot.com',
  messagingSenderId: '729076020797',
  appId: '1:729076020797:web:e3a2da2c14a169a281dc54',
};

const refs = {};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// from https://firebase.google.com/docs/firestore/quickstart?hl=ru#web-modular-api

import { collection, addDoc } from 'firebase/firestore';

db.collection('users')
  .add({
    first: 'Ada',
    last: 'Lovelace',
    born: 1815,
  })
  .then(docRef => {
    console.log('Document written with ID: ', docRef.id);
  })
  .catch(error => {
    console.error('Error adding document: ', error);
  });

// try {
//   const docRef = await addDoc(collection(db, 'users'), {
//     first: 'Ada',
//     last: 'Lovelace',
//     born: 1815,
//   });
//   console.log('Document written with ID: ', docRef.id);
// } catch (e) {
//   console.error('Error adding document: ', e);
// }

// test
newMessageRef = {
  name: 'Igor',
  email: 'chigorv@ukr.net',
  subject: 'subject test',
  message: '1234567890',
};

// Reference messages collection
// let messagesRef = firebase.database().ref('contactformmessages');

// $('#contactForm').submit(function (e) {
//   e.preventDefault();

//   var newMessageRef = messagesRef.push();
//   newMessageRef.set({
//     name: $('.fullname').val(),
//     email: $('.email').val(),
//     subject: $('.subject').val(),
//     message: $('.message').val(),
//   });

//   $('.success-message').show();

//   $('#contactForm')[0].reset();
// });
