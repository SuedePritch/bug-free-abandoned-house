async function newPostForm(event) {
    event.preventDefault();
    const titleInput = document.getElementById('titleInput').value;
    const contentInput = document.getElementById('contentInput').value;
    const userIdInput = document.getElementById('userIdInput').value;
    const response = await fetch(`/api/post`, {
    method: 'POST',
    body: JSON.stringify({
        title: titleInput,
        content: contentInput,
        user_id: userIdInput,
    }),
    headers: {
        'Content-Type': 'application/json',
    },
});
    if (response.ok) {
    document.location.replace('/')
    } else {
    alert('post failed');
    }
}
document.querySelector('#new-post').addEventListener('submit', newPostForm);