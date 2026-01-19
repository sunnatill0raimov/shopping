const categorySection = DB_URL => {
	const categoryContainer = document.getElementById('categoryContainer')

	const fetchCategory = async () => {
		const res = await fetch(`${DB_URL}/category`)
		const categories = await res.json()
		renderCategory(categories)
	}
	fetchCategory()

	const renderCategory = categories => {
		categories.forEach(category => {
			categoryContainer.innerHTML += `
          <div class="card">
              <h3>${category.category_type}</h3>
                <p>ID: ${category.id}</p>

              <div class="card-buttons">
                <button class="edit-btn">Edit</button> 
					      <button class="delete-btn">Delete</button>
              </div>
          </div>
			`
		})
	}
}

export default categorySection
