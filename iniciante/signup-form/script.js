const Form = {
   validation() {
      if (!Form.validationName()) {
         document.getElementById("js-error-name-img").style.display = "block";
         document.getElementById("js-error-name-message").style.display =
            "block";
      } else {
         document.getElementById("js-error-name-img").style.display = "none";
         document.getElementById("js-error-name-message").style.display =
            "none";
      }

      if (!Form.validationEmail()) {
         document.getElementById("js-error-email-img").style.display = "block";
         document.getElementById("js-error-email-message").style.display =
            "block";
         document.getElementById("js-email-field").placeholder =
            "exemplo@exemplo.com";
         document
            .getElementById("js-email-field")
            .classList.add("c-input-email-erro");
         document
            .getElementById("js-email-field")
            .classList.remove("c-input-email");
      } else {
         document.getElementById("js-error-email-img").style.display = "none";
         document.getElementById("js-error-email-message").style.display =
            "none";
         document.getElementById("js-email-field").placeholder =
            "Email Address";
         document
            .getElementById("js-email-field")
            .classList.remove("c-input-email-erro");
         document
            .getElementById("js-email-field")
            .classList.add("c-input-email");
      }

      if (!Form.validationLastName()) {
         document.getElementById("js-error-last-name-img").style.display =
            "block";
         document.getElementById("js-error-last-name-message").style.display =
            "block";
      } else {
         document.getElementById("js-error-last-name-img").style.display =
            "none";
         document.getElementById("js-error-last-name-message").style.display =
            "none";
      }

      if (
         !Form.validationPassword() ||
         Form.validationPassword() == "senha fraca" ||
         Form.validationPassword() == "senha grande demais"
      ) {
         document.getElementById("js-error-password-img").style.display =
            "block";
         document.getElementById("js-error-password-message").style.display =
            "block";
      } else {
         document.getElementById("js-error-password-img").style.display =
            "none";
         document.getElementById("js-error-password-message").style.display =
            "none";
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

   validationName() {
      let name = document.querySelector("#js-name").value;

      var padrao = /[^a-zà-ú]/gi;
      var valida_nome = name.match(padrao);

      if (valida_nome || !name) {
         return false;
      } else {
         return true;
      }
   },

   validationLastName() {
      var padrao = /[^a-zà-ú]/gi;
      let lastName = document.querySelector("#js-last-name").value;
      var valida_sobrenome = lastName.match(padrao);
      if (valida_sobrenome || !lastName) {
         return false;
      } else {
         return true;
      }
   },

   validationPassword() {
      let p = document.getElementById("js-password-input").value;
      var retorno = false;
      var letrasMaiusculas = /[A-Z]/;
      var letrasMinusculas = /[a-z]/;
      var numeros = /[0-9]/;
      var caracteresEspeciais = /[!|@|.|#|$|%|^|&|*|(|)|-|_]/;
      if (p.length < 3) {
         return "senha fraca";
      }
      if (p.length > 16) {
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
