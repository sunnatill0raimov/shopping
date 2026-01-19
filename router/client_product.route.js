import express from 'express'
import { createClientProduct, deleteClientProduct, getAllClientProdut, updateClientProduct } from '../controllers/client_product.controller.js'

const clientProductRounter = express.Router()

clientProductRounter.post('/', createClientProduct)

clientProductRounter.get('/', getAllClientProdut)

clientProductRounter.delete('/:id', deleteClientProduct)

clientProductRounter.put('/:id', updateClientProduct)

export default clientProductRounter