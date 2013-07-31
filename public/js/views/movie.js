define(['jquery',
    'underscore',
    'backbone',
    'text!templates/movie.html',
    'common'
], function($, _, Backbone, movieTemplate, Common) {

    var MovieView = Backbone.View.extend({
        className: 'movie-view',
        template: _.template(movieTemplate),
        events: {
            "click .title-text": "editTitle",
            "click .update": "updateTitle",
            "click .watched": "toggleWatched"
        },
        initialize: function() {
            this.listenTo(this.model, 'change', this.render)
            this.listenTo(this.model, 'destroy', this.remove)
        },
        render: function() {
            this.$el.html(this.template(this.model.attributes))
            return this
        },
        editTitle: function() {
            $(".movie-view.active").removeClass("active")
            this.$el.addClass("active")
            this.$(".title-input input").focus()
        },
        updateTitle: function() {
            this.model.save({
                title: this.$(".title-input input")[0].value
            })
        },
        toggleWatched: function() {
            this.model.toggleWatched()
        }
    })

    return MovieView
})