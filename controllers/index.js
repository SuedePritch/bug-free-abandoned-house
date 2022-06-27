const router = require('express').Router();
const Post = require('../models/Post')

const apiRoutes = require('./api');
router.use('/api', apiRoutes);

router.get('/', async (req, res) => {
    const postData = await Post.findAll().catch((err) => { 
        res.json(err);
    });
        const posts = postData.map((post) => post.get({ plain: true }));
        res.render('homepage', { posts });
    });
router.get('/login', async (req, res) => {res.render('login');});
router.get('/signup', async (req, res) => {res.render('signup');});
router.get('/newpost', async (req, res) => {res.render('newPost');});

module.exports = router;