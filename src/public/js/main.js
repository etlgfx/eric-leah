define([
    'backbone', 
    'marionette',
], function (Backbone, Marionette) {

    "use strict";

    var App = new Backbone.Marionette.Application();

    App.start();

    App.on('start', function () {
        Backbone.history.start();
    });

    App.addRegions({
        site: '#site'
    });

    return App;
});
