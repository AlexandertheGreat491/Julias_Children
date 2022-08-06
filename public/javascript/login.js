async function loginFormHandler(event) {
    event.preventDefault();

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

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

    const firstName = document.querySelector('#first_name').value.trim();
    const lastName = document.querySelector('#last_name').value.trim();
    const email = document.querySelector('#user_email').value.trim();
    const password = document.querySelector('#user_password').value.trim();
    const confirmPassword = document.querySelector('#confirm_password').value.trim();

    if (firstName && lastName && email && password && confirmPassword & password === confirmPassword) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                firstName,
                lastName,
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });
    } else {
        alert("Please check your info!");
        return;
    }
};

document.querySelector("#login-container").addEventListener('submit', loginFormHandler);
document.querySelector("#signup-container").addEventListener('submit', signupFormHandler);