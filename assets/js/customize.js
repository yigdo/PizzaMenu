var pizza = {
  crust: "thin",
  sauce: "tomato",
  toppings: [],
};
function pizzaAddSuccess() {
  document.getElementById("alert").style.display = "block";
  setTimeout(()=>{document.getElementById("alert").style.display = "none"},1000);
   
}
function addPizzaCrust(element) {
  pizza.crust = element;
  pizzaAddSuccess();
  localStorage.pizza = JSON.stringify(pizza);
}
function addPizzaSauce(element) {
  pizza.sauce = element;
  pizzaAddSuccess();
  localStorage.pizza = JSON.stringify(pizza);
}
function addPizzaToppings(element) {
  pizza.toppings.push(element);
  pizzaAddSuccess();
  localStorage.pizza = JSON. stringify(pizza);
}
function emptyBucket(){
  pizza.crust = "thin";
  pizza.sauce = "tomato";
  pizza.toppings = [];

  localStorage.pizza = "";
}


