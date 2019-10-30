var booking = [
  {month: 10, start: 28, duration: 5, resource: "Malibu", name: "Suminski"},
  {month: 10, start: 3, duration: 9, resource: "Silverado", name: "Whitlock"},
  {month: 10, start: 16, duration: 2, resource: "Malibu", name: "LEM"},
  {month: 10, start: 9, duration: 5, resource: "Tahoe", name: "LEM"}
];

var s1 = booking[0].start;
var z1 = booking[0].duration;
var r1 = booking[0].resource;

var s2 = booking[1].start;
var z2 = booking[1].duration;
var r2 = booking[1].resource;

var s3 = booking[2].start;
var z3 = booking[2].duration;
var r3 = booking[2].resource;

var s4 = booking[3].start;
var z4 = booking[3].duration;
var r4 = booking[3].resource;

// x = start, y = div, z = dur;
function resDiv(x, y, z) {
  if (x == d1) {
    y.style.left = "0%";
    y.style.top = "0%";
  } else if (x == d2) {
    y.style.left = "14.29%";
    y.style.top = "0%";
  } else if (x == d3) {
    y.style.left = "28.58%";
    y.style.top = "0%";
  } else if (x == d4) {
    y.style.left = "42.87%";
    y.style.top = "0%";
  } else if (x == d5) {
    y.style.left = "57.16%";
    y.style.top = "0%";
  } else if (x == d6) {
    y.style.left = "71.45%";
    y.style.top = "0%";
  } else if (x == d7) {
    y.style.left = "85.74%";
    y.style.top = "0%";
  } else if (x == d8) {
    y.style.left = "0%";
    y.style.top = "20%";
  } else if (x == d9) {
    y.style.left = "14.29%";
    y.style.top = "20%";
  } else if (x == d10) {
    y.style.left = "28.58%";
    y.style.top = "20%";
  } else if (x == d11) {
    y.style.left = "42.87%";
    y.style.top = "20%";
  } else if (x == d12) {
    y.style.left = "57.16%";
    y.style.top = "20%";
  } else if (x == d13) {
    y.style.left = "71.45%";
    y.style.top = "20%";
  } else if (x == d14) {
    y.style.left = "85.74%";
    y.style.top = "20%";
  } else if (x == d15) {
    y.style.left = "0%";
    y.style.top = "40%";
  } else if (x == d16) {
    y.style.left = "14.29%";
    y.style.top = "40%";
  } else if (x == d17) {
    y.style.left = "28.58%";
    y.style.top = "40%";
  } else if (x == d18) {
    y.style.left = "42.87%";
    y.style.top = "40%";
  } else if (x == d19) {
    y.style.left = "57.16%";
    y.style.top = "40%";
  } else if (x == d20) {
    y.style.left = "71.45%";
    y.style.top = "40%";
  } else if (x == d21) {
    y.style.left = "85.74%";
    y.style.top = "40%";
  } else if (x == d22) {
    y.style.left = "0%";
    y.style.top = "60%";
  } else if (x == d23) {
    y.style.left = "14.29%";
    y.style.top = "60%";
  } else if (x == d24) {
    y.style.left = "28.58%";
    y.style.top = "60%";
  } else if (x == d25) {
    y.style.left = "42.87%";
    y.style.top = "60%";
  } else if (x == d26) {
    y.style.left = "57.16%";
    y.style.top = "60%";
  } else if (x == d27) {
    y.style.left = "71.45%";
    y.style.top = "60%";
  } else if (x == d28) {
    y.style.left = "85.74%";
    y.style.top = "60%";
  } else if (x == d29) {
    y.style.left = "0%";
    y.style.top = "80%";
  } else if (x == d30) {
    y.style.left = "14.29%";
    y.style.top = "80%";
  } else if (x == d31) {
    y.style.left = "28.58%";
    y.style.top = "80%";
  } else if (x == d32) {
    y.style.left = "42.87%";
    y.style.top = "80%";
  } else if (x == d33) {
    y.style.left = "57.16%";
    y.style.top = "80%";
  } else if (x == d34) {
    y.style.left = "71.45%";
    y.style.top = "80%";
  } else if (x == d35) {
    y.style.left = "85.74%";
    y.style.top = "80%";
  }

  y.style.width = (z * 13) + "%";
}

// x = resource, y = div;
function marginTop(x, y) {
  if (x == "Malibu") {
    y.style.marginTop = "2%";
  } else if (x == "Tahoe") {
    y.style.marginTop = "4.5%";
  } else if (x == "Silverado") {
    y.style.marginTop = "7%";
  }
}
