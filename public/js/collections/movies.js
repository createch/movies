define(['underscore',
    'backbone',
    'models/movie',
    'backbonelocalstorage'
], function(_, Backbone, Movie, Store) {

    var MovieCollection = Backbone.Collection.extend({

        model: Movie,
        // url: 'fauxpi/movies.json',
        localStorage: new Store('movies'),
        intialize: function() {
            this.on('all', this.save, this)
        },
        comparator: function(movie) {
            return movie.get('date')
        },
        watched: function() {
            return this.filter(function(movie) {
                return movie.get("watched") === true
            })
        },
        remaining: function() {
            return this.filter(function(movie) {
                return movie.get("watched") !== true
            })
        }
    })

    return new MovieCollection()

})