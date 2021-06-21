function convert() {
   const binary = document.getElementById("js-binary-number").value;
   if (binary === "") return alert("Por favor, coloque um número binário");
   binary.split("").map((char) => {
      if (char !== "0" && char !== "1")
         return alert("Por favor, coloque um número binário");
   });
   const decimal = parseInt(binary, 2);
   document.getElementById("js-decimal-number").value = decimal;
   return true;
}
