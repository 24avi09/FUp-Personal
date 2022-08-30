const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const userMiddleware= require("../middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser)

router.post("/login", userController.loginUser)

//The userId is sent by front end

router.get("/users/:userId",userMiddleware.authenticate,userMiddleware.authorise, userController.getUserData)

router.put("/users/:userId",userMiddleware.authenticate,userMiddleware.authorise, userMiddleware.authenticate, userController.updateUser)

router.post("/users/:userId/posts", userMiddleware.authenticate, userMiddleware.authorise, userController.postMessage)

router.delete('/users/:userId', userMiddleware.authenticate, userMiddleware.authorise, userController.deleteUser)

module.exports = router;





// "start": "node src/index.js"
// "test": "echo \"Error: no test specified\" && exit 1",