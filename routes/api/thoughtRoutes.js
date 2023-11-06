// Import
const router = require('express').Router();

// Import thoughtController functions into file
const {
    getThoughts,
    getThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction,
} = require('../../controllers/thoughtController');

router.route('/').get(getThoughts).post(createThought);

router
    .route('/:thoughtId')
    .get(getThought)
    .put(updateThought)
    .delete(deleteThought);

    router.route('/:thoughtId/reactions').post(addReaction);

    router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

    // Export
    module.exports = router;