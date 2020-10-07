const firebase = require('../../../connect-firebase')

const login = async (req, res) => {
  try {
    const { email, password } = req.body
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(function (result) {
        res.status(200).json(result)
        // TODO Whatever you want to do
      }).catch(function (error) {
        res.status(400).json(error)
      })
  } catch (error) {
    console.error(error)
    res.status(500).json({
      status: 500,
      message: 'Unknown Internal Server Error.'
    })
  }
}

module.exports = { login }
