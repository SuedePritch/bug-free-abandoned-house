async function editPost(event) {
    event.preventDefault();
    const editPostId = event.target.id
    document.location.replace(`/editpost/${editPostId}`)
}
const editButton = document.querySelectorAll('.edit-button');
editButton.forEach(button =>{
    button.addEventListener('click', editPost)
});

async function deletePost(event) {
    event.preventDefault();
    const deletePostId = event.target.id
    const response = await fetch(`/api/post/${deletePostId}`, {
        method: 'DELETE'
    });
        if (response.ok) {
        document.location.replace('/dashboard')
        } else {
        alert('delete failed');
        }
}
const deleteButton = document.querySelectorAll('.delete-button');
deleteButton.forEach(button =>{
    button.addEventListener('click', deletePost)
});

