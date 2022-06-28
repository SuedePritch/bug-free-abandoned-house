async function newCommentForm(event) {
    event.preventDefault();
    const commentInput = document.getElementById('commentInput').value;
    const pathname = document.location.pathname.split('/')
    const response = await fetch(`/api/comment/`, {
    method: 'POST',
    body: JSON.stringify({
        comment: commentInput,
        //this is a hack to get req.params.id here
        post_id: pathname[2]
    }),
    headers: {
        'Content-Type': 'application/json',
    },
});
    if (response.ok) {
    document.location.reload()
    } else {
    alert('post failed');
    }
}
document.querySelector('#new-comment').addEventListener('submit', newCommentForm);