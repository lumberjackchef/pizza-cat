"use strict";

let express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    Entity = mongoose.model('entities');

/* GET home page. */
router.get('/', function(req, res, next) {
  // Entity.findOne((err, entity) => {
  //     res.render(
  //       'index',
  //       {
  //         name: entity.name
  //       }
  //     );
  // });
  res.render('index', {name: "Ryan"});
});

module.exports = router;
