const express = require("express");
const login = require("../controler/login");
const register = require("../controler/register");
const verify = require("../controler/verify");
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
const router = express.Router();
const upload = require("../midlewear/upload");

router.post("/login", login);

router.post("/register", register);

router.post("/verify", verify);

router.post("/logout", logout);

router.post("/get", getUser);

router.post("/newblog", upload, createBlog);

router.post("/blog", getBlog);

router.post("/users", allUser);

router.post("/singleuser/:id", getSingleUser);

router.post("/deleteuser", handleRemoveUser);

router.post("/deleteblog/:id", handleDeleteBlog);

router.post("/singleblog/:id", handleGetSingleBlog);

router.post("/editblog/:id", handleEditBlog);

router.post("/editprofile/:id", handleEditProfile);

router.post("/profileimage/:id", upload, handleProfileUpload);

module.exports = router;
