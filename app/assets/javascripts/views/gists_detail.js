GistApp.Views.GistsDetailView = Backbone.View.extend({
	tagName: "li",

	initialize: function(options){
		this.model = options.model;
	},

	events: {
		"click button.favorite": "addFav",
		"click button.unfavorite": "removeFav"
	},

	render: function(){
		var renderedContent = JST["gists/detail"]({
			gist: this.model
		});

		this.$el.html(renderedContent);
		return this;
	},

	addFav: function() {
		var fav = new GistApp.Models.Favorite(this.model.attributes);
		fav.clear();
		fav.save();
	},

	removeFav: function() {
		var g = this.model;
    g.fetch({
      success: function(gist) {
        gist.get("favorite").destroy();
      }
    });
	}
})
