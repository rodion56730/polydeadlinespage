function applyTheme(powerOn) {
    document.body.classList.remove("theme-light", "theme-dark");
    let theme = "dark";
    if (powerOn) {
        theme = "light";
    }
    document.body.classList.add(`theme-${theme}`);
}

document.addEventListener("DOMContentLoaded", () => {
    applyTheme(false);
    document.querySelector("#checkbox").addEventListener("change", function() {
        applyTheme(this.checked);
    });
});
