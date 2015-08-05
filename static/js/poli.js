function initialize() {
  var myLatlng = new google.maps.LatLng(-25.363882,131.044922);
  var mapOptions = {
    zoom: 4,
    center: myLatlng
  }
  var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Hello World!'
  });
};

google.maps.event.addDomListener(window, 'load', initialize);

$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors: ['splash', 'yleista', 'liput', 'aikataulu', 'kartta', 'muuta'],
    menu: '#munMenu',
    scrollingSpeed: 1000,
    onLeave: function(index, nextIndex, direction){
      if(nextIndex == 1){
        $(".navbar").fadeOut();
      }else{
        $(".navbar").fadeIn();
      }
    },
  });

$(".navbar").hide();

});
