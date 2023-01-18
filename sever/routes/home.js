const express = require("express");
const homeControllers = require("../controller/homeController");

const router = express.Router();

router.post("/uploadBlog", homeControllers.uploadBlog);
router.get("/getAllBlog", homeControllers.getAllBlog);
router.post("/editBlog/:id", homeControllers.editBlog);
router.get("/deleteBlogBYId/:id", homeControllers.deleteBlog);
router.get("/blogByid/:id", homeControllers.blogById);

module.exports = router;
