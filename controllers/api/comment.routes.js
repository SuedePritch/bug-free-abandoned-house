const router = require('express').Router();
const {Comment, User} = require('../../models/')

router.get('/', async (req, res) => {
    const commentData = await Comment.findAll(
        {
            include: [{   
                model: User,
                attributes: ['username'], 
            }
        ]}
    ).catch((err) => { 
        res.json(err);
    });
        const comments = commentData.map((comment) => comment.get({ plain: true }));
        // res.render('homepage', { comments });
        res.status(200).json(comments)
    });

router.post('/', async (req, res) => {
    try {
        console.log(req.session.userId);
        
        const newCommentData = await Comment.create({
        comment: req.body.comment,
        post_id: req.body.post_id,
        user_id: req.session.userId
        });
        
        res.render('singlepost')
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
    });



module.exports = router;
