// Cw 1
function checkText(text) {
  for (let i = 0; i < text.length; i++) {
    let c = text[i];
    if (c >= "A" && c <= "z") return 1;
    if (c < "0" || c > "9") return 2;
  }
  return 0;
}

(function () {
  const button = document.getElementById("ex1_button");
  const content = document.getElementById("ex1_content");

  button.addEventListener("click", function (event) {
    let cont = "0";
    for (let n = 1; n <= 9; n++) cont += `, ${n}`;
    content.textContent = cont;
  });

  const textNum = document.getElementById("ex2_text");
  const contentNum = document.getElementById("ex2_content");
  textNum.addEventListener("input", function (event) {
    let cont = "";
    let text = textNum.value;
    let check = checkText(text);
    if (check == 1) cont = "Numer nie może zawierać liter";
    if (check == 2) cont = "Numer nie może zawierać znaków specjalnych";
    if (check == 0) {
      if (text.length != 9) cont = "Długość numeru musi być równa 9";
      else cont = "Numer telefonu jest poprawny";
    }
    contentNum.textContent = cont;
  });

  // Cw 2

  const dragText = document.getElementById("ex3_element");
  dragText.draggable = true;

  const containers = [
    document.getElementById("ex3_one"),
    document.getElementById("ex3_two"),
  ];

  dragText.addEventListener("dragstart", function (event) {
    event.dataTransfer.setData("text/plain", event.target.id);
  });

  containers.forEach((container) => {
    container.addEventListener("dragover", function (event) {
      event.preventDefault();
    });

    container.addEventListener("drop", function (event) {
      event.preventDefault();

      const eId = event.dataTransfer.getData("text/plain");
      const draggedE = document.getElementById(eId);

      container.appendChild(draggedE);
    });
  });

  // Cw 3

  const el = document.getElementById("ex6_element");
  const btn = document.getElementById("ex6_animate_button");

  btn.addEventListener("click", function () {
    el.classList.add("animate");

    setTimeout(function () {
      el.classList.remove("animate");
    }, 2000);
  });

  const btnE4 = document.getElementById("ex4_button");

  btnE4.addEventListener("click", function () {
    const r = 200 + Math.floor(Math.random() * 50);
    const g = 200 + Math.floor(Math.random() * 50);
    const b = 200 + Math.floor(Math.random() * 50);
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
  });
})();
