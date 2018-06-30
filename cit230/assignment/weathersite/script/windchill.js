var ws = parseInt(document.getElementById("windspeed").innerHTML);

var tempmax = parseInt(document.getElementById("tempmax").innerHTML);
var tempmin = parseInt(document.getElementById("tempmin").innerHTML);

var t = parseFloat((tempmax + l) / 2);
document.getElementById("temperature").innerHTML = t.toFixed(2);;
var exp = Math.pow(ws, 0.16);

var wc = 35.74 + 0.6215 * t - 35.75 * exp + 0.4275 * t * exp;

document.getElementById("windoutput").innerHTML = wc.toFixed(2);

/*parseFloat(document.getElementById("temperature").value);
    var s= parseFloat(document.getElementById("windSpeed").value);
  */
