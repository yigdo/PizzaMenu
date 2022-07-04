var ingredientsLink = document.getElementById("ingredientsLink");
var pricingLink = document.getElementById("pricingLink");

var pricingContainer = document.getElementById("pricing-container");
var ingredientsContainer = document.getElementById("ingredients-container");

pricingContainer.style.display = "none";

function SwitchIngredients(){
       ingredientsLink.classList.add("active");
       pricingLink.classList.remove("active");
       pricingContainer.style.display = "none";
       ingredientsContainer.style.display = "block";
}
function SwitchPricing() {
  ingredientsLink.classList.remove("active");
  pricingLink.classList.add("active");
  pricingContainer.style.display = "block";
  ingredientsContainer.style.display = "none";
}