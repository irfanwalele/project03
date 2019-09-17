const router = require('express').Router();
const userController = require('../controllers/userController');

// /api/allUsers
router.route("/allUsers")
    .get(userController.findAll)



module.exports = router;