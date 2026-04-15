let foods = [];
let portions = [];

function refreshIndicator(id, value) {
  document.getElementById(id).textContent = Math.ceil(value);
}

function refreshIndicators() {
  let kcal = 0;
  let proteins = 0;
  let fat = 0;
  let carbs = 0;
  let fibers = 0;
  let alcohol = 0;
  for (let portion of portions) {
    kcal += portion.foodElement.Kcal * portion.quantity / 100
    proteins += portion.foodElement.Protéines * portion.quantity / 100
    fat += portion.foodElement.Lipides * portion.quantity / 100
    carbs += portion.foodElement.Glucides * portion.quantity / 100
    fibers += portion.foodElement.Fibres * portion.quantity / 100
    alcohol += portion.foodElement.Alcool * portion.quantity / 100
  }
  refreshIndicator("kcal", kcal);
  refreshIndicator("proteins", proteins);
  refreshIndicator("fat", fat);
  refreshIndicator("carbs", carbs);
  refreshIndicator("fibers", fibers);
  refreshIndicator("alcohol", alcohol);
}

document.addEventListener("DOMContentLoaded", () => {
  fetch("./data.json")
    .then((resp) => resp.json())
    .then((json) => {
      foods = json;
      const datalist = document.getElementById("food-list");
      
      for (let food of foods) {
        const option = document.createElement("option");
        option.value = food.Aliment;
        datalist.appendChild(option);
      }

    });

  document.getElementById("food-form").addEventListener("submit", (event) => {
    event.preventDefault();

    const food = document.getElementById("food-input").value;
    const quantity = document.getElementById("food-quantity").value;

    foodDetails = foods.filter(f => f.Aliment === food)
    if (foodDetails && foodDetails.length > 0) {
      const foodElement = foodDetails[0]
      portions.push({foodElement, quantity})
    }

    refreshIndicators()
  });
});
