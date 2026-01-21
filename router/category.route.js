import express from 'express'
import {
	createCategory,
	deleteCategory,
	getAllCategory,
	getSingleCategory,
	updateCategory,
} from '../controllers/category.controller.js'

const categoryRouter = express.Router()

categoryRouter.get('/', getAllCategory)

categoryRouter.get('/:id', getSingleCategory)

categoryRouter.post('/', createCategory)

categoryRouter.delete('/:id', deleteCategory)

categoryRouter.put('/:id', updateCategory)

export default categoryRouter
