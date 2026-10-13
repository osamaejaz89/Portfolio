<?php
//$con = mysqli_connect("localhost", "root", "", "conversion");

if (isset($_POST['speedin'])) {
    $initialSpeed = $_POST['ispeed'];
    $finalSpeed = $_POST['fspeed'];
    $time = $_POST['time'];
    $is_unit = $_POST['is_unit'];
    $fs_unit = $_POST['fs_unit'];
    $time_unit = $_POST['time_unit'];
    $acc_unit = $_POST['acc_unit'];

    switch ($is_unit) {
        case "m/s":
            break;

        case "km/h":
            $initialSpeed /= 3.6;
            break;

        case "ft/s":
            $initialSpeed /= 3.281;
            break;

        case "mph":
            $initialSpeed /= 2.23694;
            break;

        case "knots":
            $initialSpeed /= 1.944;
            break;

        case "km/s":
            $initialSpeed *= 1000;
            break;

        case "mi/s":
            $initialSpeed *= 1609;
            break;

        case "c":
            $initialSpeed *= 299792458;
            break;

        default:
            echo "Initial Unit error";
            break;
    }
    switch ($fs_unit) {
        case "m/s":
            break;

        case "km/h":
            $initialSpeed /= 3.6;
            break;

        case "ft/s":
            $initialSpeed /= 3.281;
            break;

        case "mph":
            $initialSpeed /= 2.237;
            break;

        case "knots":
            $initialSpeed /= 1.944;
            break;

        case "km/s":
            $initialSpeed *= 1000;
            break;

        case "mi/s":
            $initialSpeed *= 1609;
            break;

        case "c":
            $initialSpeed *= 299792458;
            break;

        default:
            echo "Final Unit error";
            break;
    }

    switch ($time_unit) {
        case "sec":
            break;

        case "min":
            $time *= 60;
            break;
        case "day":
            $time *= 86400;
            break;
        case "hour":
            $time *= 3600;
            break;
        case "year":
            $time *= 31536000;
            break;
        case "week":
            $time *= 60;
            break;
        case "month":
            $time *= 2592000;
            break;

        case "milisec":
            $time /= 1000;
            break;

        default:
            echo "Final Unit error";
            break;
    }

    $result = (($finalSpeed - $initialSpeed) / ($time));

    switch ($acc_unit) {
        case "m/s2":
            break;

        case "g":
            $result *= 0.101972;
            break;

        case "ft/s2":
            $result *= 3.28084;
            break;

        default:
            echo "acceleration Unit error";
            break;
    }
    echo "Acceleration: " . $result . $acc_unit;
}
if (isset($_POST['mass'])) {
    $mass = $_POST['masss'];
    $netforce = $_POST['netforce'];
    $mass_unit = $_POST['mass_unit'];
    $nf_unit = $_POST['nf_unit'];
    $acc_unit = $_POST['acc_unit'];

    switch ($mass_unit) {
        case "kg":
            $mass /= 1000;
            break;

        case "gram":
            break;

        case "metrictons":
            $mass *= 1000000;
            break;

        case "grain":
            $mass /= 15.432;
            break;

        case "drachms":
            $mass *= 1.771;
            break;

        case "ounces":
            $mass *= 28.35;
            break;

        case "pounds":
            $mass *= 454;
            break;

        case "stones":
            $mass *= 6350;
            break;

        case "USshortstons":
            $mass *= 907184.74;
            break;

        case "imperialtons":
            $mass *= 1016046.91;
            break;

        default:
            echo "Mass Unit error";
            break;
    }

    switch ($nf_unit) {
        case "Newton":
            break;

        case "MegaN":
            $netforce *= 1000000;
            break;

        case "GigaN":
            $netforce *= 1000000000;
            break;

        case "TeraN":
            $netforce *= 1000000000000;
            break;

        case "Kilo":
            $netforce *= 1000;
            break;

        case "poundals":
            $netforce /= 7.233;
            break;

        case "poundsforce":
            $netforce *= 4.448;
            break;

        case "dynes":
            $netforce /= 100000;
            break;

        default:
            echo "Net Force Unit error";
            break;
    }
    $mass *= 1000;
    $result = ($netforce / $mass);

    switch ($acc_unit) {
        case "m/s2":
            break;

        case "g":
            $result *= 0.101972;
            break;

        case "ft/s2":
            $result *= 3.28084;
            break;

        default:
            echo "acceleration Unit error";
            break;
    }
    echo "Acceleration: " . $result . $acc_unit;
}
if (isset($_POST['distance'])) {
    $initialSpeed = $_POST['ispeed'];
    $distance = $_POST['dist'];
    $time = $_POST['time'];
    $is_unit = $_POST['is_unit'];
    $ds_unit = $_POST['ds_unit'];
    $time_unit = $_POST['time_unit'];
    $acc_unit = $_POST['acc_unit'];

    switch ($is_unit) {
        case "m/s":
            break;

        case "km/h":
            $initialSpeed /= 3.6;
            break;

        case "ft/s":
            $initialSpeed /= 3.281;
            break;

        case "mph":
            $initialSpeed /= 2.23694;
            break;

        case "knots":
            $initialSpeed /= 1.944;
            break;

        case "km/s":
            $initialSpeed *= 1000;
            break;

        case "mi/s":
            $initialSpeed *= 1609;
            break;

        case "c":
            $initialSpeed *= 299792458;
            break;

        default:
            echo "Initial Unit error";
            break;
    }
    switch ($ds_unit) {
        case "m":
            break;

        case "mm":
            $distance /= 1000;
            break;

        case "cm":
            $distance *= 10;
            break;

        case "km":
            $distance *= 1000000;
            break;

        case "inches":
            $distance *= 25.4;
            break;

        case "feet":
            $distance *= 305;
            break;

        case "miles":
            $distance *= 1609;
            break;

        case "yard":
            $distance *= 914;
            break;

        default:
            echo "Distance Unit error";
            break;
    }

    switch ($time_unit) {
        case "sec":
            break;

        case "min":
            $time *= 60;
            break;
        case "day":
            $time *= 86400;
            break;
        case "hour":
            $time *= 3600;
            break;
        case "year":
            $time *= 31536000;
            break;
        case "week":
            $time *= 60;
            break;
        case "month":
            $time *= 2592000;
            break;
        case "milisec":
            $time /= 1000;
            break;

        default:
            echo "Final Unit error";
            break;
    }

    $result = 2 * ($distance - $initialSpeed * $time) / ($time * $time);

    switch ($acc_unit) {
        case "m/s2":
            break;

        case "g":
            $result *= 0.101972;
            break;

        case "ft/s2":
            $result *= 3.28084;
            break;

        default:
            echo "acceleration Unit error";
            break;
    }
    echo "Acceleration: " . $result . $acc_unit;
}
?>