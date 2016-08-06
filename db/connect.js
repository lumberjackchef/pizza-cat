"use strict";

let mongoose = require('mongoose'),
    Schema = mongoose.Schema,

    config = require('./config.js')

    // Superhero = new Schema(
    //   {name: String}
    // )
;

// mongoose.model('superheros', Superhero);

mongoose.connect("mongodb://" + config.dbHost + ":" + config.dbPort + "/" + config.dbName);
