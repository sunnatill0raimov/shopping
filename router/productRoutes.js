import express from 'express';
import { createProduct, deleteProduct, getProduct, updateProduct } from '../controllers/productController.js';

const productRoutes = express.Router();

//! Client routes
productRoutes.get('/', getProduct)
productRoutes.post('/', createProduct)
productRoutes.delete('/:id', deleteProduct)
productRoutes.put('/:id', updateProduct)

export default productRoutes;