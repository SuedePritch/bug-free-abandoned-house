async function editPost(event) {
    event.preventDefault();
    const editPostId = event.target.id
    document.location.replace(`/editpost/${editPostId}`)
}
const editButton = document.querySelectorAll('.edit-button');
editButton.forEach(button =>{
    button.addEventListener('click', editPost)
});