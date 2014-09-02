var $ = require('jquery')(window);
var Backbone = require('backbone');
Backbone.$ = $;

var router = require('./router')();

Backbone.history.start();
