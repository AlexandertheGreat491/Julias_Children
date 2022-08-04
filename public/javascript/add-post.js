async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector(/* */).value;
    const post_url = document.querySelector(/* */).value;
  
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        post_url
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
  
  document.querySelector(/* */).addEventListener('submit', newFormHandler);
  