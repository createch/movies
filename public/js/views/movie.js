define(['jquery',
    'underscore',
    'backbone',
    'text!templates/movie.html',
    'common'
], function($, _, Backbone, movieTemplate, Common) {

    var MovieView = Backbone.View.extend({
        template: _.template(movieTemplate),
        events: {
            "dblclick .title": "edit",
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
        edit: function() {
            alert("to be implemented")
        },
        toggleWatched: function() {
            this.model.toggleWatched()
        }
    })

    return MovieView
})