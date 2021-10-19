// Dom Selections
const inputArea = document.querySelector(".large-area--input");
const outputArea = document.querySelector(".large-area--output");
const formatButton = document.querySelector(".controls-button--format");
const minifyButton = document.querySelector(".controls-button--minify");

// Event Listeners
formatButton.addEventListener("click", () => {
  const formatted = JSON.stringify(JSON.parse(inputArea.value), null, 2);

  outputArea.value = formatted;
});

minifyButton.addEventListener("click", () => {
  const minified = JSON.stringify(JSON.parse(inputArea.value));

  outputArea.value = minified;
});
