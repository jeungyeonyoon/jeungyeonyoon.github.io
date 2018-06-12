var ws = parseInt(document.getElementById("windspeed").innerHTML);

var h = parseInt(document.getElementById("h").innerHTML);
var l = parseInt(document.getElementById("l").innerHTML);

var t = parseFloat((h + l) / 2);
document.getElementById("temperature").innerHTML = t.toFixed(2);;
var exp = Math.pow(ws, 0.16);

var wc = 35.74 + 0.6215 * t - 35.75 * exp + 0.4275 * t * exp;

document.getElementById("windoutput").innerHTML = wc.toFixed(2);

/*parseFloat(document.getElementById("temperature").value);
    var s= parseFloat(document.getElementById("windSpeed").value);
  */
