const { Post } = require('../models')

const postData = [
    {
    "title": "Are You Prepared for Digital Currency.",
    "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus natus, odit eos a impedit fugit nostrum quo adipisci accusantium nihil, veniam nesciunt ducimus nobis provident earum nulla libero minus eum.",
    "user_id": 1
    },
    {
    "title": "The Autonomous Vehicle.",
    "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quo, maiores ipsam eos iure aut rem. Quaerat sapiente doloremque commodi hic eligendi. Rerum veniam officiis, aperiam veritatis praesentium illo saepe explicabo voluptatibus blanditiis! ",
    "user_id": 2,
    },
    {
    "title": "Inventions from the Past Decade",
    "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam pariatur, voluptatem id, iste, molestias molestiae eveniet aspernatur eaque enim vel ipsum hic nemo cupiditate rerum vero quod nulla eligendi. Expedita, velit. Ipsam veritatis.",
    "user_id": 3,
    },
    {
    "title": "Why Silicon Valley Should Move To The South",
    "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate dolorum molestiae nemo, soluta doloribus nisi doloremque sapiente! Eius quibusdam enim hic nam, architecto iusto temporibus?",
    "user_id": 3,
    }
];
const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;

