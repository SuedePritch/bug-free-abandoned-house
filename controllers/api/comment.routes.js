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



module.exports = router;
