async function loginFormHandler(event) {
    event.preventDefault();

    const email = document.querySelector()// email field ID here
    const password = document.querySelector()// password field ID here

    if (email && password) {
        const response = await fetch('api/users/login', {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
}

async function signupFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector()// username signup field here
    const email = document.querySelector() // email signup field here
    const password = document.querySelector() // password signup field here
}