require.config({
    paths: {
        app: 'app',
        backbone: 'vendor/backbone',
        underscore: 'vendor/underscore',
        jquery: 'vendor/jquery',
        marionette: 'vendor/backbone.marionette',
        text: 'vendor/require.text'
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
    'views/app'
], function($, _, Backbone, AppView) {

    Backbone.history.start();

    new AppView()

})