GistApp.Models.Gist = Backbone.Model.extend({
	urlRoot: "/gists",

	parse: function(gistData) {
		debugger
		gistData.favorite = new GistApp.Models.Favorite(gistData.favorite);
		return gistData;
	},

	toJSON: function() {
		debugger
	}
})