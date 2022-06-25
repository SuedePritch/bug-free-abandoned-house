const router = require('express').Router();
const Comment = require('../../models/Comment')

router.get('/', async (req, res) => {
    const commentData = await Comment.findAll().catch((err) => { 
        res.json(err);
    });
        const comments = commentData.map((comment) => comment.get({ plain: true }));
        res.render('homepage', { comments });
    });



module.exports = router;
