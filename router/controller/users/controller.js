const { admin } = require('../../../connect-firebaseAdmin')

const createUser = async (req, res) => {
  const { email, password, type } = req.body
  const user = await admin.auth().createUser({
    email,
    password,
    type
  })
  res.status(201).json(user)
}

const getUser = (req, res) => {
  try {
    res.send('getUser')
  } catch (error) {
    console.error(error)
    res.status(500).json({
      status: 500,
      message: 'Unknown Internal Server Error.'
    })
  }
}

const getUserById = (req, res) => {
  try {
    res.send('getUserById')
  } catch (error) {
    console.error(error)
    res.status(500).json({
      status: 500,
      message: 'Unknown Internal Server Error.'
    })
  }
}

const updateUser = (req, res) => {
  try {
    res.send('updateUser')
  } catch (error) {
    console.error(error)
    res.status(500).json({
      status: 500,
      message: 'Unknown Internal Server Error.'
    })
  }
}

const deleteUser = (req, res) => {
  try {
    res.send('deleteUser')
  } catch (error) {
    console.error(error)
    res.status(500).json({
      status: 500,
      message: 'Unknown Internal Server Error.'
    })
  }
}

module.exports = {
  createUser,
  getUser,
  getUserById,
  updateUser,
  deleteUser
}
