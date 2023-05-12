
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

//counter
$(document).ready(function() {

  $('.count').counterUp({
    delay: 10,
    time: 1000
  });

});

// donation form validation
document.getElementById("donation-form").addEventListener("submit", function (event) {
  event.preventDefault();
  
  // Perform client-side form validation
  if (!validateForm()) {
    return;
  }

  // Simulate payment processing
  simulatePaymentProcessing();
});

function validateForm() {
  var amount = document.getElementById("amount").value;
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var card = document.getElementById("card").value;
  var expiry = document.getElementById("expiry").value;
  var cvv = document.getElementById("cvv").value;
  var isValid = true;
}

  // Validate donation amount
  if (isNaN(amount) || amount <= 0) {
    displayErrorMessage("Please enter a valid donation amount");
    isValid = false;
  }

  // Validate name
  if (name.trim() === "") {
    displayErrorMessage("Please enter your name");
    isValid = false;
  }

  // Validate email
  if (!isValidEmail(email)) {
    displayErrorMessage("Please enter a valid email address");
    isValid = false;
  }

  // Validate credit card details
  if (!isValidCreditCard(card)) {
    displayErrorMessage("Please enter a valid credit card number");
    isValid = false;
  }

  // Validate expiry date
  if (!isValidExpiryDate(expiry)) {
    displayErrorMessage("Please enter a valid expiration date (MM/YY)");
    isValid = false;
  }

  // Validate CVV
  if (!isValidCVV(cvv)) {
    displayErrorMessage("Please enter a valid CVV");
  }

  // Validate contact page

  function validateForm() {
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    
    var errorElement = document.getElementById("error");
    errorElement.innerHTML = ""; // Clear previous error messages
    
    if (name === "") {
      errorElement.innerHTML += "First name is required.<br>";
    }
    
    if (surname === "") {
      errorElement.innerHTML += "Second name is required.<br>";
    }
    
    if (email === "") {
      errorElement.innerHTML += "Email is required.<br>";
    } else if (!validateEmail(email)) {
      errorElement.innerHTML += "Invalid email format.<br>";
    }
    
    if (subject === "") {
      errorElement.innerHTML += "Subject is required.<br>";
    }
    
    if (message === "") {
      errorElement.innerHTML += "Message is required.<br>";
    }
    
    return errorElement.innerHTML === ""; // Return false to prevent form submission if there are errors
  }
  
  function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  