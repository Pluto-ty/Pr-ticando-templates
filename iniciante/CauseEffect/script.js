const people = {
   thyago: {
      name: "Thyago",
      street: "Barcelona",
      city: "São Francisco",
      state: "Nova York",
      country: "United State",
   },
   eric: {
      name: "Eric",
      street: "Muçuara",
      city: "Belo Horizonte",
      state: "Minas",
      country: "Brazil",
   },
   tefe: {
      name: "Steffany",
      street: "Minas Gerais",
      city: "Serra",
      state: "Rio de Janeiro",
      country: "Brazil",
   },
   pam: {
      name: "Pamela",
      street: "Guaçira",
      city: "Serra",
      state: "Goias",
      country: "Brasil",
   },
   moon: {
      name: "Moon/Yukari",
      street: "Abi",
      city: "Carapina",
      state: "Espiríto Santo",
      country: "Arganrina",
   },
   ronaldo: {
      name: "Ronaldo",
      street: "Curupira",
      city: "Jonh Vale",
      state: "Rio Grande do Sul",
      country: "America Latina",
   },
};

let names = document.querySelectorAll(".names");

for (let value of names) {
   value.addEventListener("click", () => {
      for (let i of names) {
         i.classList.remove("selected");
      }
      value.classList.add("selected");
      let name = String(value.innerHTML.toLowerCase());

      if (name == "ronaldo") {
         document.getElementById(
            "js-result-name"
         ).innerHTML = `Nome: ${people.ronaldo.name}`;

         document.getElementById(
            "js-result-street"
         ).innerHTML = `Rua: ${people.ronaldo.street}`;
         document.getElementById(
            "js-result-city"
         ).innerHTML = `Cidade: ${people.ronaldo.city}`;
         document.getElementById(
            "js-result-state"
         ).innerHTML = `Estado: ${people.ronaldo.state}`;
         document.getElementById(
            "js-result-country"
         ).innerHTML = `País: ${people.ronaldo.country}`;
      } else if (name == "tefe") {
         document.getElementById(
            "js-result-name"
         ).innerHTML = `Nome: ${people.tefe.name}`;

         document.getElementById(
            "js-result-street"
         ).innerHTML = `Rua: ${people.tefe.street}`;
         document.getElementById(
            "js-result-city"
         ).innerHTML = `Cidade: ${people.tefe.city}`;
         document.getElementById(
            "js-result-state"
         ).innerHTML = `Estado: ${people.tefe.state}`;
         document.getElementById(
            "js-result-country"
         ).innerHTML = `País: ${people.tefe.country}`;
      } else if (name == "eric") {
         document.getElementById(
            "js-result-name"
         ).innerHTML = `Nome: ${people.eric.name}`;

         document.getElementById(
            "js-result-street"
         ).innerHTML = `Rua: ${people.eric.street}`;
         document.getElementById(
            "js-result-city"
         ).innerHTML = `Cidade: ${people.eric.city}`;
         document.getElementById(
            "js-result-state"
         ).innerHTML = `Estado: ${people.eric.state}`;
         document.getElementById(
            "js-result-country"
         ).innerHTML = `País: ${people.eric.country}`;
      } else if (name == "pam") {
         document.getElementById(
            "js-result-name"
         ).innerHTML = `Nome: ${people.pam.name}`;

         document.getElementById(
            "js-result-street"
         ).innerHTML = `Rua: ${people.pam.street}`;
         document.getElementById(
            "js-result-city"
         ).innerHTML = `Cidade: ${people.pam.city}`;
         document.getElementById(
            "js-result-state"
         ).innerHTML = `Estado: ${people.pam.state}`;
         document.getElementById(
            "js-result-country"
         ).innerHTML = `País: ${people.pam.country}`;
      } else if (name == "moon") {
         document.getElementById(
            "js-result-name"
         ).innerHTML = `Nome: ${people.moon.name}`;

         document.getElementById(
            "js-result-street"
         ).innerHTML = `Rua: ${people.moon.street}`;
         document.getElementById(
            "js-result-city"
         ).innerHTML = `Cidade: ${people.moon.city}`;
         document.getElementById(
            "js-result-state"
         ).innerHTML = `Estado: ${people.moon.state}`;
         document.getElementById(
            "js-result-country"
         ).innerHTML = `País: ${people.moon.country}`;
      } else if (name == "thyago") {
         document.getElementById(
            "js-result-name"
         ).innerHTML = `Nome: ${people.thyago.name}`;

         document.getElementById(
            "js-result-street"
         ).innerHTML = `Rua: ${people.thyago.street}`;
         document.getElementById(
            "js-result-city"
         ).innerHTML = `Cidade: ${people.thyago.city}`;
         document.getElementById(
            "js-result-state"
         ).innerHTML = `Estado: ${people.thyago.state}`;
         document.getElementById(
            "js-result-country"
         ).innerHTML = `País: ${people.thyago.country}`;
      }
   });
}
