const admin = require('firebase-admin')
const config = require('config')

const serviceAccount = require('./key-bookstore.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: config.get('firebaseadmin.url')
})

module.exports = { admin }
