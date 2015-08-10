function initialize() {
  var myLatlng = new google.maps.LatLng(60.1642421, 24.9320541);
  var mapOptions = {
    zoom: 15,
    center: myLatlng
  }
  var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Hello World!'
  });
};

var mapOn = false;
$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors: ['splash', 'yleista', 'liput', 'aikataulu', 'kartta', 'appro', 'muuta'],
    menu: '#munMenu',
    scrollingSpeed: 1000,
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
        initialize();
      }
    },
  });

$(".navbar").hide();

});
