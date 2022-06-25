const router = require('express').Router();
const Post = require('../../models/Post')

router.get('/', async (req, res) => {
  try {
    const allPostData = await Post.findAll()
    res.status(200).json(allPostData);
  } catch (err) {
    res.status(500).json(err);
  }
  
});



module.exports = router;
