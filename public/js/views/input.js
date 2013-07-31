define(['jquery',
    'underscore',
    'backbone',
    'models/movie',
    'collections/movies',
    'text!templates/input.html'],
function($, _, Backbone, Movie, Movies, InputTemplate) {

    var InputView = Backbone.View.extend({
        el: $(".input-view"),
        template: _.template(InputTemplate),
        events: {
            'click': 'enable',
            'click .add': 'completeInput'
        },
        initialize: function() {
            this.render()
            this.$input = this.$("input")
            this.$add = this.$(".add")
        },
        render: function() {
            this.$el.html(this.template())
            return this
        },
        enable: function() {
            this.$el.addClass("enabled")
            this.$input.prop("disabled", false)
        },
        completeInput: function() {
            var newMovie = new Movie({
                title: this.$input[0].value,
                date: new Date(),
                watched: false
            })
            Movies.add(newMovie)
            newMovie.save()
        }
    })

    return InputView

})