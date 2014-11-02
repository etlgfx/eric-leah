define([
    'backbone',
    'marionette',
    'layouts/site'
], function (Backbone, Marionette, LayoutSite) {

    "use strict";

    return /*new Backbone.Marionette.Controller.extend(*/{
        index: function () {
            console.log('index', arguments);

            var layout = new LayoutSite();

            layout.render();
        }
    }/*)*/;
});
