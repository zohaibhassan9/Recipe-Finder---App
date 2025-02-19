const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const recipeContainer = document.getElementById('recipeContainer');
const savedRecipes = document.getElementById('savedRecipes');

const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

async function searchRecipes(){
    const query = searchInput.ariaValueMax.trim();

    if(!query) return alert('Please enter a recipe name');

    recipeContainer.innerHTML = "loadig";
    const response =  await fetch(API_URL + query);
    const data = response.json();

    displayRecipes(data.meals);
}

function displayRecipes(meals){
if(!meals){
recipeContainer.innerHTML = '<p>No recipe found</p>';
return;
}






}

