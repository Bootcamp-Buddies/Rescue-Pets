const newFormHandler = async (event) => {
  event.preventDefault();

  const petName = document.querySelector('#pet-name').value.trim();
  const petAge = document.querySelector('#pet-age').value.trim();
  const petBreed = document.querySelector('#pet-breed').value.trim();
  const petDescription = document.querySelector('#pet-description').value.trim();

  if (petName && petAge && petBreed && petDescription) {
    const response = await fetch(`/api/pets`, {
      method: 'POST',
      body: JSON.stringify({ petName, petAge, petBreed, petDescription }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create project');
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
      alert('Failed to delete project');
    }
  }
};

document
  .querySelector('.new-pet-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.pet-list')
  .addEventListener('click', delButtonHandler);
