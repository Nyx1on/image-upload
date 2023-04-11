const express = require('express');
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

const router = express.Router();

router.get('/', function(req, res) {
  res.render('profiles');
});

router.get('/new-user', function(req, res) {
  res.render('new-user');
});

module.exports = router;