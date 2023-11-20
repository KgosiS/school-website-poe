document.getElementById("contactForm").addEventListener("submit", function(e) {
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var email = document.getElementById("email").value;
    var contact = document.getElementById("contact").value;
    var message = document.getElementById("message").value;
    var warning = document.getElementById("warning");

    if (!name || !surname || !email || !contact || !message) {
        warning.style.display = "block";
        e.preventDefault();
        setTimeout(function() {
            warning.style.display = "none";
        }, 4000);
    }
});
function nameFunction() {
   
    var searchTerm = document.getElementById("name-input").value;

    document.getElementById("results").innerHTML = "Would you like newsletter " + searchTerm+" ?(if yes please click on the link below)";
}