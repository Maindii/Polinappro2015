jQuery(function($) {
    // Asynchronously Load the map API
    var script = document.createElement('script');
    script.src = "http://maps.googleapis.com/maps/api/js?sensor=false&callback=initialize";
    document.body.appendChild(script);
});

function localize(lang) {
  var opts = {pathPrefix: "static/langs", language: lang};
  $("[data-localize]").localize("site", opts);
};

function initialize() {
  var myLatlng = new google.maps.LatLng(60.1642421, 24.9320541);
  var mapOptions = {
    zoom: 15,
    center: myLatlng
  }
  var map = new google.maps.Map(document.getElementById('map'), mapOptions);

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Hello World!'
  });
};

var mapOn = false;
$(document).ready(function() {
  var opts = {pathPrefix: "static/langs", skipLanguage: /^en/};
  $("[data-localize]").localize("site", opts);
  $('#fullpage').fullpage({
    anchors: ['splash', 'yleista', 'liput', 'aikataulu', 'kartta', 'appro', 'appro2', 'muuta'],
    menu: '#munMenu',
    lockAnchors: true,
    scrollingSpeed: 1000,
    recordHistory: false,
    normalScrollElements: "#map",
    resize: true,
    onLeave: function(index, nextIndex, direction){
      if(nextIndex == 1){
        $(".navbar").fadeOut();

      }else{
        $(".navbar").fadeIn();
      }
    },
    afterLoad: function(anchorLink, index){
      if(!mapOn && index == 5){
        mapOn=true;
        //initialize();
      }
    },
  });

$(".navbar").hide();
var end = new Date('11/5/2015 5:00 PM');

var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
var timer;

function showRemaining() {
  var now = new Date();
  var distance = end - now;
  if (distance < 0) {
    clearInterval(timer);
    $('#countdown').text('EXPIRED!');

    return;
  }
  var days = Math.floor(distance / _day);
  var hours = Math.floor((distance % _day) / _hour);
  var minutes = Math.floor((distance % _hour) / _minute);
  var seconds = Math.floor((distance % _minute) / _second);
  $('#countdown').text(days + " päivää " + hours + " tuntia " + minutes + " minuuttia " + seconds + " sekuntia ");
}

timer = setInterval(showRemaining, 1000);

$(".navbar-nav li a").click(function(event) {
   $(".navbar-collapse").collapse('hide');
 });
});
