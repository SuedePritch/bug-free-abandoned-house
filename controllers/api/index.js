const router = require('express').Router();
const withAuth = require('../../utils/auth')

const userRoute = require('./user.routes')
const postRoute = require('./post.routes')
const commentRoute = require('./comment.routes')

router.use('/user', userRoute);
router.use('/post', postRoute);
router.use('/comment', withAuth, commentRoute);


module.exports = router;
