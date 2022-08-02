const {Comment} = require('../models');

const commentdata = [
    {
        body: "This is my son's favorite recipe!",
        user_id: "6",
        post_id: "1",
    },
    {
        body: "I would advise not making this recipe if you have children who are picky eaters.",
        user_id: "6",
        post_id: "8",
    },
    {
        body: "The prep time on this recipe is alot longer than the recipe says it will be!",
        user_id: "3",
        post_id: "10",
    },
    {
        body: "Your kitchen will smell bad after making this recipe!",
        user_id: "3",
        post_id: "18",
    },
    {
        body: "I would eat this recipe everyday if I could!",
        user_id: "7",
        post_id: "5",
    },{
        body: "This recipe was so good! But now I need to buy new pants!",
        user_id: "1",
        post_id: "20",
    },
    {
        body: "This recipe asks for weird ingredients",
        user_id: "6",
        post_id: "7",
    },
    {
       body: "I loved cooking this recipe!",
        user_id: "7",
        post_id: "4",
    },
    {
        body: "I probably will make this recipe again.",
        user_id: "6",
        post_id: "12",
    },
    {
        body: "This recipe made me enjoy cooking again!",
        user_id: "6",
        post_id: "20",
    },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;