/* Auth configuration */

const { Router } = require('express') // diferent from original

const User = require('../api/user/user.model')
const authLocal = require('./local/passport')
const configPassportLocal = require('./local')

// Passport Configuration
authLocal.setup(User)

const router = new Router() // diferent from original

router.use('/local', configPassportLocal)

module.exports = router
