
let container = document.querySelector("#div-container");
let allBox = container.querySelectorAll(".box");
let player = "X";

allBox.forEach((box) => {
  box.addEventListener("click", (e) => {
    if (!box.textContent) {
      box.textContent = player;
      if (checkWin()) {
        alert(player + " wins!");
        return;
      }
      if ([...allBox].every(b => b.textContent)) {
        alert("Draw!");
        return;
      }
      player = (player === "X") ? "O" : "X";
    }
  });
});

const checkWin = () => {
  let winPossibilities = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  return winPossibilities.some((comb) => {
    let [a, b, c] = comb;
    return allBox[a].textContent &&
           allBox[a].textContent === allBox[b].textContent &&
           allBox[a].textContent === allBox[c].textContent;
  });
}





