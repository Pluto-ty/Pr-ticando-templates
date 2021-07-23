let left = document.getElementById("js-left");
let right = document.getElementById("js-right");
let tops = document.getElementById("js-top");
let bottom = document.getElementById("js-bottom");
let topValue = (tops.value - 100) * -1;
let leftValue = (left.value - 100) * -1;
let rightValue = (right.value - 100) * -1;
let bottomValue = (bottom.value - 100) * -1;
document.getElementById("js-border-radius").innerHTML = `${tops.value}% ${
   (tops.value - 100) * -1
}% ${bottom.value}% ${(bottom.value - 100) * -1}% / ${left.value}% ${
   right.value
}% ${(right.value - 100) * -1}% ${(left.value - 100) * -1}%`;
var Draggable = function (elemento) {
   elementoAtual = elemento;
   this.refMouseUp = function (event) {
      that.onMouseUp(event);
   };

   this.refMouseMove = function (event) {
      that.onMouseMove(event);
   };

   elemento.addEventListener("mousedown", function (event) {
      elemento.classList.add("dragging");

      window.addEventListener("mousemove", function () {
         document.getElementById(
            "js-shape-generator"
         ).style.borderRadius = `${tops.value}% ${topValue}% ${bottomValue}% ${bottom.value}% / ${left.value}% ${right.value}% ${rightValue}% ${leftValue}%`;
         document.getElementById(
            "js-border-radius"
         ).innerHTML = `${tops.value}% ${topValue}% ${bottomValue}% ${bottom.value}% / ${left.value}% ${right.value}% ${rightValue}% ${leftValue}%`;
      });

      window.addEventListener("mouseup", function () {
         window.removeEventListener("mousemove", this.refMouseMove);
         window.removeEventListener("mouseup", this.refMouseUp);
      });
   });
};

var draggables = document.querySelectorAll(".draggable");
[].forEach.call(draggables, function (draggable, indice) {
   new Draggable(draggable);
});

function copy() {
   let textArea = `border-radius: ${tops.value}% ${topValue}% ${bottomValue}% ${bottom.value}% / ${left.value}% ${right.value}% ${rightValue}% ${leftValue}%;`;
   navigator.clipboard.writeText(textArea);
}
