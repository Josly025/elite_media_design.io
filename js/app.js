const meals = document.getElementById("meals");
const nav = document.getElementById("nav");
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
        (meal) =>
          (render += `
        
<div  class="uk-card uk-card-default uk-card-body uk-grid-margin ">
    
 <div class="uk-card-media-top">
        <img
          class="dash__image uk-margin-medium-top"
          src="${meal.strCategoryThumb}"
          alt=""
        />
      </div>
      <div class="uk-card-body">
        <h3 class="uk-card-title dash__title--product cat__title">${meal.strCategory}</h3>
      </div>
    
        <button uk-toggle="target: #my-id"
          class="uk-button uk-button-default uk-margin-medium-bottom dash__cartBtn"
        >
          Description
        </button>
          <p id="my-id"  >${meal.strCategoryDescription}</p>
</div>



     
            
      `)
      );
      meals.innerHTML = render;
    });
}

function responsivenss() {
  if (nav.className === "res__nav") {
    nav.className += " responsive";
  } else {
    nav.className = "res__nav";
  }
}
