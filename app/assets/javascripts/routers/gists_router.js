GistApp.Routers.GistsRouter = Backbone.Router.extend({

	initialize: function($rootEl, collection) {
		this.$rootEl = $rootEl;
		this.gists = collection;
	},

	routes: {
		"": "index"
	},

	index: function() {
		var gistsView = new GistApp.Views.GistsIndexView({
			collection: this.gists
		});
		this.$rootEl.html(gistsView.render().$el);
	}

});