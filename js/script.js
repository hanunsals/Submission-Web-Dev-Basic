// scripts.js
// Function to handle scroll bar
function handleScrollbar() {
    var descriptions = document.querySelectorAll('.description-scrollbar');
    descriptions.forEach(function(description) {
        description.style.maxHeight = '150px'; // Set max height for scrollbar
        description.style.overflowY = 'auto'; // Enable vertical scrollbar
    });
}

// Call the function when the document is loaded
document.addEventListener('DOMContentLoaded', function() {
    handleScrollbar();
});


function subscribe(event) {
    event.preventDefault(); // Prevent form submission
    var emailInput = document.getElementById("email");
    var email = emailInput.value.trim(); // Trim whitespace from email input

    if (email === "") {
        alert("Please enter your email address.");
        return; // Exit function early if email is empty
    }

    // Simulate subscription process (replace this with your actual subscription code)
    setTimeout(function () {
        alert("Thank you for subscribing!");
        emailInput.value = ""; // Clear email input
    }, 1000);
}

document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector("form");
    form.addEventListener("submit", subscribe);
});
