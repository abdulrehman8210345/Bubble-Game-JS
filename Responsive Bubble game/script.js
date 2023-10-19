document.addEventListener("DOMContentLoaded", function () {
    var timer = 60;
    var hit = 0;
    var score = 0;
    var gameOver = false;
    function bubbleMaker() {
      let bubble = "";
  
      for (var i = 0; i < 133; i++) {
        var rand = Math.floor(Math.random() * 10);
        bubble += `<div class="bubble">${rand}</div>`;
      }
      document.querySelector("#pbtm").innerHTML = bubble;
    }
  
    function timerController() {
      var timerId = setInterval(function () {
        if (timer > 0) {
          timer--;
          document.querySelector("#timerVal").innerHTML = timer;
        } else if (!gameOver) {
          console.log("Game over");
          var a = document.querySelector("#pbtm ");
          a.innerHTML = `<h1>Game Over</h1><div><h2>Score: ${score}</h2></div>`;
  
          a.style.backgroundColor = "rgba(31, 152, 152, 0.845)";
          a.style.flexDirection = "column";
  
          clearInterval(timerId);
        }
      }, 1000);
    }
  
    function hitController() {
      hit = Math.floor(Math.random() * 10);
      document.querySelector("#hitVal").innerHTML = hit;
    }
  
    function increaseScore() {
      score += 10;
      document.querySelector("#scoreVal").innerHTML = score;
    }
  
    document.querySelector("#pbtm").addEventListener("click", function (dets) {
      var clickedNumber = Number(dets.target.innerHTML);
      if (!gameOver && clickedNumber === hit) {
        hitController();
        increaseScore();
        bubbleMaker();
      }
    });
  
    timerController();
    bubbleMaker();
    hitController();
  });
  