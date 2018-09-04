/* ------------ SHARE JAVASCRIPT ---------- */
// DECLARED VARIABLES
var menu = 0; // 0 = MENU IS CLOSED
var winWidth = $(window).width();  // WINDOW WIDTH
var winHeight = $(window).height(); // WINDOW HEIGHT
var temp;

$(document).ready(function() { // will be executed immediately

	//$(".fancyBox").fancyBox(); // DEFAULT FANCY BOX
	animations();

});


$(window).load(function () { //Run a function when the page is fully loaded

	
	
  
});


$( window ).resize(function() { // FOR WINDOW IF RESIZE
	
  
  
  
});


$( window ).scroll( function(){ // FOR WINDOW IF SCROLLING
	
	
	
	
});

function animations() {

	// Scroll Left to Right
    var tweenG1 = new TimelineMax()
        .add([TweenMax.fromTo("#personally_one", 1, { left: '-100px', opacity: '0' }, { left: '0', opacity: '1', ease: Linear.easeNone })]);
    var sceneG1 = new ScrollMagic.Scene({ triggerElement: ".personally", offset: -200 })
        .setTween(tweenG1)
        //.addIndicators()
        .addTo(controller);

        // Scroll Right to Left
    var tweenG2 = new TimelineMax()
        .add([TweenMax.fromTo("#personally_two", 1, { right: '-100px', opacity: '0' }, { right: '0px', opacity: '1', ease: Linear.easeNone })]);
    var sceneG2 = new ScrollMagic.Scene({ triggerElement: ".personally", offset: -150 })
        .setTween(tweenG2)
        //.addIndicators()
        .addTo(controller);

    // Scroll Left to Right
    var tweenH1 = new TimelineMax()
        .add([TweenMax.fromTo("#single_item_one", 1, { left: '-100px', opacity: '0' }, { left: '0', opacity: '1', ease: Linear.easeNone })]);
    var sceneH1 = new ScrollMagic.Scene({ triggerElement: ".personally_gallery", offset: -200 })
        .setTween(tweenH1)
        //.addIndicators()
        .addTo(controller);

    // Scroll Bottom to Top
    var tweenH2 = new TimelineMax()
        .add([TweenMax.fromTo("#single_item_two", 1, { top: '100px', opacity: 0 }, { top: '0px', opacity: 1, ease: Linear.easeNone })]);
    var sceneH2 = new ScrollMagic.Scene({ triggerElement: ".personally_gallery", offset: -200 })
        .setTween(tweenH2)
        //.addIndicators()
        .addTo(controller);

    // Scroll Right to Left
    var tweenH3 = new TimelineMax()
        .add([TweenMax.fromTo("#single_item_three", 1, { right: '-100px', opacity: '0' }, { right: '0px', opacity: '1', ease: Linear.easeNone })]);
    var sceneH3 = new ScrollMagic.Scene({ triggerElement: ".personally_gallery", offset: -150 })
        .setTween(tweenH3)
        //.addIndicators()
        .addTo(controller);

        // Scroll Left to Right
    var tweenH4 = new TimelineMax()
        .add([TweenMax.fromTo("#single_item_four", 1, { left: '-100px', opacity: '0' }, { left: '0', opacity: '1', ease: Linear.easeNone })]);
    var sceneH4 = new ScrollMagic.Scene({ triggerElement: ".personally_gallery", offset: -200 })
        .setTween(tweenH4)
        //.addIndicators()
        .addTo(controller);

        // Scroll Bottom to Top
    var tweenH5 = new TimelineMax()
        .add([TweenMax.fromTo("#single_item_five", 1, { top: '100px', opacity: 0 }, { top: '0px', opacity: 1, ease: Linear.easeNone })]);
    var sceneH5 = new ScrollMagic.Scene({ triggerElement: ".personally_gallery", offset: -200 })
        .setTween(tweenH5)
        //.addIndicators()
        .addTo(controller);

        // Scroll Right to Left
    var tweenH6 = new TimelineMax()
        .add([TweenMax.fromTo("#single_item_six", 1, { right: '-100px', opacity: '0' }, { right: '0px', opacity: '1', ease: Linear.easeNone })]);
    var sceneH6 = new ScrollMagic.Scene({ triggerElement: ".personally_gallery", offset: -150 })
        .setTween(tweenH6)
        //.addIndicators()
        .addTo(controller);

        // Wine Tasting Group Image - Scroll from Bottom to Top of Screen
 var tweenJ1 = new TimelineMax ()
	.add([TweenMax.fromTo("#safari_top", 1, {top: '100px', opacity: 0}, {top: '0', opacity: 1, ease: Linear.easeNone})]);
	var sceneJ1 = new ScrollMagic.Scene({triggerElement: ".container_inner",  offset: -200})
	.setTween(tweenJ1)
	//.addIndicators()
	.addTo(controller);

}