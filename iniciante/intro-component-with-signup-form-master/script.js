const Form = {
   validation() {
      if (!Form.validationEmail()) {
         console.log("email inválido");
      } else {
         console.log("email.válido");
      }
   },
   validationEmail() {
      field = document.getElementById("js-email-field");
      if (field == null) {
         field = "";
      }
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
         // document.getElementById("js-error-message").style.display = "none";
         // document.getElementById("js-error-img").style.display = "none";
         return true;
      } else {
         // document.getElementById("js-error-message").style.display = "block";
         // document.getElementById("js-error-img").style.display = "block";
         return false;
      }
   },

   validaçãoNames() {
      let name = document.querySelector("#js-name").value;
      let lastName = document.querySelector("#js-last-name");
      var padrao = /[^a-zà-ú]/gi;
      var valida_nome = name.match(padrao);
      var valida_sobrenome = lastName.match(padrao);
      if (valida_nome || !nome) {
         return false;
      } else {
         return true;
      }
   },

   validaçãoSenha(p) {
      var retorno = false;
      var letrasMaiusculas = /[A-Z]/;
      var letrasMinusculas = /[a-z]/;
      var numeros = /[0-9]/;
      var caracteresEspeciais = /[!|@|#|$|%|^|&|*|(|)|-|_]/;
      if (p.length < 3) {
         return "senha fraca";
      }
      if (p.length < 16) {
         return "senha grande demais";
      }
      var auxMaiuscula = 0;
      var auxMinuscula = 0;
      var auxNumero = 0;
      var auxEspecial = 0;
      for (var i = 0; i < p.length; i++) {
         if (letrasMaiusculas.test(p[i])) auxMaiuscula++;
         else if (letrasMinusculas.test(p[i])) auxMinuscula++;
         else if (numeros.test(p[i])) auxNumero++;
         else if (caracteresEspeciais.test(p[i])) auxEspecial++;
      }
      if (auxMaiuscula > 0) {
         if (auxMinuscula > 0) {
            if (auxNumero > 0) {
               if (auxEspecial) {
                  retorno = true;
               }
            }
         }
      }
      return retorno;
   },
};
