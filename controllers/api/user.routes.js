const router = require('express').Router();
const User = require('../../models/User')

router.get('/', async (req, res) => {
  try {
    const allUserData = await User.findAll()
    res.status(200).json(allUserData);
  } catch (err) {
    res.status(500).json(err);
  }
  
});



module.exports = router;
