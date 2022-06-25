const Post = require('./Post');
const User = require('./User')

Post.belongsTo(User, {
    foreignKey:'post_id'
})

// User.hasMany(Post,{
//     foreignKey:"id"
// })

module.exports ={
    Post,
    User
}