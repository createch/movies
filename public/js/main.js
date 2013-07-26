require.config({
    paths: {
        app: 'app',
        backbone: 'vendor/backbone',
        underscore: 'vendor/underscore',
        jquery: 'vendor/jquery',
        marionette: 'vendor/backbone.marionette'
    },
    shim: {
        jquery: {
            exports: 'jQuery'
        },
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        marionette: {
            deps: ['jquery', 'underscore', 'backbone'],
            exports: 'Marionette'
        }
    }
})

requirejs(['jquery',
    'underscore',
    'backbone',
    'views/app',
    'router/router'
], function($, _, Backbone, AppView, Router) {

    _.templateSettings = {
        interpolate: /\{\{(.+?)\}\}/g
    }
    Backbone.history.start()

    var a = new AppView()

})