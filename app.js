const searchBtn = document.getElementById('search-box');
const mealList = document.getElementById('meal');
const mealDetailsContent = document.querySelector('.meal-details-content');
const recipeCloseBtn = document.getElementById('recipe-close-btn');


const getMealList = (() => {
    let searchInputTxt = document.getElementById('search-input').value.trim();
    console.log(searchInputTxt.length);
    fetch(`www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`)
    .then(response => response.json())
    .then(data => { 
        
        console.log(data)

    })
    
})

searchBtn.addEventListener('click', getMealList);
