const Post = require('./Post');
const User = require('./User');
const Comment = require('./Comment')

Post.belongsTo(User, {
    foreignKey:'post_id'
})

User.hasMany(Post,{
    foreignKey:"id"
})


Comment.belongsTo(User, {
    foreignKey:'comment_id'
})

User.hasMany(Comment,{
    foreignKey:"id"
})

Post.hasMany(Comment,{
    foreignKey: 'id'
})

module.exports ={
    Post,
    User
}