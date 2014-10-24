require.config({
    'deps': ['main'],
    baseUrl: '/js/',
    'paths': {
        'marionette': '/vendors/backbone.marionette/lib/backbone.marionette', //marionette package includes deprecated wreqr
        'zepto': '/vendors/zepto/zepto',
        'backbone': '/vendors/backbone/backbone',
        'lodash': '/vendors/lodash/dist/lodash',
        'moment': '/vendors/moment/moment',
        'text': '/vendors/requirejs-text/text',
    },
    'map': {
        '*': {
            'underscore': 'lodash',
            'jquery': 'zepto'
        }
    },
    'shim': {
        'lodash': {
            'exports': '_',
        },
        'backbone': {
            'exports': 'Backbone',
            'deps': ['zepto', 'lodash'],
        },
        'marionette': {
            'exports': 'Backbone.Marionette',
            'deps': ['backbone'],
        },
    }
});
