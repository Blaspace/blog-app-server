const express = require("express");
const login = require("../controler/login");
const register = require("../controler/register");
const logout = require("../controler/logout");
const getUser = require("../controler/getUser");
const createBlog = require("../controler/createBlog");
const getBlog = require("../controler/getBlog");
const allUser = require("../controler/allUsers");
const getSingleUser = require("../controler/getsingleuser");
const handleRemoveUser = require("../controler/removeUser");
const handleDeleteBlog = require("../controler/deleteBlog");
const handleGetSingleBlog = require("../controler/getSingleBlog");
const handleEditBlog = require("../controler/editBlog");
const handleEditProfile = require("../controler/editProfile");
const handleProfileUpload = require("../controler/profileImage");
const upload = require("../midlewear/upload");
const handleRefresh = require("../controler/handleRefresh");
const accesRoute = require("../midlewear/auth");
router = express.Router();

router.post("/login", login);

router.post("/register", register);

router.post("/logout", logout);

router.post("/get", accesRoute, getUser);

router.post("/newblog", upload, createBlog);

router.post("/blog", accesRoute, getBlog);

router.post("/users", accesRoute, allUser);

router.post("/singleuser/:id", accesRoute, getSingleUser);

router.post("/deleteuser", handleRemoveUser);

router.post("/deleteblog/:id", handleDeleteBlog);

router.post("/singleblog/:id", accesRoute, handleGetSingleBlog);

router.post("/editblog/:id", handleEditBlog);

router.post("/editprofile/:id", handleEditProfile);

router.post("/refresh", handleRefresh);

router.post("/profileimage/:id", upload, handleProfileUpload);

module.exports = router;
