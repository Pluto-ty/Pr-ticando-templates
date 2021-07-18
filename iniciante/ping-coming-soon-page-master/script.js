function emailValidation() {
   let field = document.getElementById("js-input");
   usuario = field.value.substring(0, field.value.indexOf("@"));
   dominio = field.value.substring(
      field.value.indexOf("@") + 1,
      field.value.length
   );

   if (
      usuario.length >= 1 &&
      dominio.length >= 3 &&
      usuario.search("@") == -1 &&
      dominio.search("@") == -1 &&
      usuario.search(" ") == -1 &&
      dominio.search(" ") == -1 &&
      dominio.search(".") != -1 &&
      dominio.indexOf(".") >= 1 &&
      dominio.lastIndexOf(".") < dominio.length - 1
   ) {
      document.getElementById("js-error-message").style.display = "none";
      document.getElementById("js-input").style.borderColor =
         "hsl(223, 100%, 88%)";
      document.getElementById("js-input").classList.add("blue");
      document.getElementById("js-input").classList.remove("black");
      document.getElementById("js-input").placeholder = "Your email address";
   } else {
      document.getElementById("js-error-message").style.display = "block";
      document.getElementById("js-input").style.borderColor = "red";
      document.getElementById("js-input").placeholder = "exemple@email/com";
      document.getElementById("js-input").classList.remove("blue");
      document.getElementById("js-input").classList.add("black");
   }
}
