window.GistApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function($content, collection) {
    console.log('Hello from Backbone!');

		var gists = new GistApp.Collections.Gists(collection);

		new GistApp.Routers.GistsRouter($content, gists);
		Backbone.history.start();
  }
};

// $(document).ready(function(){
//   GistApp.initialize();
// });
