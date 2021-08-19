let red = document.getElementById("js-red");
let green = document.getElementById("js-green");
let blue = document.getElementById("js-blue");

document.getElementById("js-green").max;

function enforceMinMax(el) {
   if (el.value != "") {
      if (parseInt(el.value) < parseInt(el.min)) {
         el.value = el.min;
      }
      if (parseInt(el.value) > parseInt(el.max)) {
         el.value = el.max;
      }
   }
}

function colorCycle() {
   if (document.querySelector(".btn").innerHTML == "Start") {
      document.querySelector(".btn").innerHTML = "Stop";
      document.querySelector(".btn").classList.add("btn-stop");
      document.querySelector(".btn").classList.remove("btn-start");
   } else if (document.querySelector(".btn").innerHTML == "Stop") {
      document.querySelector(".btn").classList.remove("btn-stop");
      document.querySelector(".btn").classList.add("btn-start");
      document.querySelector(".btn").innerHTML = "Start";
   }

   if (red.value && green.value && blue.value > 0) {
      alert("test");
      if (red.value < 10) {
         red.value = `0${red.value}`;
      }
      if (green.value < 10) {
         green.value = `0${green.value}`;
      }
      if (blue.value < 10) {
         blue.value = `0${blue.value}`;
      }

      document.querySelector(
         "body"
      ).style.background = `#${red.value}${green.value}${blue.value}`;
   }
}
