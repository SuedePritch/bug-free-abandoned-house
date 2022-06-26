const router = require('express').Router();
const Post = require('../../models/Post')

router.get('/', async (req, res) => {
  const postData = await Post.findAll().catch((err) => { 
      res.json(err);
    });
      const posts = postData.map((post) => post.get({ plain: true }));
      res.status(200).json(posts)
      // res.render('homepage', { posts });
    });


    router.post('/', async (req, res) => {
      try {
        const newPostData = await Post.create({
          title: req.body.title,
          content: req.body.content,
          user_id: req.body.user_id,
        });
        res.status(200).json('new Post created')
      } catch (err) {
        console.log(err);
        res.status(400).json(err);
      }
    });


module.exports = router;
