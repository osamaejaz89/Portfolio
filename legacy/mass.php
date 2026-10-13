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
        <button>
          <a href="distance.php">
            Distance Travelled
          </a>
        </button>
        <button class="active" >
          <a href="mass.php">
            Mass and Force
          </a>
        </button>
      </div>
      <form action="mass.php" method="POST">
        <p class="text">Mass</p>
        <input type="number" name="masss" required/>
        <select name="mass_unit">
          <option value="gram">gram</option>
          <option value="kg" selected>kg</option>
          <option value="metrictons">metric tons</option>
          <option value="grains">grains</option>
          <option value="drachms">drachms</option>
          <option value="ounces">ounces</option>
          <option value="pounds">pounds</option>
          <option value="stones">stones</option>
          <option value="USshortstons">US shorts tons</option>
          <option value="imperialtons">imperial tons</option>
        </select>
        <p class="text">Net Force</p>
        <input type="number" name="netforce" required />
        <select name="nf_unit">
          <option value="Newton" selected>Newton</option>
          <option value="kiloN">kilo N</option>
          <option value="MegaN">ft/s</option>
          <option value="GigaN">Giga N</option>
          <option value="TeraN">Tera N</option>
          <option value="poundals">poundals</option>
          <option value="poundsforce">pounds force</option>
          <option value="dynes">dynes</option>
        </select>
        <p id="result">Acceleration:
          <select name="acc_unit">
                <option value="m/s2" selected>m/s2</option>
                <option value="g">g</option>
                <option value="ft/s2">ft/s2</option>
              </select>
          </p>
          <button type="submit" name="mass">Calculate</button>
          
        </form>
        <div class="answer">
      <?php include 'formula.php';?>
      </div>

    </div>
  </body>
</html>
