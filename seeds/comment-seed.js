const { Comment } = require('../models')

const commentData = [
    {
        "comment": "this blows",
        "user_id": 1,
        "post_id": 3,
    },
    {
        "comment": "this rocks",
        "user_id": 2,
        "post_id": 3,
    },
    {
        "comment": "awesome",
        "user_id": 3,
        "post_id": 3,
    },
    {
        "comment": "beautiful",
        "user_id": 2,
        "post_id": 3,
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;