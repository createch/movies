define(['underscore',
    'backbone',
    'models/movie'
], function(_, Backbone, Movie) {

    var MovieCollection = Backbone.Collection.extend({
        model: Movie,
        comparator: function(movie) {
            return movie.get('dateWatched')
        }
    })

    return new MovieCollection()

})