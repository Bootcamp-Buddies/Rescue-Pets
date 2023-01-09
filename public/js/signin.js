//event handler for sign in function
async function signInFormHandler(event) {
    event.preventDefault();
  
    // Collect values from the sign in form
    const username = document.querySelector('#email-signin').value.trim();
    const password = document.querySelector('#password-signin').value.trim();
  
    if (username && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };

  //event listener for sign in button
  document
    .querySelector('.signin-form')
    .addEventListener('submit', signInFormHandler);
  