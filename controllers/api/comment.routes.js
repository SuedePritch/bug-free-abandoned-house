const router = require('express').Router();
const Comment = require('../../models/Comment')

router.get('/', async (req, res) => {
    try {
        const allCommentData = await Comment.findAll()
        res.status(200).json(allCommentData);
    } catch (err) {
        res.status(500).json(err);
    }
    
});



module.exports = router;
