import express from 'express'
import { createDoctor, getDoctor } from '../controllers/doctor.controller.js'
const doctorRoutes = express.Router()
doctorRoutes.get('/', getDoctor)
doctorRoutes.post('/', createDoctor)
export default doctorRoutes