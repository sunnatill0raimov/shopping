import express from 'express'
import { deleteAdmin, getAdmin, postAdmin, putAdmin } from '../controllers/admin.controller.js'

const adminRouter = express.Router()

adminRouter.get('/', getAdmin)

adminRouter.post('/', postAdmin)

adminRouter.delete('/:id', deleteAdmin)

adminRouter.put('/:id', putAdmin)

export default adminRouter





















