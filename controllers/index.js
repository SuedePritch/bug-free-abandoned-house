const router = require('express').Router();

const apiRoutes = require('./api');
router.use('/api', apiRoutes);

router.get('/', async (req, res) => {res.render('homepage');});
router.get('/login', async (req, res) => {res.render('login');});
router.get('/signup', async (req, res) => {res.render('signup');});
router.get('/newpost', async (req, res) => {res.render('newPost');});

module.exports = router;