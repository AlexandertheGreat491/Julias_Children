const { Comment } = require("../models");

const commentData = [
  {
    body: "This is my son's favorite recipe!",
    user_id: "6",
    recipe_id: "1",
  },
  {
    body: "I would advise not making this recipe if you have children who are picky eaters.",
    user_id: "6",
    recipe_id: "8",
  },
  {
    body: "The prep time on this recipe is alot longer than the recipe says it will be!",
    user_id: "3",
    recipe_id: "10",
  },
  {
    body: "Your kitchen will smell bad after making this recipe!",
    user_id: "3",
    recipe_id: "13",
  },
  {
    body: "I would eat this recipe everyday if I could!",
    user_id: "7",
    recipe_id: "5",
  },
  {
    body: "This recipe was so good! But now I need to buy new pants!",
    user_id: "1",
    recipe_id: "10",
  },
  {
    body: "This recipe asks for weird ingredients",
    user_id: "6",
    recipe_id: "7",
  },
  {
    body: "I loved cooking this recipe!",
    user_id: "7",
    recipe_id: "4",
  },
  {
    body: "I probably won't make this recipe again.",
    user_id: "6",
    recipe_id: "12",
  },
  {
    body: "This recipe made me enjoy cooking again!",
    user_id: "6",
    recipe_id: "11",
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
