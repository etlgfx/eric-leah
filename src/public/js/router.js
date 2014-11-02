define([
    'backbone',
    'marionette',
    'controllers/blog',
], function (Backbone, Marionette, Controller) {

    "use strict";

    return Backbone.Marionette.AppRouter.extend({
        controller: Controller,
        appRoutes: {
            'blog': 'index',
        }
    });
});
