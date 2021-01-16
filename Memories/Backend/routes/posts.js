const express = require("express");
const router = express.Router();

//import controllers
const getPosts = require('../controllers/post');

router.get("/", getPosts);

module.exports =  router;
