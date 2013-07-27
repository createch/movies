define(['underscore',
    'backbone',
    'models/movie'
], function(_, Backbone, Movie) {

    var MovieCollection = Backbone.Collection.extend({
        model: Movie,
        url: 'fauxpi/movies.json',
        comparator: function(movie) {
            return movie.get('dateWatched')
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