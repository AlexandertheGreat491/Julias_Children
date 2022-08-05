//imports express
const router = require('express').Router();

//imports the routes for all three models
const userRoutes = require('./user-routes');
const postRoutes = require('./recipe-routes');
const commentRoutes = require('./comment-routes');


//directs the models and routes to work together
router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;
