let red = document.getElementById("js-red");
let green = document.getElementById("js-green");
let blue = document.getElementById("js-blue");
let timeValue = 250;
let colorChangeValue = 10;
let actualRgb;
let changinColor;

function colorCycle() {
   // Pegando os valores hex
   let hex = `${red.value}${green.value}${blue.value}`;
   // Validando o valor
   let isOk = /^#[0-9A-F]{6}$/i.test(`#${hex}`);

   if (isOk) {
      // Convertendo para rgb
      let aRgbHex = hex.match(/.{1,2}/g);
      let aRgb = [
         parseInt(aRgbHex[0], 16),
         parseInt(aRgbHex[1], 16),
         parseInt(aRgbHex[2], 16),
      ];

      // Passando valor para uma string e mudando bg
      let rgb = `${aRgb[0]}, ${aRgb[1]}, ${aRgb[2]}`;
      document.querySelector("body").style.background = `rgb(${rgb})`;

      if (document.querySelector(".btn").innerHTML == "Start") {
         document.querySelector(".btn").innerHTML = "Stop";
         document.querySelector(".btn").classList.toggle("btn-stop");
         document.querySelector(".btn").classList.toggle("btn-start");
         startChangingColor(aRgb);
      } else if (document.querySelector(".btn").innerHTML == "Stop") {
         document.querySelector(".btn").classList.toggle("btn-stop");
         document.querySelector(".btn").classList.toggle("btn-start");
         document.querySelector(".btn").innerHTML = "Start";
         stopChangingColor();
      }

      document.querySelector(".c-erro-message").style.display = "none";
   } else {
      document.querySelector(".c-erro-message").style.display = "block";
   }
}

function startChangingColor(argb) {
   actualRgb = argb;
   if (
      document.getElementById("js-timeperChange").value < 0 ||
      document.getElementById("js-valueperTime").value < 0
   ) {
      return;
   } else {
      // Verificando valores do tempo e da quantidade por tick
      if (Number(document.getElementById("js-timeperChange").value) == 0) {
         timeValue = 250;
      } else {
         timeValue = document.getElementById("js-timeperChange").value * 1000;
      }
      if (Number(document.getElementById("js-valueperTime").value) == 0) {
         colorChangeValue = 10;
      } else {
         colorChangeValue = Number(
            document.getElementById("js-valueperTime").value
         );
      }

      // Inputs Onlyread
      let inputs = document.querySelectorAll("input");
      for (let i of inputs) {
         i.readOnly = true;
      }

      changinColor = setInterval(() => {
         actualRgb[0] = Number(actualRgb[0]) + colorChangeValue;
         actualRgb[1] = Number(actualRgb[1]) + colorChangeValue;
         actualRgb[2] = Number(actualRgb[2]) + colorChangeValue;
         verifyRgbValues();

         let rgb = `${actualRgb[0]}, ${actualRgb[1]}, ${actualRgb[2]}`;

         document.getElementById(
            "js-resultColor"
         ).innerHTML = `Cor do Background em RBG padrão: rbg(${rgb})`;
         document.querySelector("body").style.background = `rgb(${rgb})`;
      }, timeValue);
   }
}

function stopChangingColor() {
   clearInterval(changinColor);
   let inputs = document.querySelectorAll("input");
   for (let i of inputs) {
      i.readOnly = false;
   }
}

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

function verifyRgbValues() {
   if (actualRgb[0] >= 255) {
      actualRgb[0] = 0;
   }
   if (actualRgb[1] >= 255) {
      actualRgb[1] = 0;
   }
   if (actualRgb[2] >= 255) {
      actualRgb[2] = 0;
   }
}

function componentToHex(c) {
   var hex = c.toString(16);
   return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
   return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
