const router = require("express").Router();
const { response } = require("express");
const sequelize = require("../config/connection");
const { Recipe, User, Comment } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, (req, res) => {
  Recipe.findAll({
    where: {
      //uses the id from the user's session
      user_id: req.session.user_id,
    },
    attributes: [
      "id",
      "title",
      "description",
      "category",
      "ingredients",
      "difficulty",
      "time",
      "user_id",
    ],
    include: [
      {
        model: Comment,
        attributes: ["id", "body", "user_id", "recipe_id"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbRecipeData) => {
      //serializes the data prior to passing to the template
      const recipes = dbRecipeData.map((recipe) => recipe.get({ plain: true }));
      res.render("dashboard", { recipes, loggedIn: true });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/add-recipe", withAuth, (req, res) => {
  res.render("add-recipe");
});

module.exports = router;
