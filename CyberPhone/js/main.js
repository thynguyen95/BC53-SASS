var checkbox = document.querySelector('input[name="darkMode"]');

checkbox.addEventListener("change", function () {
  if (this.checked) {
    document.querySelector("body").classList.add("darkMode");
  } else {
    document.querySelector("body").classList.remove("darkMode");
  }
});
