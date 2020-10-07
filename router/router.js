const { Router } = require('express')

const { createUser, getUser, getUserById, updateUser, deleteUser } = require('./controller/users/controller')
const { createBook, getBook, getBookById, updateBook, deletBook } = require('./controller/books/controller')
const { login } = require('./controller/login/controller')
const { middleware } = require('./middleware/controller')

const router = Router()

router.post('/login', login)

router.post('/users', createUser)
router.get('/users', middleware, getUser)
router.get('/users/:Id', middleware, getUserById)
router.put('/users/:Id', middleware, updateUser)
router.patch('/users/:Id', middleware, updateUser)
router.delete('/users/:Id', middleware, deleteUser)

router.post('/books', createBook)
router.get('/books', getBook)
router.get('/books/:Id', getBookById)
router.put('/books/:Id', updateBook)
router.patch('/books/:Id', updateBook)
router.delete('/books/:Id', deletBook)

module.exports = router
