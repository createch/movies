define(['underscore', 'backbone'], function(_, Backbone) {

    var MovieModel = Backbone.Model.extend({
        defaults: {
            title: "",
            watched: false,
            dateWatched: ""
        },
        toggleWatched: function() {
            this.set('watched', !this.get('watched'))
        }
    })

    return MovieModel

})