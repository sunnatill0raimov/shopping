import express from 'express'
import pool from './config/connection.js'
import cors from 'cors'
import clientProductRounter from './router/client_product.route.js'
import clientRounter from './router/client.route.js'

const app = express()
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 3000

// Client and Productssss
app.use('/client', clientRounter)
app.use('/shopping', clientProductRounter)

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
	pool
})
