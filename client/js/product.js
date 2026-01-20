const productSection = DB_URL => {
	const productContainer = document.getElementById('productContainer')
	const productForm = document.getElementById('productForm')
	const modal = document.querySelector('.modal')
	const closeModalBtn = document.querySelector('.cancel-btn')


	if (!productContainer) return

	const fetchProduct = async () => {
		const res = await fetch(`${DB_URL}/product`)
		const products = await res.json()
		renderProducts(products)
	}
	fetchProduct()

	const renderProducts = products => {
		products.forEach((product, index) => {
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
					      <button class="delete-btn" id="deleteBtn-${index}">Delete</button>
              </div>
          </div>					
				`
			const deleteButttons = document.querySelectorAll('.delete-btn')
			deleteButttons.forEach(btn => {
				btn.addEventListener('click', () => deleteProduct(product.id))
			})

			const editBtn = document.querySelectorAll('.edit-btn')

			editBtn.forEach(btn => {
				btn.addEventListener('click', () => {
					modal.style.display = 'flex'
				} )
			})
			
			closeModalBtn.addEventListener('click', () => {
				modal.style.display = 'none'
			} )
		})
	}

	const deleteProduct = async id => {
		console.log(id)
		const res = await fetch(`${DB_URL}/product/${id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
		})
		const data = await res.json()
		console.log(data)
	}
}

export default productSection
