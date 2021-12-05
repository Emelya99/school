$(function () {
    // Header Slider
    $('.header__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        speed: 800,
    });

    
    // Program Click Effect
    $('.program__item').click(function(){
        $(this).toggleClass('flipped');
      });


    //   Header Menu
    $('.header__menu-btn').on('click', function(){
        $('.header__items').toggleClass('active');
    });

    $('.header__menu-btn').on('click', function(){
        $('.header__menu-btn').toggleClass('active');
    });


    // Popup Form Phone Mask
    $("#FormPhone").mask("+38(999)-999-9999");
})


// WOW JS
new WOW().init();


// toTop
const mybutton = document.getElementById("toTop");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
}


// Popup
const popup = document.querySelector('.popup');
function showPopup() {
  popup.classList.add('open');
}
function hidePopup() {
  popup.classList.remove('open');
}


// Google Map
let map;
let styles = [
    {
        "stylers": [
            {
                "hue": "#2c3e50"
            },
            {
                "saturation": 250
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 50
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    }
]

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40.646887, lng: -73.978315 },
    zoom: 13,
  });
  map.setOptions({styles: styles});
}