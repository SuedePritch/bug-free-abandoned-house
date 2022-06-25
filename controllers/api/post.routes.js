const router = require('express').Router();
const Post = require('../../models/Post')

router.get('/', async (req, res) => {
  const postData = await Post.findAll().catch((err) => { 
      res.json(err);
    });
      const posts = postData.map((post) => post.get({ plain: true }));
      // res.status(200).json(posts)
      res.render('homepage', { posts });
    });



module.exports = router;
