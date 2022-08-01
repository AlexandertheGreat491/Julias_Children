const router = require("express").Router();
const { Comment } = requrie("../../models");

//GET route for all comments
router.get("/", (req, res) => {
  Comment.findAll()
    .then((dbCommentData) => res.json(dbCommentData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//POST route for creating new comments
router.post("/", (req, res) => {
  if (req.session) {
    Comment.create({
      body: req.body.body,
      user_id: req.session.user_id,
      post_id: req.body.post_id,
    })
      .then((dbCommentData) => res.json(dbCommentData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  }
});

//DELETE route to remove comments from the database by id
router.delete("/:id", (req, res) => {
  if (req.session) {
    Comment.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((dbCommentData) => {
        if (!dbCommentData) {
          res.status(404).json({ message: "No comment found with this id!" });
          return;
        }
        res.json(dbCommentData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  }
});

module.exports = router;
