var pizza = JSON.parse(localStorage.pizza);


var crustContainer = document.getElementById("crustContainer");
var sauceContainer = document.getElementById("sauceContainer");
var toppingContainer = document.getElementById("toppingContainer");
var summary = document.getElementById("summary");
var price = 0;

if(pizza.crust = "thin"){
       price += 1;
       var costageCrust = 1
}else{
      price += 2;
       var costageCrust = 2;
}
if(pizza.sauce = "tomato"){
        price += 2;
         var costageSauce = 2;
}else{
       price += 3;  
       var costageSauce = 3;
}

var crustCard = document.createElement("div");
crustCard.innerHTML = `<div class="card" style="width: 10rem; display:inline-block;">
                <img src="./assets/img/customize/crust/${pizza.crust.toLowerCase()}.jpeg" class="card-img-top" alt="..." height="120px;"/>
                <div class="card-body">
                  <h5 class="card-title text-capitalize" >${pizza.crust} Crust ${costageCrust}$</h5>
                  
                </div>
                </div>`;
crustContainer.appendChild(crustCard);

var sauceCard = document.createElement("div");
sauceCard.innerHTML = `<div class="card" style="width: 10rem; display:inline-block;">
                <img src="./assets/img/customize/sauce/${pizza.sauce.toLowerCase()}.jpeg" class="card-img-top" alt="..." height="120px;"/>
                <div class="card-body">
                  <h5 class="card-title text-capitalize" >${
                    pizza.sauce
                  } Sauce ${costageSauce}$</h5>
                  
                </div>
                </div>`;
sauceContainer.appendChild(sauceCard);

pizza.toppings.forEach(item => {
       var toppingCard = document.createElement("div");
       toppingCard.style.display = "inline-block";
       toppingCard.innerHTML = `<div class="card" style="width: 10rem; display:inline-block;">
                <img src="./assets/img/customize/toppings/${item.toLowerCase()}.jpeg" class="card-img-top" alt="..." height="120px;"/>
                <div class="card-body">
                  <h5 class="card-title text-capitalize" >${
                    item
                  } 1$</h5>
                  
                </div>
                </div>`;
       toppingContainer.appendChild(toppingCard);
      
});

pizza.toppings.map((item)=>{
 price+=1;
})


console.log(price);
summary.innerHTML = `A ${pizza.crust} crust pizza with ${pizza.sauce} sauce and ${pizza.toppings}`;

document.getElementById("advancedPrice").innerHTML=price+"$ + TAX";
