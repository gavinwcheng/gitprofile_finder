$(document).ready(function() {      //function called when document has fully loaded

  $('.gitprofile').on('submit', function(e) {   //function called class .gitprofile submit - e is variable short for event

    e.preventDefault();     //the default action of this event(e) will not be triggered. ie. clicked links will not take the browser to a new URL - in this case html form get request not sent

    var url = 'https://api.github.com/users/' + $('input.username').val() + "?access_token=" + access_token;  //creates url with username and access token param. input.username refers to html tag. see https://api.github.com/users/alexlemons1?8a64e783fa70a59e24f6a1c9d54b504304ed2ffa for json object

    var template = $('template').html();  //returns html contents of template

    $.get(url, function(info) {     //Load data from the server using a HTTP GET request. url is passed argument as is function passed as argument which is called on success. info is json object returned by .get https://api.jquery.com/jquery.get/
      $('.container').prepend(Mustache.render(  template, info));     //prepend = insert content
    }).fail(function() {
      $('.container').prepend("User not found")
    }).always(function() {    //
      $('input.username').val('');    //.always function called on both success and fail
      });
  });
});
