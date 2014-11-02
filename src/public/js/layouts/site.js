define([
    'backbone', 'marionette', 'text!templates/layouts/site.tpl'
], function (Backbone, Marionette, templateSite) {

    "use strict";

    return Marionette.LayoutView.extend({
        el: document.body,
        template: templateSite,

        initialize: function (options) {
            if (typeof templateSite === 'string') {
                this.template = _.template(templateSite);
            }
        },

        regions: {
            navigation: '#header',
            site: '#site',
            footer: '#footer'
        },

    });
});

