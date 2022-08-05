const router = require("express").Router();
const sequelize = require("../config/connection");
const { Post, User, Comment } = require("../models");

//GET route for all posts when logged in from the dashboard
router.get("/", (req, res) => {
  console.log(req.session);

  Post.findAll({
    attributes: [
      "id",
      "title",
      "ingredients",
      "difficulty",
      "requirements",
      "user_id",
    ],
    include: [
      {
        model: Comment,
        attributes: ["id", "body", "user_id", "post_id"],
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
    .then((dbPostData) => {
      const posts = dbPostData.map((post) => post.get({ plain: true }));
      res.render("homepage", {
        posts,
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

//GET route for posts by id
router.get("/post/:id", (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id,
    },
    attributes: [
      "id",
      "title",
      "genre",
      "ingredients",
      "difficulty",
      "requirements",
      "user_id",
    ],
    include: [
      {
        model: Comment,
        attributes: ["id", "body", "user_id", "post_id"],
        include: {
          model: User,
          attributes: ["username"],
        },
      },
    ],
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id!" });
        return;
      }

      //serializes the data
      const post = dbPostData.get({ plain: true });

      //passes the data to the template
      res.render("single-post", {
        post,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
