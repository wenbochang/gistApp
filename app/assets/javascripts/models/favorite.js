GistApp.Models.Favorite = Backbone.Model.extend({
	initialize: function(gistData) {
		this.gist_id = gistData.gist_id
		this.user_id = gistData.user_id
		this.instanceUrl = "/gists/" + this.gist_id + "/favorite";
	},

	url: function() {
		return this.instanceUrl;
	}
})
