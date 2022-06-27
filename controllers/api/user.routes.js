const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../../models/User')

//GET ALL USERS
router.get('/', async (req, res) => {
  const userData = await User.findAll().catch((err) => { 
      res.json(err);
    });
      const users = userData.map((user) => user.get({ plain: true }));
      // res.status(200).json(userData)
      res.render('homepage', { users });
    });



//USER SIGNUP
router.post('/signup', async (req, res) => {
  try {
    const signupData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    res.status(200).json('logged in')
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});



//USER LOGIN
router.post('/login', async (req, res) => {
  try {
    const loginAttempt = await User.findOne({ where: { email: req.body.email } });
    if (!loginAttempt) {

      res.status(404).json({ message: 'Login failed!' });
      return;
    }
    const validPassword = await bcrypt.compare(
      req.body.password,
      loginAttempt.password
    );
    if (!validPassword) {
      res.status(400).json({ message: 'Login failed!' });
      return;
    }
    res.status(200).json('Logged In')
  } catch (err) {
    res.status(500).json(err);
  }
});

    



module.exports = router;
