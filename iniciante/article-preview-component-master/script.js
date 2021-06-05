function shareOn(id, id2) {
   let verify = getComputedStyle(document.getElementById(id)).getPropertyValue(
      "display"
   );

   let verifyDisplay = getComputedStyle(
      document.getElementById(id2)
   ).getPropertyValue("display");

   let verifyDevice = getComputedStyle(
      document.getElementById(id2)
   ).getPropertyValue("position");

   let element = document.getElementById(id);
   let element2 = document.getElementById(id2);

   // primeiro verificar se não já esta invisível e se está ná versão desktop que o share está em position absolute.
   // Se sim mostrar o share na versão desktop.
   // Se não tiver em position absolute então está na versão mobile e mostrar o share da versão mobile.
   if ((verifyDisplay == "none") & (verifyDevice == "absolute")) {
      element2.style.display = "flex";
   } else if ((verify != "none") & (verifyDevice != "absolute")) {
      element.style.display = "none";
      element2.style.display = "flex";
   }
}

function shareOf(id, id2) {
   let element = document.getElementById(id);
   let element2 = document.getElementById(id2);

   if (element.style.display == "flex")
      (element.style.display = "none"), (element2.style.display = "flex");
}

// console.log(element);
