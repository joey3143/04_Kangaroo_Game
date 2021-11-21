const kangaroo = document.getElementById("kangaroo");
const cactus = document.getElementById("cactus");

function jump() {
  if (kangaroo.classList != "jump") {
    kangaroo.classList.add("jump");

    setTimeout(function () {
      kangaroo.classList.remove("jump");
    }, 300);
  }
}

let isAlive = setInterval(function () {
  // get current kangaroo Y position
  let kangarooTop = parseInt(window.getComputedStyle(kangaroo).getPropertyValue("top"));

  // get current cactus X position
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );

  // detect collision
  if (cactusLeft < 50 && cactusLeft > 0 && kangarooTop >= 140) {
    // collision
    alert("Game Over!");
  }
}, 10);

document.addEventListener("click", function (event) {
  jump();
});
