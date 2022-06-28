async function newCommentForm(event) {
    event.preventDefault();
    const commentInput = document.getElementById('commentInput').value;
    // const userIdInput = document.getElementById('userIdInput').value;
    const pathname = document.location.pathname.split('/')
    const response = await fetch(`/api/comment/`, {
    method: 'POST',
    body: JSON.stringify({
        comment: commentInput,
        post_id: pathname[2]
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
document.querySelector('#new-comment').addEventListener('submit', newCommentForm);