define([
    'backbone'
], function (Backbone) {
    var Article = Backbone.Model.extend({
        url: 'article'

    });

    return Article;
});

