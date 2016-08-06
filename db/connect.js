"use strict";

let mongoose = require('mongoose'),
    Schema = mongoose.Schema,

    config = require('./config')

    // Superhero = new Schema(
    //   {name: String}
    // )
;

// mongoose.model('superheros', Superhero);

mongoose.connect(config.db);
