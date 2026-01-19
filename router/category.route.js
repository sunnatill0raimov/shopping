import express from 'express'
import { createCategory, deleteCategory, getAllCategory, updateCategory } from '../controllers/category.controller.js'

const categoryRouter = express.Router()

categoryRouter.get('/', getAllCategory)

categoryRouter.post('/', createCategory)

categoryRouter.delete('/:id', deleteCategory)

categoryRouter.put('/:id', updateCategory)

export default categoryRouter