async function loginForm(event) {
    event.preventDefault();
    const emailInput = document.getElementById('emailInput').value;
    const passwordInput = document.getElementById('passwordInput').value;
    const response = await fetch(`/api/user/login`, {
        method: 'POST',
        body: JSON.stringify({
            email: emailInput,
            password: passwordInput
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });
        if (response.ok) {
        document.location.replace('/')
        } else {
        alert('login failed');
        }
}
document.querySelector('#login').addEventListener('submit', loginForm);