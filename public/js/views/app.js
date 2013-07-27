define(['jquery',
    'underscore',
    'backbone',
    'collections/movies',
    'views/movie',
    'text!templates/status.html',
    'common'
], function($, _, Backbone, Movies, MovieView, StatusTemplate, Common) {

    console.log("hai")

    var AppView = Backbone.View.extend({
        el: "#app",
        template: _.template(StatusTemplate),
        events: {
            'click .add': 'addMovie'
        },
        initialize: function() {
            this.$movieslist = $("#movies-list")
            this.$status = $("#status")
            this.listenTo(Movies, 'add', this.addOne)
            this.listenTo(Movies, 'reset', this.addAll)
            this.listenTo(Movies, 'all', this.render)

            Movies.fetch()
            window.Movies = Movies
        },
        render: function() {
            var count = {
                watched: Movies.watched().length,
                remaining: Movies.remaining().length
            }
            var a = this.template(count)
            this.$status.html(a)
        },
        addOne: function(movie) {
            var view = new MovieView({
                model: movie
            })
            this.$movieslist.append(view.render().el)
        },
        addAll: function() {
            this.$movieslist.html("asf")
            Movies.each(this.addOne, this)
        }
    })

    return AppView

})