const config = require('config')
const firebase = require('firebase/app')
require('firebase/auth')

const firebaseConfig = {
  apiKey: config.get('firebase.apikey'),
  authDomain: config.get('firebase.authdomain'),
  databaseURL: config.get('firebase.databaseurl'),
  projectId: config.get('firebase.projectid'),
  storageBucket: config.get('firebase.storagebucket'),
  messagingSenderId: config.get('firebase.messagingsenderid'),
  appId: config.get('firebase.appid')
}

const otherApp = firebase.initializeApp(firebaseConfig)
firebase.auth(otherApp)

module.exports = firebase
