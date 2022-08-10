const router = require("express").Router();
const sequelize = require("../config/connection");
const { User, Comment, Recipe } = require("../models");

//GET route for all posts when logged in from the dashboard
router.get("/", (req, res) => {
  res.render("homepage", { loggedIn: req.session.loggedIn });
});

//login route
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/dashboard");
    return;
  }

  res.render("login");
});

router.get("/recipes", (req, res) => {
  Recipe.findAll({
    attributes: [
      "id",
      "title",
      "description",
      "category",
      "ingredients",
      "difficulty",
      "time",
      "directions",
      "user_id",
    ],
    order: [["created_at", "DESC"]],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "user_id", "recipe_id"],
        include: {
          model: User,
          attributes: ["id", "username", "first_name", "last_name", "email"],
        },
      },
      {
        model: User,
        attributes: ["id", "username", "first_name", "last_name", "email"],
      },
    ],
  })
    .then((dbRecipeData) => {
      console.log("inside dbRecipeData");
      const recipes = dbRecipeData.map((recipe) => recipe.get({ plain: true }));
      res.render("all-recipes", {
        recipes,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//GET route for recipes by id
router.get("/recipe/:id", (req, res) => {
  Recipe.findOne({
    where: {
      id: req.params.id,
    },
    attributes: [
      "id",
      "title",
      "description",
      "category",
      "ingredients",
      "difficulty",
      "time",
      "directions",
      "user_id",
    ],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "user_id", "recipe_id"],
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
      if (!dbRecipeData) {
        res.status(404).json({ message: "No recipe found with this id!" });
        return;
      }

      //serializes the data
      const recipe = dbRecipeData.get({ plain: true });
      console.log(recipe);

      const time = recipe.time.split(",");

      const ingredients = recipe.ingredients.split(",");

      const directions = recipe.directions.split(",");

      //passes the data to the template
      res.render("single-recipe", {
        recipe,
        time,
        ingredients,
        directions,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
