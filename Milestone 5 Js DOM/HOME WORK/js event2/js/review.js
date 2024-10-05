const container = document.getElementById("review");

document.getElementById("btn-submit").addEventListener("click", function () {
  const inputValue = document.getElementById("textarea").value;
  const p = document.createElement("p");
  p.innerText = inputValue;
  container.appendChild(p);
  document.getElementById("textarea").value = "";
});
let reviewCount = 1;
document.getElementById("textarea").addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    const inputValue = document.getElementById("textarea").value;
    const p = document.createElement("p");
    p.innerHTML = reviewCount + "." + inputValue;
    container.appendChild(p);
    document.getElementById("textarea").value = "";
    reviewCount++;
  }
});
