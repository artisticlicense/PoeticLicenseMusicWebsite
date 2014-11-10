//Create application
App = Ember.Application.create({});

//Model
App.MusicNews = Em.Object.extend();

App.MusicNews.reopenClass({
	getRSS: function(){
		var links = Ember.A();
		$.support.cors = true;
		
		$.ajax({
			type: "POST",
			url: "http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://www.rollingstone.com/music.rss",
			dataType: "jsonp",
			success: function(response) {
				var data = response["responseData"];
				var entries = data["feed"]["entries"];
			
				for(var i=0; i<entries.length; i++){
					var item = entries[i];
					links.pushObject(App.MusicNews.create(item));
				}
			},
			error: function (xhr, ajaxOptions, thrownError) {
				console.log("Error updating Music News Feed.");
			}
		});
		return links;
	}
});

//Controller
App.IndexController = Ember.ObjectController.extend( {
	loadRSS: function() {
		this.set( 'model', App.MusicNews.getRSS() );
	}
})

//Default Route
App.IndexRoute = Ember.Route.extend({
	model: function() {
		return App.MusicNews.getRSS();
	}
});
