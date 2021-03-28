document.querySelectorAll(".container .overlay").forEach((el) => {
    el.addEventListener("click", function (ev) {
        ev.stopPropagation();
        this.parentNode.classList.add("active");
    })
});

document.querySelectorAll(".container").forEach((el) => {
    el.addEventListener("click", function (ev) {
        this.classList.remove("active");
    })
});