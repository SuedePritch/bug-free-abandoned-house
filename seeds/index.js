const sequelize = require('../config/connection');
const seedPosts = require('./post-seed')
const seedUsers = require('./user-seed')
const seedComments = require('./comment-seed')


const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  
  await seedUsers();
  console.log("🚀 ---------------------------------------------------🚀")
  console.log("🚀 ~ file: index.js ~ line 11 ~ seedUsers", seedUsers)
  console.log("🚀 ---------------------------------------------------🚀")
  await seedPosts();
  console.log("🚀 ---------------------------------------------------🚀")
  console.log("🚀 ~ file: index.js ~ line 18 ~ seedPosts", seedPosts)
  console.log("🚀 ---------------------------------------------------🚀")
  
  await seedComments();
  console.log("🚀 ---------------------------------------------------------🚀")
  console.log("🚀 ~ file: index.js ~ line 23 ~ seedComments", seedComments)
  console.log("🚀 ---------------------------------------------------------🚀")
  
  process.exit(0);
};

seedDatabase();