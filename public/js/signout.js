//event handler for signout function
async function signout () {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      swal(response.statusText);
    }
  };
  
  //event listener for clicking signout button
  document.querySelector('#signout').addEventListener('click', signout);
  