const backToTopButton = document.getElementById("back-to-top-button");

window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

backToTopButton.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});