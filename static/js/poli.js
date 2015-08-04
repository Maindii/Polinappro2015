$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors: ['splash', 'yleista', 'liput', 'aikataulu', 'kartta', 'muuta'],
    menu: '#munMenu',
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
