GistApp.Views.GistsIndexView = Backbone.View.extend({
	tagName: "ul",

	initialize: function(options) {
		this.collection = options.collection;
	},

	render: function() {
		var view = this;

		view.collection.each(function(gist){
			var gistDetail = new GistApp.Views.GistsDetailView({
				model: gist
			});

			view.$el.append(gistDetail.render().$el);
		});

		return this;
	}

})