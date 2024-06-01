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
    }
});
