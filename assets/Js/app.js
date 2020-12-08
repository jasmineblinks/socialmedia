


const checkBox = document.getElementById("checkbutton");
const body = document.querySelector("body")

checkBox.addEventListener("click", () => {
    if (checkBox.checked === true) {
        body.classList.remove("container");
        body.classList.add("light-theme");
    } else if (checkBox.checked === false) {
        body.classList.remove("light-theme");
        body.classList.add("container");
    }
    let toggleText = document.getElementById("check-text");
    if (toggleText.innerHTML === "Light Mode") {
      toggleText.innerHTML = "Dark Mode";
    } else {
      toggleText.innerHTML = "Light Mode";
    }
});
