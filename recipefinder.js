const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const recipeContainer = document.getElementById('recipeContainer');
const savedRecipes = document.getElementById('savedRecipes');

const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

async function searchRecipes(){
    const query = searchInput.value.trim();

    if(!query) return alert('Please enter a recipe name');

    recipeContainer.innerHTML = "Loadig...";
    const response =  await fetch(API_URL + query);
    const data = await response.json();

    displayRecipes(data.meals);
}

function displayRecipes(meals){
if(!meals){
recipeContainer.innerHTML = '<p>No recipe found</p>';
return;
}
recipeContainer.innerHTML = meals.map(meal=>`
    <div class = "card">
    <h2>${meal.strMeal}</h2>
    <img src = "${meal.strMealThumb}" alt="${meal.strMeal}">
    <p><strong>Category: </strong>${meal.strCategory}</p>
    <p><strong>Instructions: </strong>${meal.strInstructions}</p>

    </div>
    `
   ).join('');

}

searchBtn.addEventListener('click', searchRecipes);



