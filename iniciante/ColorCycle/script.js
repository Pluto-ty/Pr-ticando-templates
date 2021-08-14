function colorCycle() {
   document.querySelector(".btn").classList.toggle("btn-start");
   document.querySelector(".btn").classList.toggle("btn-stop");
   let test = document.querySelector(".btn").classList;
   if (test != -1) {
   }
   console.log(test.indexOf("btn-start"));
}
