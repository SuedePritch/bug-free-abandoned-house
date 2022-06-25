const sequelize = require('../config/connection');
const seedPosts = require('./post-seed')
const seedUsers = require('./user-seed')
const seedComments = require('./comment-seed')


const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  
  await seedUsers();
  
  await seedPosts();
  
  await seedComments();
  
  process.exit(0);
};

seedDatabase();