"use strict";

let mongoose = require('mongoose'),
    Schema = mongoose.Schema,

    config = require('./config'),

    Entity = new Schema(
      {name: String}
    )
;

mongoose.model('entities', Entity);

mongoose.connect(config.db);
