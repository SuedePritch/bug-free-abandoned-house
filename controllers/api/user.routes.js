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
    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(signupData);
    });
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
  
    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.userId = loginAttempt.id

      res
        .status(200)
        .json({ user: loginAttempt, message: 'You are now logged in!' });
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Logout
router.post('/logout', (req, res) => {
  // When the user logs out, destroy the session
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

    



module.exports = router;
