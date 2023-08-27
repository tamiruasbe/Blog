const express = require('express');
const router = express.Router();
const { createPost, showPost, showSinglePost, deletePost, updatePost, addComment, addLike, removeLike } = require('../controllers/postController');
const { isAuthenticated, isAdmin,isCreator } = require('../middleware/auth');

//blog routes
router.post('/post/create', isAuthenticated, isAdmin,isCreator, createPost);
router.get('/posts/show', showPost);
router.get('/post/:id', showSinglePost);
router.delete('/delete/post/:id', isAuthenticated, isAdmin, isCreator, deletePost);
router.put('/update/post/:id', isAuthenticated, isAdmin,isCreator, updatePost);
router.put('/comment/post/:id', isAuthenticated, addComment);
router.put('/addlike/post/:id', isAuthenticated, addLike);
router.put('/removelike/post/:id', isAuthenticated, removeLike);


module.exports = router;