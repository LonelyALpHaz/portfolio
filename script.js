// Turn on/off dark mode

function darkMode() {
    var element = document.body;
    var darkbutton = document.getElementById("dark-mode-button");
    var siteLogo = document.getElementById("site-logo");
    if (element.classList.toggle("dark-mode")) {
        darkbutton.src = "assets/SVG/moon.svg";
        siteLogo.src = "assets/PNG/site-logo-light.png"
    } else {
        darkbutton.src = "assets/SVG/sun.svg";
        siteLogo.src = "assets/PNG/site-logo-dark.png"
    };
}

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

// Auto scrool to a specific div

document.querySelectorAll('.topbuttons').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const offset = 50; // Ajuste este valor conforme necessário
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    });
});

// Refresh page function

function refreshPage() {
    window.location.reload();
}