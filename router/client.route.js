import express from 'express'
import { deleteclient, getclient, postsclient, putclient } from '../controllers/client.controller.js'
const clientRounter = express.Router()

clientRounter.get('/', getclient)
clientRounter.post('/', postsclient)
clientRounter.delete('/:id', deleteclient)
clientRounter.put('/:id', putclient)


export default clientRounter
