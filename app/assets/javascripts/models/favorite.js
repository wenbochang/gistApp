GistApp.Models.Favorite = Backbone.Model.extend({
	initialize: function(gistData) {
		this.gist_id = gistData.id
		this.user_id = gistData.user_id
		this.instanceUrl = "/gists/" + this.gist_id + "/favorite";
	},

	url: function() {
		return this.instanceUrl;
	}
})