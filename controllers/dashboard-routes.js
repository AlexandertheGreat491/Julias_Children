const router = require("express").Router();
const sequelize = require("../config/connection");
const { Recipe, User, Comment } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, (req, res) => {
  console.log(req.session.user_id);
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

//will render the add-recipe page
router.get("/add-recipe", withAuth, (req, res) => {
  res.render("add-recipe");
});

//will render the edit-recipe page
router.get("/edit-recipe/:id", withAuth, (req, res) => {
  Recipe.findByPk(req.params.id, {
    attributes: [
      "id",
      "title",
      "description",
      "category",
      "ingredients",
      "difficulty",
      "directions",
      "user_id",
    ],
    include: [
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbRecipeData) => {
      if (dbRecipeData) {
        const recipe = dbRecipeData.get({ plain: true });
        const time = recipe.time.split(",");
        const ingredients = recipe.ingredients.split(",");
        const directions = recipe.directions.split(",");
        res.render("edit-recipe", {
          recipe,
          time,
          ingredients, 
          directions,
          loggedIn: true,
        });
      } else {
        res.status(404).end();
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
