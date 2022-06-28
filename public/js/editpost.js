async function editPostForm(event) {
    event.preventDefault();
    const titleInput = document.getElementById('titleInput').value;
    const contentInput = document.getElementById('contentInput').value;
    const pathname = document.location.pathname.split('/')
    const postIdFromUrl = pathname[2]
    const response = await fetch(`/api/post/${postIdFromUrl}`, {
    method: 'PUT',
    body: JSON.stringify({
        title: titleInput,
        content: contentInput,
    }),
    headers: {
        'Content-Type': 'application/json',
    },
});
    if (response.ok) {
    document.location.replace('/dashboard')
    } else {
    alert('post failed');
    }
}
document.querySelector('#edit-post').addEventListener('submit', editPostForm);