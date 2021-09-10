let category = 0;

const Show = {
   showP() {
      category = 0;
      let principalProjects = document.querySelector("#items");
      if (principalProjects.classList.contains("on") != true) {
         document.querySelector("#items").classList.add("on");
         document.querySelector("#items2").classList.remove("on");
         return;
      } else {
         return;
      }
   },
   ShowI() {
      category = 1;
      let newbieProjects = document.querySelector("#items2");
      if (newbieProjects.classList.contains("on") != true) {
         document.querySelector("#items").classList.remove("on");
         document.querySelector("#items2").classList.add("on");
      }
   },
};

const arrow = {
   leftArrow: () => {
      if (category == 0) {
         document.querySelector("#items").scrollBy(-1000, 0);
         return;
      }
      if (category == 1) {
         document.querySelector("#items2").scrollBy(-800, 0);
         return;
      }
   },
   rightArrow: () => {
      console.log("test");
      if (category == 0) {
         document.querySelector("#items").scrollBy(1000, 0);
         return;
      }
      if (category == 1) {
         document.querySelector("#items2").scrollBy(1000, 0);
         return;
      }
   },
};
