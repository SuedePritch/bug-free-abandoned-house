const sequelize = require('../config/connection');
const User = require('../models/User');
const userData = require('./user-seed.json');
const Post = require('../models/Post');
const postData = require('./post-seed.json');
const Comment = require('../models/Comment');
const commentData = require('./comment-seed.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  
  await User.bulkCreate(userData);
  console.log(`
  ----------
  USER SEEDED
  ----------`)
  await Post.bulkCreate(postData);
  console.log(`
  ----------
  POST SEEDED
  ----------`)
  
  await Comment.bulkCreate(commentData);
  console.log(`
  ----------
  COMMENTS SEEDED
  ----------`)
  process.exit(0);
};

seedDatabase();