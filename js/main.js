
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 900, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

$(document).ready(function() {

  $('.count').counterUp({
    delay: 10,
    time: 1000
  });

});

function filterObject(c) {
  var x, i;
  x =document.getElementsByClassName("actionpost");
  if (c == "all") c = "";
  for (i = 0; i < x.length; 1++) {
    removeClass(x[i], "filter");
    if(x[i],className.indexOf(c) > -1) addClass(x[i], "filter")
  }
}

function addClass(element, name){
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split("");
  for (i = 0; i < arr2.length; i++){
    if (arr1.indexOf(arr2[i] == -1)){
      element.className += " " + arr2[i];
    }
  }
}

function removeClass(element,name){
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i= 0, i < arr2.length; i++){
    while (arr1.indexOf(arr2[i]) > -1){
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");

}