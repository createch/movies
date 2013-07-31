define(['underscore', 'backbone'], function(_, Backbone) {

    var MovieModel = Backbone.Model.extend({
        defaults: {
            title: "Enter Title",
            watched: false,
            date: ""
        },
        toggleWatched: function() {
            this.set('watched', !this.get('watched'))
        },
        initialize: function( ){
            this.date = new Date()
        }
    })

    return MovieModel

})