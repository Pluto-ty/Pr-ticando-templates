let timeInterval;
let timeIntervalCheck = false;

const countDownTimer = {
   countDown: function () {
      if (countDownTimer.verify()) {
         let FutureDate = countDownTimer.futureDateCalc();
         let currentTime = new Date();
         if (FutureDate < currentTime) {
            console.log(FutureDate);
            console.log("Errado");
            return;
         }

         let checkButton = document.getElementById("js-button-start").innerHTML;
         if (checkButton == "Start") {
            document.getElementById("js-button-start").innerHTML = "Stop";
            countDownTimer.startCountDown();
         } else if (checkButton == "Stop") {
            document.getElementById("js-button-start").innerHTML = "Start";
            countDownTimer.stopCountDown();
         }
      } else {
         alert("Digite o nome para o Evento");
      }
   },
   verify: () => {
      let name = document.getElementById("js-name").value;
      let date = document.getElementById("js-date").value;

      if (name != "" && date != "") {
         return true;
      } else {
         return false;
      }
   },
   startCountDown: () => {
      let FutureDate = countDownTimer.futureDateCalc();

      let currentTime = new Date();
      let totalSeconds = (FutureDate - currentTime) / 1000;
      if (totalSeconds < 0) {
         console.log("Cabou");
         countDownTimer.stopCountDown();
         return;
      }

      let months = Math.floor(totalSeconds / 3600 / 24 / 30);
      let days = Math.floor(totalSeconds / 3600 / 24);
      let hours = Math.floor(totalSeconds / 3600) % 24;
      let minutes = Math.floor(totalSeconds / 60) % 60;
      let seconds = Math.floor(totalSeconds % 60);

      document.getElementById(
         "js-time-counter"
      ).innerHTML = `${months}m ${days}d ${hours}h ${minutes}m ${seconds}s`;

      if (timeIntervalCheck == false) {
         timeInterval = setInterval(() => {
            countDownTimer.startCountDown();
         }, 1000);
         document.querySelectorAll("input").forEach((input) => {
            input.readOnly = true;
         });
         timeIntervalCheck = true;
      }
   },
   stopCountDown: () => {
      clearInterval(timeInterval);
      timeIntervalCheck = false;
      document.querySelectorAll("input").forEach((input) => {
         input.readOnly = false;
      });
   },
   futureDateCalc: () => {
      let name = document.getElementById("js-name").value;
      let hoursMinInput = document.getElementById("js-time").value;
      let dateInput = document.getElementById("js-date").value.split("-");
      document.getElementById("js-eventName").innerHTML = name;

      let FutureDate;
      if (hoursMinInput != "") {
         hoursMinInput.split(":");
         console.log(hoursMinInput);
         FutureDate = new Date(
            `${dateInput[0]}-${dateInput[1]}-${dateInput[2]}T${hoursMinInput[1]}:${hoursMinInput[0]}:00`
         );
      } else {
         FutureDate = new Date(
            ` ${dateInput[1]} ${Number(dateInput[2])} ${dateInput[0]}`
         );
      }
      return FutureDate;
   },
};

document.getElementById("js-button-start").addEventListener("click", () => {
   countDownTimer.countDown();
});

// document.getElementById("js-save").addEventListener("")
