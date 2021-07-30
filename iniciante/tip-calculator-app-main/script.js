// Escolhe um valor, escolhe a % para dar de gorjeta, e o tanto de pessoas pagando a conta.
// Em seguida pega a porcentagem do valor divide a conta entre as pessoas e soma o valor da porcentagem em cima do total para cada pessoa pagar.

let tipValue = "";
let tip = document.querySelectorAll(".c-tips");

for (let i of tip) {
   i.addEventListener("click", function () {
      let str = i.innerHTML;
      tipValue = str.substring(0, str.length - 1);

      if (i.className.indexOf("on") !== -1) {
         i.classList.remove("on");
      } else {
         for (let color of tip) {
            color.classList.remove("on");
         }
         i.classList.add("on");
      }
      calcs();
      console.log(tipValue);
   });
}

function customValue() {
   let custom = parseInt(document.getElementById("js-custom-value").value);

   if (custom > 0) {
      tipValue = custom;
      document.getElementById("js-custom-value").classList.add("green");
      document.getElementById("js-custom-value").classList.remove("red");
   } else {
      document.getElementById("js-custom-value").classList.add("red");
      document.getElementById("js-custom-value").classList.remove("green");
   }
   for (let color of tip) {
      color.classList.remove("on");
   }
   calcs();
}
function calcs() {
   let value = parseInt(document.getElementById("js-value-input").value);
   let people = parseInt(document.getElementById("js-people-input").value);
   let percen = tipValue;
   if (value <= 0) {
      document.getElementById("js-value-input").classList.add("red");
      document.getElementById("js-value-input").classList.remove("green");
      document.querySelector(".c-error-value").style.display = "block";
   } else if (document.getElementById("js-value-input").value != "") {
      document.getElementById("js-value-input").classList.remove("red");
      document.getElementById("js-value-input").classList.add("green");
      document.querySelector(".c-error-value").style.display = "none";
   }
   if (people <= 0) {
      document.getElementById("js-people-input").classList.add("red");
      document.getElementById("js-people-input").classList.remove("green");
      document.querySelector(".c-error-people").style.display = "block";
   } else if (document.getElementById("js-people-input").value != "") {
      console.log(people);
      document.getElementById("js-people-input").classList.remove("red");
      document.getElementById("js-people-input").classList.add("green");
      document.querySelector(".c-error-people").style.display = "none";
   }

   if (value > 0 && people > 0 && tipValue != "") {
      document.getElementById("js-button").classList.toggle("on");
      let tipAmount = (value * percen) / 100 / people;
      let personAmount = value / people + tipAmount;
      console.log(tipAmount, personAmount, value / people);
      document.getElementById(
         "js-tip-amount"
      ).innerHTML = `$${tipAmount.toFixed(3)}`;
      document.getElementById("js-total").innerHTML = `$${personAmount.toFixed(
         3
      )}`;
   }
}

function reset() {
   let value = parseInt(document.getElementById("js-value-input").value);
   let people = parseInt(document.getElementById("js-people-input").value);
   if (value > 0 && people > 0 && tipValue != "") {
      document.getElementById("js-value-input").value = 0;
      document.getElementById("js-people-input").value = 0;
      document.getElementById("js-tip-amount").innerHTML = "$0.00";
      document.getElementById("js-total").innerHTML = "$0.00";
      document.getElementById("js-custom-value").value = "";
      for (let color of tip) {
         color.classList.remove("on");
      }
   } else {
      return;
   }
}
