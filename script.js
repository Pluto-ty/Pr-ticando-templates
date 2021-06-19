const Show = {
   showP() {
      let principalProjects = document.querySelector("#js-principal-projects");
      if (principalProjects.classList.contains("on") != true) {
         document.querySelector("#js-principal-projects").classList.add("on");
         document.querySelector("#js-newbie-projects").classList.remove("on");
      }
   },
   ShowI() {
      let newbieProjects = document.querySelector("#js-newbie-projects");
      if (newbieProjects.classList.contains("on") != true) {
         document
            .querySelector("#js-principal-projects")
            .classList.remove("on");
         document.querySelector("#js-newbie-projects").classList.add("on");
      }
   },
};

document.querySelector("#items").addEventListener("wheel", (event) => {
   // alert("test");
   if (event.deltaY > 0) {
      document.querySelector("#items").scrollBy(800, 0);
   } else {
      document.querySelector("#items").scrollBy(-800, 0);
   }
});

document.querySelector("#items2").addEventListener("wheel", (event) => {
   // alert("test");
   if (event.deltaY > 0) {
      document.querySelector("#items2").scrollBy(800, 0);
   } else {
      document.querySelector("#items2").scrollBy(-800, 0);
   }
});
