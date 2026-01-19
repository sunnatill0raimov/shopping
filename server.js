import express from 'express'
import pool from './config/connection.js'
import cors from 'cors'
import clientProductRounter from './router/client_product.route.js'

const app = express()
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 3000

// Client and Products
app.use('/client-product', clientProductRounter)

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
	pool
})
