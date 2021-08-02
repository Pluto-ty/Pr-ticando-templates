let value1 = "";
let value2 = "";
let Actualoperation = "";
let nextValue = false;
let total = 0;

function clearLastWord() {
   if (Actualoperation != "" && value2 == "") {
      Actualoperation = "";
      nextValue = false;
   } else {
      let string = document.getElementById("js-input").value;
      document.getElementById("js-input").value = string.substring(
         0,
         string.length - 1
      );
      value1 = document.getElementById("js-input").value;
   }
}

function clearAll() {
   value1 = 0;
   value2 = 0;
   Actualoperation = "";
   document.getElementById("js-input").value = "0";
   nextValue = false;
   total = 0;
}

function writeValue(value) {
   if (nextValue == false) {
      let valueInput = document.getElementById("js-input").value;
      let valueCliqued = value.innerHTML;
      if (valueCliqued == "+/-") {
         if (valueInput != "") {
            document.getElementById("js-input").value =
               parseInt(valueInput) * -1;
         } else {
            return;
         }
      } else {
         if (document.getElementById("js-input").value.length < 8) {
            if (valueInput == "0") {
               document.getElementById("js-input").value = `${valueCliqued}`;
            } else {
               document.getElementById(
                  "js-input"
               ).value = `${valueInput}${valueCliqued}`;
            }
         } else {
            return;
         }
      }
   } else {
      nextValue = false;

      document.getElementById("js-input").value = "";
      let valueInput = document.getElementById("js-input").value;
      let valueCliqued = value.innerHTML;
      if (valueCliqued == "+/-") {
         if (valueInput != "") {
            document.getElementById("js-input").value =
               parseInt(valueInput) * -1;
            if (
               value1 != "" ||
               value1 - parseInt(document.getElementById("js-input").value) ==
                  0 ||
               value1 + parseInt(document.getElementById("js-input").value) == 0
            ) {
               value1 = parseInt(document.getElementById("js-input").value);
            } else if (value2 != "") {
               value2 = parseInt(document.getElementById("js-input").value);
            }
         } else {
            return;
         }
      } else {
         document.getElementById("js-input").value = valueCliqued;
      }
   }
}

function operation(operationCliqued) {
   if (document.getElementById("js-input").value == "") {
      return;
   } else {
      if (value1 == "") {
         value1 = parseInt(document.getElementById("js-input").value);
      } else if (value2 == "") {
         value2 = parseInt(document.getElementById("js-input").value);
      }

      if (value1 != "" && value2 != "" && Actualoperation != "") {
         if (Actualoperation == "÷") {
            total = parseInt(value1) / parseInt(value2);
         } else if (Actualoperation == "x") {
            total = parseInt(value1) * parseInt(value2);
         } else if (Actualoperation == "-") {
            total = parseInt(value1) - parseInt(value2);
         } else if (Actualoperation == "+") {
            total = parseInt(value1) + parseInt(value2);
         }

         if (String(total.toFixed(2)).length > 8) {
            document.getElementById("js-input").value = "Err";
            nextValue = true;
            value1 = "";
            value2 = "";
            Actualoperation = "";
            return;
         } else {
            document.getElementById("js-input").value = total.toFixed(2);
            value1 = total;
            value2 = "";
            Actualoperation = "";
         }
      }
      Actualoperation = operationCliqued.innerHTML;
      nextValue = true;
   }
}

function result() {
   let actualValue = document.getElementById("js-input").value;
   if (value1 != actualValue || value2 == "") {
      value2 = actualValue;
   }
   if (value1 != "" && value2 != "" && Actualoperation != "") {
      if (Actualoperation == "÷") {
         total = parseInt(value1) / parseInt(value2);
      } else if (Actualoperation == "x") {
         total = parseInt(value1) * parseInt(value2);
      } else if (Actualoperation == "-") {
         total = parseInt(value1) - parseInt(value2);
      } else if (Actualoperation == "+") {
         total = parseInt(value1) + parseInt(value2);
      }
      console.log(total);
      if (String(total.toFixed(2)).length > 8) {
         document.getElementById("js-input").value = "Err";
         nextValue = true;
         value1 = "";
         value2 = "";
         Actualoperation = "";
      } else {
         document.getElementById("js-input").value = total.toFixed(2);
         value1 = total;
         value2 = "";
         Actualoperation = "";
      }
   } else {
      return;
   }
}
