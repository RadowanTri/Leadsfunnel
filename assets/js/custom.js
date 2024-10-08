/*=========


Template Name: Portfolio -  HTML Template

=========*/

/*=========
----- JS INDEX -----

=========*/

$(document).ready(function($) {

	// Whole Script Strict Mode Syntax
	"use strict";
    $("[data-background").each(function() {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    });

	  
	// featureator-slider
    var $featureatorSlider = $(".feature-carousel");
    $featureatorSlider.owlCarousel({
        loop: true,
        nav: false,
        // navText: [
        //     '<i class="fa fa-long-arrow-alt-left"></i>',
        //     '<i class="fas fa-long-arrow-alt-right"></i>',
        // ],
        dots: false,
        autoplayTimeout: 7000,
        autoplay: true,
        margin: 30,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 4,
            },
            1399: {
                items: 4,
            },
        }
    });

     // Magnific popup
     $('.popup-youtube').magnificPopup({
        type: 'iframe',
        iframe: {
            patterns: {
                youtube: {
                    index: 'https://www.youtube.com/',

                    id: 'v=',
                    src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                }

            },
            srcAction: 'iframe_src',
        }
	 });

// Set the date to count down to
let countdownDate = new Date("Oct 31, 2024 23:59:59").getTime();

// Update the countdown every second
let x = setInterval(function () {
    let now = new Date().getTime();
    let timeLeft = countdownDate - now;

    // Time calculations for days, hours, minutes, and seconds
    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Display the result in the elements with corresponding IDs
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // If the countdown is finished, display a message
    if (timeLeft < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);

var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");

menuIcon.onclick = function () {
sidebar.classList.toggle("small-sidebar");
container.classList.toggle("large-container");

}

});
