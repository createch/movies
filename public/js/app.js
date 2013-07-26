requirejs(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {

    _.templateSettings = {
        interpolate: /\{\{(.+?)\}\}/g
    }

    var Movie = Backbone.Model.extend({
        defaults: {
            watched: false
        },
        validate: function(atts) {
            if (atts.title === undefined)
                return "Title not set"
            else if (atts.date === undefined)
                return "Date not set"
        }
    })

    var MovieCollection = Backbone.Collection.extend({
        model: Movie
    })

    var MovieItemView = Backbone.View.extend({
        template: $('#movie-template').html(),
        events: {
            "dblclick .title": "editTitle",
            "click .watched": "updateWatched"
        },
        edit: function() {

        },
        updateWatched: function() {

        }
    })

    var MoviesListView = Backbone.View.extend({
        el: $("#movies-list"),
        render: function() {
            console.log('render')
            this.collection.foreach(function(item) {
                console.log(item)
            })
        }
    })


    var Router = Backbone.Router.extend({
        routes: {
            "asdf": "asdf",
            "*default": "index"
        },
        asdf: function() {
            console.log("hai")
        },
        index: function() {
            console.log("ij")
            var myMovies = new MovieCollection([{
                title: "Trainspotting",
                date: "02/26/11",
                watched: true,
                id: 1
            }, {
                title: "Wolverine",
                date: "6/26/13",
                watched: false,
                id: 2
            }, {
                title: "Batman Begins",
                date: "6/26/13",
                watched: false,
                id: 3
            }])
            var listView = new MoviesListView({
                collection: myMovies
            })
            listView.render()
        },
        initialize: function() {
            console.log("init")
        }
    })
    Backbone.history.start()
    var router = new Router()
    router.navigate("index", {
        trigger: true
    })
    // console.log("router: " + router.navigate)()

})