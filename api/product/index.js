/* Products EndPoint*/

const { Router } = require('express')
const controller = require('./product.controller')
const router = new Router()

// All Verbs
router.get('/', controller.index)
router.get('/:id', controller.show)
router.put('/:id', controller.update)
router.post('/', controller.create)
router.delete('/:id', controller.deleteProduct)

module.exports = router
