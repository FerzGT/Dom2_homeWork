export default function playGoblin() {
    document.addEventListener("DOMContentLoaded", () => {
      const newDiv = document.createElement("div");
      const img = document.createElement("img");
      img.src =
        "https://github.com/netology-code/ahj-homeworks/raw/AHJ-50/dom/pic/goblin.png";
      // img.src = "../img/goblin.png";
      img.alt = "Гоблин";
      newDiv.appendChild(img);
  
      function moviGoblin() {
        const field = document.querySelectorAll(".grid-cell");
        const newPosition = Math.floor(Math.random() * (field.length - 1));
        field[newPosition].appendChild(newDiv);
      }
  
      setInterval(moviGoblin, 1000);
    });
  }