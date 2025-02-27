$(function () {

    'use strict';

    $('#container').imagesLoaded(function () {

        // filter items on button click
        $('.filter-button-group').on('click', 'button', function () {
            $('.filter-button-group').find('button').removeClass('active');
            $(this).addClass('active');
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({filter: filterValue});
            
        });

        var $grid = $('.grid').isotope({
            // options options
            itemSelector: '.grid-item',
            layoutMode: 'fitRows'
        });
        

        // images have loaded

    });
    

    //Image Light Box Popup
    $('.image-link').magnificPopup({type:'image'});

    //Counter Up
    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });
    
    

});
var lang = {
  "html": "90%",
  "css": "85%",
  "javascript": "70%",
  "php": "65%",
  "Laravel": "70%",
  "sql": "65%"
};

var multiply = 4;

$.each( lang, function( language, pourcent) {

  var delay = 700;
  
  setTimeout(function() {
    $('#'+language+'-pourcent').html(pourcent);
  },delay*multiply);
  
  multiply++;

});
$('.tech_logo').owlCarousel({
  loop:true, //loop back to start, if set to false with center true, first slide will start in center.
  margin:10,
  nav:true,
  autoplay:true,
  center:false, //focused slide will stay center

  //autoWidth:true, //for alternate image widths
  //lazyLoad:true,  //only load images when needed

  responsive:{
      0:{ //from 0 px
          items:2 //how many items per device width
      },
      600:{ //from 600
          items:3
      },
      1000:{
          items:5
      }
  }
})

function experience(element) {
    $(element).closest(".ex-description").toggleClass('d-none');
}
$(window).ready(function(){
    $(".experience-box").css({
        'position':'sticky',
        'top':'20%'
    });
});

