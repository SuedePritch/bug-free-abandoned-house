async function loginForm(event) {
    event.preventDefault();
    const emailInput = document.getElementById('emailInput').value;
    const passwordInput = document.getElementById('passwordInput').value;
 // Send fetch request to add a new dish
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
  //if the dish is added, the 'all' template will be rerendered
    if (response.ok) {
    console.log('logged in');
    } else {
    alert('Failed to add dish');
    }
}
document.querySelector('.login').addEventListener('submit', loginForm);