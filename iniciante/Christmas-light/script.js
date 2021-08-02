document.getElementById("on").addEventListener("click", function () {
   let sphere = document.querySelectorAll(".c-sphere");
   for (let i of sphere) {
      let name = i.className;
      if (name.indexOf("on") != -1) {
         return;
      } else {
         i.classList.add("on");
      }
   }
});

document.getElementById("of").addEventListener("click", function () {
   let sphere = document.querySelectorAll(".c-sphere");
   for (let i of sphere) {
      let name = i.className;
      if (name.indexOf("on") != -1) {
         i.classList.remove("on");
      } else {
         return;
      }
   }
});

function run() {
   let sphere = document.querySelectorAll(".c-sphere");
   for (let i of sphere) {
      i.style.animationDuration = `${
         document.getElementById("speed-value").value
      }s`;
   }
}

document.getElementById("of").addEventListener("click", function () {});
