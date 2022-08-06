const router = require("express").Router();
const sequelize = require("../config/connection");
const { User, Comment, Recipe } = require("../models");

//GET route for all posts when logged in from the dashboard
router.get("/", (req, res) => {
  console.log(req.session);

  Recipe.findAll({
    attributes: [
      "id",
      "title",
      "ingredients",
      "difficulty",
      "time",
      "directions",
      "user_id",
    ],
    include: [
      {
        model: Comment,
        attributes: ["id", "body", "user_id", "recipe_id"],
        include: {
          model: User,
          attributes: ["id", "username", "email", "password"],
        },
      },
      {
        model: User,
        attributes: ["username"],
      },
    ],
  })
    .then((dbRecipeData) => {
      const posts = dbRecipeData.map((recipe) => recipe.get({ plain: true }));
      res.render("homepage", {
        recipes,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//login route
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

//signup route
router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("signup");
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
        attributes: ["id", "body", "user_id", "recipe_id"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
    ],
  })
    .then((dbRecipeData) => {
      if (!dbRecipeData) {
        res.status(404).json({ message: "No post found with this id!" });
        return;
      }

      //serializes the data
      const post = dbRecipeData.get({ plain: true });

      //passes the data to the template
      res.render("single-recipe", {
        recipe,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
