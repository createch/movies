define(['jquery',
    'underscore',
    'backbone',
    'models/movie',
    'collections/movies',
    'views/movie',
    'views/input',
    'text!templates/status.html',
    'backbonelocalstorage',
    'common'
], function($,
            _,
            Backbone,
            Movie,
            Movies,
            MovieView,
            InputView,
            StatusTemplate,
            Store,
            Common) {

    console.log("hai")

    var AppView = Backbone.View.extend({
        el: "#app",
        events: {
            'click .add-new': 'addNew',
            'click .complete-all': 'completeAll'
        },
        template: _.template(StatusTemplate),
        initialize: function() {
            this.$movieslist = $("#movies-list")
            this.$status = $("#status")

            this.listenTo(Movies, 'add', this.addOne)
            this.listenTo(Movies, 'reset', this.addAll)
            this.listenTo(Movies, 'all', this.render)

            Movies.fetch()
            // new InputView()
        },
        render: function() {
            var count = {
                watched: Movies.watched().length,
                remaining: Movies.remaining().length
            }
            this.$status.html(this.template(count))
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
        },
        addNew: function() {
            Movies.add(new Movie({}))
        },
        completeAll: function() {
            Movies.each(function(movie) {
                movie.save({
                    watched: true
                })
            }, this)
        }
    })

    return AppView

})