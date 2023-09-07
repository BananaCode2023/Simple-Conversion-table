//For Inches column
function inchMeter() {
  let number = document.getElementById("inch-meter").value;

  document.getElementById("inchMeter").textContent = `${number*0.0254}meter`;
}

function inchCenti() {
  let number = document.getElementById("inch-centi").value;

  document.getElementById("inchCenti").textContent = `${number*2.54}centimeter`;
}

function inchMilli() {
  let number = document.getElementById("inch-milli").value;

  document.getElementById("inchMilli").textContent = `${number*25.4}millimeter`;
}

//For Meter Column
function meterInch() {
  let number = document.getElementById("meter-inch").value;

  document.getElementById("meterInch").textContent = `${number*12*3.28}inches`;
}
function meterCenti() {
  let number = document.getElementById("meter-centi").value;

  document.getElementById("meterCenti").textContent = `${number*100}centimeter`;
}
function meterMilli() {
  let number = document.getElementById("meter-milli").value;

  document.getElementById("meterMilli").textContent = `${number*1000}millimeter`;
}

//For Centimeter Column
function centiMeter() {
  let number = document.getElementById("centi-meter").value;

  document.getElementById("centiMeter").textContent = `${number/100}meter`;
}
function centiInch() {
  let number = document.getElementById("centi-inch").value;

  document.getElementById("centiInch").textContent = `${number/2.54}inches`;
}
function centiMilli() {
  let number = document.getElementById("centi-milli").value;

  document.getElementById("centiMilli").textContent = `${number*10}millimeters`;
}

//For Millimeter Column
function milliMeter() {
  let number = document.getElementById("milli-meter").value;

  document.getElementById("milliMeter").textContent = `${number/1000}meter`;
}
function milliInch() {
  let number = document.getElementById("milli-inch").value;

  document.getElementById("milliInch").textContent = `${number/25.4}meter`;
}
function milliCenti() {
  let number = document.getElementById("milli-centi").value;

  document.getElementById("milliCenti").textContent = `${number/10}centimeter`;
}