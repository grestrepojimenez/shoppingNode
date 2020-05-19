/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/products           ->  index
 * GET     /api/products/:id       ->  show
 * POSG    /api/products           ->  create
 */

const Product = require('./product.model')

//Gets a list of products
function index(req, res) {
  return Product.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res))
}

//Create product
function create(req, res) {
  return Product.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res))
}

//Update product
function update(req, res) {
  return Product.findOneAndUpdate(req.params.id, req.body, { new: true })
    .then(respondWithResult(res, 201))
    .catch(handleError(res))
}

// Get a single product from DB
function show(req, res) {
  return Product.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res))
}

// Delete single product from DB
function deleteProduct(req, res) {
  return Product.findOneAndRemove(req.params.id)
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res))
}

function respondWithResult(res, code) {
  const statusCode = code || 200
  return (entity) => {
    if (entity) res.status(statusCode).json(entity)
  }
}

function handleEntityNotFound(res) {
  return (entity) => {
    if (!entity) {
      res.status(404).end()
      return null
    }
    return entity
  }
}

function handleError(res, code) {
  const statusCode = code || 500
  return (err) => {
    res.status(statusCode).send(err)
  }
}

module.exports = {
  create,
  update,
  show,
  index,
  deleteProduct
}
