const firebase = require('firebase')
require('firebase/firestore')

const config = {
  apiKey: 'AIzaSyB-5aJfBWUh86Q92gDnanBIoRCpsC7Hlic',
  authDomain: 'crdlr-abfe7.firebaseapp.com',
  databaseURL: 'https://crdlr-abfe7.firebaseio.com',
  projectId: 'crdlr-abfe7',
  storageBucket: 'crdlr-abfe7.appspot.com',
  messagingSenderId: '691462554775'
}
firebase.initializeApp(config)
const firestore = firebase.firestore()
const storage = firebase.storage()
const auth = firebase.auth()
export {firestore, auth, storage}
