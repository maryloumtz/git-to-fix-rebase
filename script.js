let foods = [];

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
    console.log(food);
    console.log(quantity)
  });
});
