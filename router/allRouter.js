const express = require("express");
const login = require("../controler/login");
const register = require("../controler/register");
const logout = require("../controler/logout");
const getUser = require("../controler/getUser");
const createBlog = require("../controler/createBlog");
const getBlog = require("../controler/getBlog");
const allUser = require("../controler/allUsers");
const handleRemoveUser = require("../controler/removeUser");
const handleDeleteBlog = require("../controler/deleteBlog");
const handleEditBlog = require("../controler/editBlog");
const handleEditProfile = require("../controler/editProfile");
const handleProfileUpload = require("../controler/profileImage");
const upload = require("../midlewear/upload");
const handleRefresh = require("../controler/handleRefresh");
const getProfileImage = require("../controler/GetProfileImage");
const getBlogImage = require("../controler/getBlogImage");
const handleComment = require("../controler/comment");
const handleGetComment = require("../controler/getComments");
const handleLike = require("../controler/handleLike");
const handleUnlike = require("../controler/handleUnlike");
const getLike = require("../controler/getLike");
const handleFriend = require("../controler/handleFriend");
const handleFriendStatus = require("../controler/friendStatus");
const getFriends = require("../controler/getfriends");
router = express.Router();

router.post("/login", login);

router.post("/like", handleLike);

router.post("/alllike", getLike);

router.post("/unlike", handleUnlike);

router.post("/register", register);

router.post("/logout", logout);

router.post("/comment", handleComment);

router.post("/friend", handleFriend);

router.get("/allfriend", getFriends);

router.post("/friendstatus", handleFriendStatus);

router.post("/getcomment", handleGetComment);

router.post("/get", getUser);

router.post("/newblog", upload, createBlog);

router.get("/Profile/:id", getProfileImage);

router.get("/blogimage/:id", getBlogImage);

router.post("/blog", getBlog);

router.post("/users", allUser);

router.post("/deleteuser", handleRemoveUser);

router.post("/deleteblog/:id", handleDeleteBlog);

router.post("/editblog/:id", handleEditBlog);

router.post("/editprofile/:id", handleEditProfile);

router.post("/refresh", handleRefresh);

router.post("/profileimage/:id", upload, handleProfileUpload);

module.exports = router;
