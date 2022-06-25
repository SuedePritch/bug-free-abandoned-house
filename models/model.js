const Post = require=('./Post');

Post.belongsTo(User, {
    foreignKey:'post_id'
})

User.hasMany(Post,{
    foreignKey:"post_id"
})

module.exports ={
    Post,
    User
}