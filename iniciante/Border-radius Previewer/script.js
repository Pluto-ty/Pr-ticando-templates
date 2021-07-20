var dragMeTop = document.getElementById("js-drag-me-top");
var dragMeRight = document.getElementById("js-drag-me-right");
var dragMeDown = document.getElementById("js-drag-me-down");
var dragMeLeft = document.getElementById("js-drag-me-left");

var Draggable = function (elemento) {
   var that = this;
   this.elemento = elemento;
   this.posX = 0;
   this.posY = 0;
   this.top = 0;
   this.left = 0;
   this.refMouseUp = function (event) {
      that.onMouseUp(event);
   };

   this.refMouseMove = function (event) {
      that.onMouseMove(event);
   };

   this.elemento.addEventListener("mousedown", function (event) {
      that.onMouseDown(event);
   });
};

Draggable.prototype.onMouseDown = function (event) {
   this.posX = event.x;
   this.posY = event.y;

   this.elemento.classList.add("dragging");
   window.addEventListener("mousemove", this.refMouseMove);
   window.addEventListener("mouseup", this.refMouseUp);
};

Draggable.prototype.onMouseMove = function (event) {
   var diffX = event.x - this.posX;
   var diffY = event.y - this.posY;
   let valueTop = this.top + diffY;
   let valueLeft = this.left + diffX;

   if (
      this.elemento.classList[1] == "c-top" ||
      this.elemento.classList[1] == "c-bottom"
   ) {
      if (valueTop >= 190) {
         this.elemento.style.top = "190px";
         return;
      }
      if (valueTop <= -5) {
         this.elemento.style.top = "-5px";
         return;
      }
      this.elemento.style.top = valueTop + "px";
   } else {
      if (valueLeft >= 190) {
         this.elemento.style.left = "190px";
         return;
      }
      if (valueLeft <= -5) {
         this.elemento.style.left = "-5px";
         return;
      }
      this.elemento.style.left = valueLeft + "px";
   }
};

Draggable.prototype.onMouseUp = function (event) {
   this.top = parseInt(this.elemento.style.top.replace(/\D/g, "")) || 0;
   this.left = parseInt(this.elemento.style.left.replace(/\D/g, "")) || 0;
   this.elemento.classList.remove("dragging");
   window.removeEventListener("mousemove", this.refMouseMove);
   window.removeEventListener("mouseup", this.refMouseUp);
};

var draggables = document.querySelectorAll(".draggable");
[].forEach.call(draggables, function (draggable, indice) {
   new Draggable(draggable);
});
