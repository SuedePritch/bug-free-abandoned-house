const router = require('express').Router();
const { Post, User, Comment} = require('../models')
const withAuth = require('../utils/auth')

const apiRoutes = require('./api');
router.use('/api', apiRoutes);

router.get('/', async (req, res) => {
    const postData = await Post.findAll({
        include: [    
        {   
            model: User,
            attributes: ['username'], 
        },

    ]
    }).catch((err) => { 
        
        res.json(err);
    });
    const posts = postData.map((post) => post.get({ plain: true }));
    // res.status(200).json(posts)
        res.render('homepage', { 
            posts, 
            loggedIn: req.session.loggedIn
        });
    });

router.get('/login', async (req, res) => {res.render('login');});
router.get('/signup', async (req, res) => {res.render('signup');});
router.get('/newpost', withAuth, async (req, res) => {res.render('newPost');});
router.get('/singlepost/:id', withAuth, async (req, res) => {
    try {
        const singlePostData = await Post.findByPk(req.params.id,
        {
        include: [{   
            model: User,
            attributes: ['username'], 
        },
        {   
            model: Comment,
            attributes: ['user_id', 'comment'], 
        },
    ]})
        const singlePost = singlePostData.get({plain:true})
        // res.status(200).json(singlePost)
        res.render('singlepost', { singlePost,
            loggedIn: req.session.loggedIn
        })
        } catch (err) {
        res.status(500).json(err);
        }
});

module.exports = router;