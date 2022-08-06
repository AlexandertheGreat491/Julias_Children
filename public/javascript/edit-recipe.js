async function editFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector(/*editpost text area */ ).value.trim();
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        title
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace(/* */);
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector(/* */).addEventListener('submit', editFormHandler);
  