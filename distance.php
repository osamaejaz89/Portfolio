<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="css/style2.css" />
    <title>Calculator</title>
  </head>
  <body>
    <div class="box">
      <h1>Acceleration Calculator</h1>
      <div class="btn-group">
        <button>
          <a href="speedin.php">Speed Difference</a>
        </button>
        <button class="active" >
          <a href="distance.php">
            Distance Travelled
          </a>
        </button>
        <button>
          <a href="mass.php">
            Mass and Force
          </a>
        </button>
      </div>
      <form action="distance.php" method="POST">
      <p class="text">Initial Speed</p>
      <input type="number" name="ispeed" required />
      <select name="is_unit">
        <option value="m/s" selected>m/s</option>
        <option value="km/h">km/h</option>
        <option value="ft/s">ft/s</option>
        <option value="mph">mph</option>
        <option value="knots">knots</option>
        <option value="km/s">km/s</option>
        <option value="mi/s">mi/s</option>
        <option value="c">c</option>
      </select>
      <p class="text">Distance</p>
      <input type="number" name="dist" required />
      <select name="ds_unit">
        <option value="mm">mm</option>
        <option value="cm">cm</option>
        <option value="m" selected>m</option>
        <option value="km">km</option>
        <option value="inches">inches</option>
        <option value="feet">feet</option>
        <option value="miles">miles</option>
        <option value="yard">yard</option>
      </select>
      <p class="text">Time</p>
      <input type="number" name="time" required />
      <select name="time_unit">
        <option value="sec" selected>sec</option>
        <option value="min">min</option>
        <option value="day">day</option>
        <option value="hour">hr</option>
        <option value="week">week</option>
        <option value="month">month</option>
        <option value="year">year</option>
        <option value="milisec">milisec</option>
      </select>
      <p id="result">Acceleration:
        <select name="acc_unit">
              <option value="m/s2" selected>m/s2</option>
              <option value="g">g</option>
              <option value="ft/s2">ft/s2</option>
            </select>
        </p>
        
        <button type="submit" name="distance">Calculate</button>
      </form>
        <div class="answer">
        <?php include 'formula.php';?>
        </div>

    </div>
  </body>
</html>
