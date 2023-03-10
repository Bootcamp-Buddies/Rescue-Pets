//event handler for adopting the pets
async function AdoptHandler(event) {
    event.preventDefault();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];

    const response = await fetch(`/api/pets/${id}`, {
      method: 'PUT',
      body: JSON.stringify({}),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.ok) {
      document.location.replace('/profile');
    } else {
      swal(response.statusText);
    }
  }

  //event listener for adopting single pet
  document
  .querySelector('.adopt-form')
  .addEventListener('submit', AdoptHandler);
