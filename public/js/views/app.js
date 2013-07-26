define(['jquery',
    'underscore',
    'backbone',
    'collections/movies',
    'views/movie',
    'common'
], function($, _, Backbone, Movies, MovieView, Common) {

    var AppView = Backbone.View.extend({
        el: "#app",
        events: {
            'click .add': 'addMovie'
        },
        initialize: function() {
            this.$movieslist = $("#movies-list")
            this.listenTo(Movies, 'add', this.addOne)
            this.listenTo(Movies, 'reset', this.addAll)
            this.listenTo(Movies, 'all', this.render)
        },
        addOne: function(movie) {
            var view = new MovieView({
                model: movie
            })
            view.render()
            this.$movieslist.append(view.el)
        },
        addAll: function() {
            this.$movieslist.html("")
            Movies.each(this.addOne, this)
        }
    })

    return AppView

})