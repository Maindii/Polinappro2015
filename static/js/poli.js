jQuery(function($) {
    // Asynchronously Load the map API
    var script = document.createElement('script');
    script.src = "http://maps.googleapis.com/maps/api/js?sensor=false&callback=initialize";
    document.body.appendChild(script);
});

var day_text = " päivää ";
var hour_text = " tuntia ";
var minute_text = " minuuttia ";
var seconds_text = " sekuntia ";


function localize(lang) {
  var opts = {pathPrefix: "static/langs", language: lang};
  switch(lang){
    case "fi":
      day_text = " päivää ";
      hour_text = " tuntia ";
      minute_text = " minuuttia ";
      seconds_text = " sekuntia ";
      $(".navbar-nav li > a").css("font-size", "300%");
      break;
    case "en":
      day_text = " days ";
      hour_text = " hours ";
      minute_text = " minutes ";
      seconds_text = " seconds ";
      $(".navbar-nav li > a").css("font-size", "200%");
      break;
    default:
      day_text = " dagar ";
      hour_text = " timmar ";
      minute_text = " minuter ";
      seconds_text = " sekunder ";
      $(".navbar-nav li > a").css("font-size", "300%");
      break;
  }
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
    anchors: ['splash', 'yleista', 'liput', 'lipunmyynti', 'aikataulu', 'kartta', 'appro', 'appro2', 'ie', 'muuta'],
    menu: '#munMenu',
    lockAnchors: true,
    scrollingSpeed: 1000,
    recordHistory: false,
    fixedElements: (/*@cc_on!@*/false || !!document.documentMode) ? '.fixedEles' : null,
    normalScrollElements: "#map",
    onLeave: function(index, nextIndex, direction){
      if(nextIndex == 1 && !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        $(".navbar").fadeOut();

      }else if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        $(".navbar").fadeIn();
      }
    },
    afterLoad: function(anchorLink, index){
      if(!mapOn && index == 6){
        mapOn=true;
        initialize();
      }
    },
    afterRender: function(){
      if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || (/*@cc_on!@*/false || !!document.documentMode)){
        $.fn.fullpage.setAutoScrolling(false);
      }
    }
  });
if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  $(".navbar").hide();
}
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
  $('#countdown').text(days + day_text + hours + hour_text + minutes + minute_text + seconds + seconds_text);
}

timer = setInterval(showRemaining, 1000);

$(".navbar-nav li a").click(function(event) {
   $(".navbar-collapse").collapse('hide');
 });
});
