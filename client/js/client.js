const clientSection = (DB_URL) => {
	const clientContainer = document.getElementById('clientContainer')

	if (!clientContainer) return

	const fetchClient = async () => {
		const res = await fetch(`${DB_URL}/client`)
		const clients = await res.json()
		rederClient(clients)
	}
	fetchClient()

	const rederClient = (clients) => {
		clients.forEach(client => {
			clientContainer.innerHTML += `
          <div class="card">
              <h3>${client.fullname}</h3>
                <p>email: ${client.email}</p>
                <p>age: ${client.age}</p>
                <p>gender: ${client.gender}</p>
                <p>phone: ${client.phone_number}</p>

              <div class="card-buttons">
                <button class="edit-btn">Edit</button> 
					      <button class="delete-btn">Delete</button>
              </div>
          </div>			
			`			
		});
	}
}

export default clientSection