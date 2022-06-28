const router = require('express').Router();
const Post = require('../../models/Post')
// const User = require('../../models/User')

//GET ALL POSTS FOR HOMEPAGE
// router.get('/', async (req, res) => {
//   const postData = await Post.findAll().catch((err) => { 
//       res.json(err);
//     });
//       const posts = postData.map((post) => post.get({ plain: true }));
//       res.render('homepage', { posts });
//     });



//GET SINGLE POST
// router.get('/singlepost/:id', async (req, res) => {
//   try {
//     const singlePostData = await Post.findByPk(
//       req.params.id)
//       const singlePost = singlePostData.get({plain:true})
//       res.render('singlepost', { singlePost })
//     } catch (err) {
//       res.status(500).json(err);
//     }
// });



//NEW POST
router.post('/', async (req, res) => {
  try {
    const newPostData = await Post.create({
      title: req.body.title,
      content: req.body.content,
      user_id: req.session.userId,
    });
    res.status(200).json('new Post created')
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// EDIT POST
router.put('/:id', async (req, res) => {
  try {
    const editPostData = await Post.update({ 
      title: req.body.title,
      content: req.body.content,
      user_id: req.session.userId,
    },
    {
      where: {id: req.params.id },
    });
    res.status(200).json('post updated')
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});
// DELETE POST
router.delete('/:id', async (req, res) => {
  try {
    const deletePost = await Post.destroy({where: { id: req.params.id }})
    res.status(200).json(deletePost)

  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});


module.exports = router;
