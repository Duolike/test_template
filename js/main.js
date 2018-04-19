
//Smooth scroll to anchor
$(document).ready(function() {
   $(".navbar_btn").click(function() {
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top + "px"
      }, {
         duration: 500,
         easing: "swing"
      });
      return false;
   });
});

//Slider
$('.slider').slick({
    dots: true,
    arrows: true,
    autoplay: true,
});
//var slideIndex = 1;
//showSlides(slideIndex);
//
//// SLIDER next/previous controls
//function plusSlides(n) {
//  showSlides(slideIndex += n);
//}
//
//// SLIDER Thumbnail image controls
//function currentSlide(n) {
//  showSlides(slideIndex = n);
//}
//
//function showSlides(n) {
//  var i;
//  var slides = document.getElementsByClassName("myslides");
//  var dots = document.getElementsByClassName("dot");
//  if (n > slides.length) {slideIndex = 1} 
//  if (n < 1) {slideIndex = slides.length}
//  for (i = 0; i < slides.length; i++) {
//      slides[i].style.display = "none"; 
//  }
//  slides[slideIndex-1].style.display = "block"; 
//}
//
//function initMap() {
//  var map = new google.maps.Map(document.getElementsByClassName('map'), {
//    zoom: 4,
//    center: {lat: -33, lng: 151},
//    disableDefaultUI: true
//  });
//}

//only numbers in number input
document.getElementsByName('phone')[0].onkeypress = function(e) {

      e = e || event;

      if (e.ctrlKey || e.altKey || e.metaKey) return;

      var chr = getChar(e);

      // с null надо осторожно в неравенствах, т.к. например null >= '0' => true!
      // на всякий случай лучше вынести проверку chr == null отдельно
      if (chr == null) return;

      if (chr < '0' || chr > '9') {
        return false;
      }

    }

    function getChar(event) {
      if (event.which == null) {
        if (event.keyCode < 32) return null;
        return String.fromCharCode(event.keyCode) // IE
      }

      if (event.which != 0 && event.charCode != 0) {
        if (event.which < 32) return null;
        return String.fromCharCode(event.which) // остальные
      }

      return null; // специальная клавиша
    }

//responsive topnav 
function myFunction() {
    var x = document.getElementById("mynavbar");
    if (x.style.display === "none") {
        x.style.display = "flex";
    } else {
        x.style.display = "none";
    }
}
//Close mobile navbar after click
$('#mynavbar a').on('click', function(){ 
        if($('#mobile_menu').css('display') !='none'){
            $("#mobile_menu").trigger( "click" );
        }
 });

//timer
var clock = new FlipClock($('.timer'), 1644, {
    
    countdown: true,
    autoPlay: true,

	// Create a minute counter
	clockFace: 'HourCounter',

	// The onStart callback
	onStart: function() {
		// Do something
	},

	// The onStop callback
	onStop: function() {
		// Do something
	},

	// The onReset callback
	onReset: function() {
		// Do something
	}
});

