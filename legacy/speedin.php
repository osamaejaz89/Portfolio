<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="css/styles.css" />
    <link rel="stylesheet" href="css/style2.css" />
    <title>Calculator</title>
  </head>
  <body>
  <nav id="navbar">
      <h2>
        <a href="index.html"><span class="text-primary">Osama </span>Ejaz</a>
      </h2>
      <ul>
        <li><a class="active" href="index.html">HOME</a></li>
        <li><a href="intro.html">About</a></li>
        <li><a href="CV/CV.html">CV</a></li>
        <li><a href="project_proposal.html">Project Proposal</a></li>
        <li><a href="readme.html">Web Installation</a></li>
        <li><a href="validation.html">Web Validation</a></li>
        <li><a class="active" href="speedin.php">Calculator</a></li>
      </ul>
    </nav>
  <div class="box">
      <h1>Acceleration Calculator</h1>
      <div class="btn-group">
        <button class="active">
          <a href="speedin.php">Speed Difference</a>
        </button>
        <button>
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
      <form action="speedin.php" method="POST">
        <p class="text">Initial Speed</p>
        <input type="number" step="any" name="ispeed" />
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

        <p class="text">Final Speed</p>
        <input type="number" step="any" name="fspeed" />
        <select name="fs_unit">
          <option value="m/s" selected>m/s</option>
          <option value="km/h">km/h</option>
          <option value="ft/s">ft/s</option>
          <option value="mph">mph</option>
          <option value="knots">knots</option>
          <option value="km/s">km/s</option>
          <option value="mi/s">mi/s</option>
          <option value="c">c</option>
        </select>
        <p class="text">Time</p>
        <input type="number" step="any" name="time" />
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
        <p id="result">
          Acceleration:
          <select name="acc_unit">
            <option value="m/s2" selected>m/s2</option>
            <option value="g">g</option>
            <option value="ft/s2">ft/s2</option>
          </select>
        </p>
        
        <button type="submit" name="speedin">Calculate</button>
      </form>
      <div class="answer">
        <?php include 'formula.php';?>
      </div>
    </div>
  </body>
</html>
