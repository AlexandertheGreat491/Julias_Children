const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

User.hasMany(Post, {
  foreignKey: "user_id",
});

Post.belongsto(User, {
  foreignKey: "user_id",
});

Comment.belongsto(User, {
  foreignKey: "user_id",
});

Comment.belongsto(Post, {
  foreignKey: "post_id",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
});

Post.hasMany(Comment, {
  foreignKey: "post_id",
});

module.exports = { User, Post, Comment };
