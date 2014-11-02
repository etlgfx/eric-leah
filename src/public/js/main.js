define([
    'backbone',
    'marionette',
    'router',
], function (Backbone, Marionette, Router) {

    "use strict";

    var App = new Backbone.Marionette.Application({
    });

    App.addInitializer(function (options) {
        new Router();
    });

    App.on('start', function () {
        Backbone.history.start();
    });

    App.start();

    return App; //unnecessary
});
