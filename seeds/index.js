const sequelize = require('../config/connection');
const User = require('../models/User');
const userData = require('./user-seed.json');
const Post = require('../models/Post');
const postData = require('./post-seed.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData);
  await Post.bulkCreate(postData);

  process.exit(0);
};

seedDatabase();