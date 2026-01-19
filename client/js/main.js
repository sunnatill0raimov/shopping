import categorySection from './category.js'
import clientSection from './client.js'
import productSection from './product.js'

document.addEventListener('DOMContentLoaded', () => {
	const DB_URL = 'https://shopping-1-pqvf.onrender.com'
	// Category
	categorySection(DB_URL)
	// Client
	clientSection(DB_URL)
	// Product
	productSection(DB_URL)
})
