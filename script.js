// Click and Copy email function

var span = document.getElementById("email");

span.onclick = function() {
    document.execCommand("copy");
    var copied = document.getElementById("copy-email");
    // remove fade-out (if exists)
    copied.classList.remove("fade-out", "hide");
    // Add fade-in class
    copied.classList.add("fade-in", "show");
    copied.innerHTML = "✓ Copied!";
    setTimeout(function() {
        copied.classList.remove("fade-in", "show");
        copied.classList.add("fade-out");
        copied.innerHTML = "⭠ Click to copy.";
    }, 2000);
}

span.addEventListener("copy", function(event) {
    event.preventDefault();
    if (event.clipboardData) {
        event.clipboardData.setData("text/plain", span.textContent);
        console.log(event.clipboardData.getData("text"));
    };
})

// Go to top button function

var mybutton = document.getElementById("topbtn");

window.onscroll = function() {scroolFunction()};

function scroolFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    };
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
