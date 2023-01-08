const newFormHandler = async (event) => {
  event.preventDefault();

  const petName = document.querySelector('#pet-name').value.trim();
  const petAge = document.querySelector('#pet-age').value.trim();
  const petBreed = document.querySelector('#pet-breed').value.trim();
  const petDescription = document.querySelector('#pet-description').value.trim();
  const petType = document.querySelector('#pet-type').value.trim();
  const petGender = document.querySelector('#pet-gender').value.trim();

  if (petName && petAge && petBreed && petDescription) {
    const response = await fetch(`/api/pets`, {
      method: 'POST',
      body: JSON.stringify({ petName, petAge, petBreed, petType, petGender, petDescription }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      alert('Pet Added');
      document.location.replace('/profile');
    } else {
      alert('Failed to create pet');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/pets/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete pet');
    }
  }
};

document
  .querySelector('.new-pet-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.pet-list')
  .addEventListener('click', delButtonHandler);