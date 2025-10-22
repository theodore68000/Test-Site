const boutonsCommander = document.querySelectorAll(".ajouter-panier");
const listePanier = document.getElementById("liste-panier");
const totalAffiche = document.getElementById("total");

let total = 0;

boutonsCommander.forEach(bouton => {
  bouton.addEventListener("click", (event) => {
    const produit = event.target.closest(".produit");
    const nom = produit.querySelector("h3").textContent;
    const prix = parseFloat(produit.querySelector(".prix").textContent);

    const li = document.createElement("li");
    li.textContent = `${nom} — ${prix.toFixed(2)} €`;
    listePanier.appendChild(li);

    total += prix;
    totalAffiche.textContent = `Total : ${total.toFixed(2)} €`;
  });
});
