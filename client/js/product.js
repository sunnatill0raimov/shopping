const productSection = DB_URL => {
	const productContainer = document.getElementById('productContainer')
	const productForm = document.getElementById('productForm')

	const fetchProduct = async () => {
		const res = await fetch(`${DB_URL}/product`)
		const products = await res.json()
		renderProducts(products)
	}
	fetchProduct()

	const renderProducts = products => {
		products.forEach(product => {
			productContainer.innerHTML += `
          <div class="card">
              <h3>${product.title}</h3>
                <p>price: $${product.price}</p>
                <p>quantity: ${product.quantity}</p>
                <p>description: ${product.description}</p>
                <p>brand: ${product.brand}</p>
                <p>country: ${product.country}</p>
                <p>rating: ${product.rating}</p>

              <div class="card-buttons">
                <button class="edit-btn">Edit</button> 
					      <button class="delete-btn">Delete</button>
              </div>
          </div>					
				`
		})
	}

}

export default productSection