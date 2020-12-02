var score = 0;
var timer = 5000;
var flag = 0;

var Avengers = [
  "assets/ironman.jpg",
  "assets/cap.jpg",
  "assets/thor.jpg",
  "assets/hulk.jpg",
  "assets/blackwidow.jpg",
  "assets/hawkeye.jpg",
  "assets/warmachine.jpg",
];

var names = [
  "assets/ironman2.png",
  "assets/cap2.jpg",
  "assets/thor2.jpg",
  "assets/hulk2.jpg",
  "assets/blackwidow2.jpg",
  "assets/hawkeye2.jpg",
  "assets/warmachine2.jpg",
];

$(document).ready(function () {
  //level setting
  var selected = localStorage.getItem("selected");
  if (selected) {
    $(".levels").val(selected); //level select
  }

  var counter2 = localStorage.getItem("counter");
  if (counter2) {
    timer = counter2;
  }
  //setting local storage
  $("select.levels").change(function () {
    localStorage.setItem("selected", $(this).val());
    var selectedLevel = $(this).children("option:selected").text();
    var counter = selectedLevel.slice(10, -1);
    localStorage.setItem("counter", counter);
    location.reload();
  });

  var wrong = new Audio("assets/deep.mp3");
  var win = new Audio("assets/hooray.mp3");
  var aven = new Audio("assets/Avengers.mp3");
  var inf = new Audio("assets/infinity.mp3");
  // var audio2 = $("audio")[0];
  var MainTimer = "0:00:" + timer;
  $("#hide").hide();
  $(".all").hide();

  $(".button").click(function () {
    $(".all").show();
    $(".button").hide();
    $("#intro").hide();
    var interval = setInterval(function () {
      var timer = MainTimer.split(":");
      var hrs = parseInt(timer[0], 10);
      var min = parseInt(timer[1], 10);
      var sec = parseInt(timer[2], 10);
      --sec;
      min = sec < 0 ? --min : min;
      hrs = min < 0 ? --hrs : hrs;

      if (hrs < 0 && flag == 0) {
        score_save(score);
        clearInterval(interval);
        $("#coms").hide();
        $("#hide").show();
        $("#hide").click(function () {
          location.reload();
        });
        $("#aven-p").text("Game Over!");

        wrong.play();
        inf.play();
        return;
      }

      sec = sec < 0 ? 59 : sec;
      sec = sec < 10 ? "0" + sec : sec;
      min = min < 0 ? 59 : min;
      min = min < 10 ? "0" + min : min;

      MainTimer = hrs + ":" + min + ":" + sec;
      $(".countdown").html("timer: " + MainTimer);
    }, 1000);
  });

  //--------------------------------------------------------------------------------------------------//
  var suffleArray = suffle(Avengers);
  $.each(suffleArray, function (index, value) {
    var fruit_value = value.slice(7, -4);

    $("<div ><img style='width:100%;height:100%;' src='" + value + "' /></div>")
      .appendTo("#Avengers")
      .draggable({
        revert: true,
        scope: fruit_value.toLocaleLowerCase(),
      });
  });

  //--------------------------------------------------------------------------------------------------//
  var suffle_name = suffle(names);
  $.each(suffle_name, function (index, value) {
    var fruit_value2 = value.slice(7, -5);

    $("<div ><img style='width:100%;height:100%;' src='" + value + "' /></div>")
      .appendTo("#coms")
      .droppable({
        scope: fruit_value2.toLocaleLowerCase(),

        drop: function (event, ui) {
          win.play();
          $(ui.draggable).append($(this).text());
          $(this).toggle("bounce", { times: 3 }, "slow");
          score = score + 5;
          $(this).hide("puff", "1000");
          $("#score_board").text("score: " + score);
          if (score / 5 == names.length) {
            //game stop condition when win
            score_save(score);
            $("#coms").hide();
            $("#hide").show();
            $(".countdown").hide();
            $("#score_board").addClass("highlight");
            $("#aven-p").text("You are Avenger!");
            aven.play();
            flag = 1;
            $("#hide").click(function () {
              location.reload();
            });
          }
        },
      });
  });
});

function suffle(arr) {
  return arr.sort(function () {
    return 0.5 - Math.random();
  });
}
/**********************DB save*************************** */
function score_save(score) {
  //alert("hello");
  var db = openDatabase("Game", "1.0", "game", 2 * 1024 * 1024);
  db.transaction(function (tx) {
    tx.executeSql("CREATE TABLE IF NOT EXISTS LOGS (id AUTO_INCREMENT, log)");
    tx.executeSql("INSERT INTO LOGS (log) VALUES (?)", [score]);
  });

  db.transaction(function (tx) {
    tx.executeSql(
      "SELECT * FROM LOGS",
      [],
      function (tx, results) {
        var len = results.rows.length,
          i;

        for (i = 0; i < len; i++) {
          // msg = "<p><b>" + results.rows.item(i).log + "</b></p>";
          document.querySelector("#status").innerHTML += results.rows.item(
            i
          ).log;
        }
      },
      null
    );
  });
}
