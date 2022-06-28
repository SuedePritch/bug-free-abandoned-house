async function signupForm(event) {
    event.preventDefault();
    const usernameInput = document.getElementById('usernameInput').value;
    const emailInput = document.getElementById('emailInput').value;
    const passwordInput = document.getElementById('passwordInput').value;
    const response = await fetch(`/api/user/signup`, {
    method: 'POST',
    body: JSON.stringify({
        username: usernameInput,
        email: emailInput,
        password: passwordInput
    }),
    headers: {
        'Content-Type': 'application/json',
    },
});
    if (response.ok) {
        document.location.replace('/login')
    } else {
    alert('signup failed');
    }
}
document.querySelector('#signup').addEventListener('submit', signupForm);