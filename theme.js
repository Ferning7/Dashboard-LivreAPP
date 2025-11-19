const btn = document.getElementById("toggle-theme");
const icon = document.getElementById("theme-icon");


btn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

   if (document.body.classList.contains("dark-mode")) {
    btn.innerHTML = `<img src="icons/sol.png" style="width: 40px">`;
} else {
    btn.innerHTML = `<img src="icons/lua.png" style="width: 40px">`;
}

});
