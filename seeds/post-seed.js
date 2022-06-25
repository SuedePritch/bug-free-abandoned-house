const { Post } = require('../models')

const postData = [
    {
    "title": "NodeJS",
    "content": "Lorem ipsum",
    "user_id": 1
    },
    {
    "title": "Javascript",
    "content": "Lorem ipsum",
    "user_id": 2,
    },
    {
    "title": "MERN",
    "content": "Lorem ipsum",
    "user_id": 3,
    },
    {
    "title": "Express",
    "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dolorum molestiae nemo, soluta doloribus nisi doloremque sapiente! Eius quibusdam enim hic nam, architecto iusto temporibus?",
    "user_id": 3,
    }
];
const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;