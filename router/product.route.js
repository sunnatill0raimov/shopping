import express from 'express'
import {
	createProduct,
	deleteProduct,
	getProduct,
	updateProduct,
} from '../controllers/product.controller.js'

const productRoutes = express.Router()

//! Client routes
productRoutes.get('/', getProduct)
productRoutes.get('/:id', getProduct)
productRoutes.post('/', createProduct)
productRoutes.delete('/:id', deleteProduct)
productRoutes.put('/:id', updateProduct)

export default productRoutes
