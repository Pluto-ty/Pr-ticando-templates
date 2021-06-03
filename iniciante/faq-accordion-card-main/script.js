function aswer(id, idp) {
   let res = document.getElementById(id);
   let p = document.getElementById(idp);

   if (res.style.display == "block")
      (res.style.display = "none"), (p.style.fontWeight = "normal");
   else (res.style.display = "block"), (p.style.fontWeight = "bold");
}
