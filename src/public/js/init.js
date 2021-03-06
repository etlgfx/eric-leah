require.config({
    'deps': ['main'],
    'paths': {
        'backbone': '/vendors/backbone/backbone',
        'deferred': '/vendors/simply-deferred/deferred',
        'lodash': '/vendors/lodash/dist/lodash',
        'marionette': '/vendors/backbone.marionette/lib/backbone.marionette', //marionette package includes deprecated wreqr
        'moment': '/vendors/moment/moment',
        'text': '/vendors/requirejs-text/text',
        'zepto': '/vendors/zepto/zepto',
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
        'zepto': {
            'exports': '$',
        },
        'deferred': {
            'deps': ['zepto'],
        },
        'backbone': {
            'exports': 'Backbone',
            'deps': ['zepto', 'lodash'],
        },
        'marionette': {
            'exports': 'Backbone.Marionette',
            'deps': ['backbone', 'deferred'],
        },
    }
});
