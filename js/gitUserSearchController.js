githubUserSearch.controller('GitUserSearchController', ['$resource', function($resource) {      //creates controller object

  var self = this;      //http://stackoverflow.com/questions/17163248/whats-the-advantage-of-using-var-self-this-in-knockout-js-view-models

  var searchResource = $resource('https://api.github.com/search/users');

  self.doSearch = function() {

    self.searchResult = searchResource.get(
      { q: self.searchTerm }
    );

  //   self.searchResult = {     //mock data representing json returned from .get request
  //     "items": [
  //       {
  //         "login": "tansaku",
  //         "avatar_url": "https://avatars.githubusercontent.com/u/30216?v=3",
  //         "html_url": "https://github.com/tansaku"
  //       },
  //       {
  //         "login": "stephenlloyd",
  //         "avatar_url": "https://avatars.githubusercontent.com/u/196474?v=3",
  //         "html_url": "https://github.com/stephenlloyd"
  //       }
  //     ]
  //
  //   };


  };
}]);
