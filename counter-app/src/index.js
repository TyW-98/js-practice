const counterElement = document.getElementById("count-el");
const countHistory = document.getElementById("count-history");

const incrementButton = document.getElementById("increment-btn");
const saveButton = document.getElementById("save-btn");

let count = 0;

incrementButton.addEventListener("click", () => {
  count += 1;
  counterElement.textContent = count;
});

saveButton.addEventListener("click", () => {
  countHistory.textContent += ` ${count} -`;
  count = 0;
  counterElement.textContent = count;
});
