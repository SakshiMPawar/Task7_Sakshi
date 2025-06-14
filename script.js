const userContainer = document.getElementById('userContainer');
const reloadBtn = document.getElementById('reloadBtn');

function fetchUsers() {
  userContainer.innerHTML = 'Loading...';

  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(users => {
      userContainer.innerHTML = '';
      users.forEach(user => {
        const card = document.createElement('div');
        card.className = 'user-card';
        card.innerHTML = `
          <h3>${user.name}</h3>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
        `;
        userContainer.appendChild(card);
      });
    })
    .catch(error => {
      userContainer.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
    });
}

// Initial load
fetchUsers();

// Reload button click
reloadBtn.addEventListener('click', fetchUsers);
