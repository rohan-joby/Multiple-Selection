const checkboxes = document.querySelectorAll("input");

let lastCheck;
function handleClick(e) {
  if (e.shiftKey && this.checked) {
    let toCheck = false;
    checkboxes.forEach((box) => {
      if (box == this || box == lastCheck) {
        toCheck = !toCheck;
      }
      if (toCheck) {
        box.checked = true;
      }
    });
  }
  lastCheck = this;
}

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", handleClick)
);
