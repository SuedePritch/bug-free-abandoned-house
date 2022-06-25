const sequelize = require('../config/connection');
const Post = require('../models/Post');
const postData = require('./post-seed.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Post.bulkCreate(postData);

  process.exit(0);
};

seedDatabase();