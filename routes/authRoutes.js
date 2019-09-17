const router = require('express').Router();
const userController = require('../controllers/userController')

// /auth
router.route("/login")
   // .all(passport.authenticate('local'))
    .post(userController.login)

router.post("/login", passport.authenticate('local'), (req, res) => {
    userController.login(req, res);
})

module.exports = router;