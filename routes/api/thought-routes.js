const router = require('express').Router();

// set requirements
const { 
    getAllThoughts, 
    getThoughtsById, 
    createThoughts, 
    updateThoughts,
    deleteThoughts,
    addReaction,
    deleteReaction
} = require('../../controllers/thoughts-controller');

router.route('/').get(getAllThoughts);

// get put delete
router.route('/:id')
.get(getThoughtsById)
.put(updateThoughts)
.delete(deleteThoughts); 

router.route('/:userId')
.post(createThoughts);

// post
router.route('/:thoughtId/reactions')
.post(addReaction);

// delete
router.route('/:thoughtId/reactions/:reactionId')
.delete(deleteReaction);

module.exports = router;