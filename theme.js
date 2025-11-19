const btn = document.getElementById("toggle-theme");

btn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        btn.textContent = "☀️";
    } else {
        btn.textContent = "🌙";
    }
});
