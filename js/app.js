const meals = document.getElementById("meals");

window.onload = renderMeals();

function renderMeals() {
  fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data.categories);
            let render = "";
            data.categories.map(
              (movie) =>
                (render += `
                <div class="uk-card uk-card-default uk-card-body uk-grid-margin">
      
        </div>
      `
            );
            meals.innerHTML = render;
          });
    });
}
