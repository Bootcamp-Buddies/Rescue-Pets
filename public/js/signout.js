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
  
  document.querySelector('#signout').addEventListener('click', signout);
  