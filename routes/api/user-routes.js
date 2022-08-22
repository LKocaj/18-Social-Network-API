const router = require('express').Router();

const {
    getAllUsers,
    getUsersById,
    createUsers,
    updateUsers,
    deleteUsers,
    addFriend,
    deleteFriend
  } = require('../../controllers/users-controller');

// get, post
router.route('/')
.get(getAllUsers)
.post(createUsers);

// get, put, delete
router.route('/:id')
.get(getUsersById)
.put(updateUsers)
.delete(deleteUsers);

// post, delete
router.route('/:id/friends/:friendId')
.post(addFriend)
.delete(deleteFriend)

module.exports = router;