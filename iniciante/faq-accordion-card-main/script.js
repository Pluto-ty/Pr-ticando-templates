function aswer(resposta) {
   document.getElementById("as1").style.display = "none";
   document.getElementById("as2").style.display = "none";
   document.getElementById("as3").style.display = "none";
   document.getElementById("as4").style.display = "none";
   document.getElementById("as5").style.display = "none";

   if (document.getElementById(resposta).style.display == "block") {
      document.getElementById(resposta).style.display = "none";
      document.getElementById(resposta).style.height = "0";
   } else {
      document.getElementById(resposta).style.display = "block";
      document.getElementById(resposta).style.height = "100%";
   }
}
