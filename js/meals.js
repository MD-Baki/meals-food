// const loadMeals = () => {
//     fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish')
//         .then(res => res.json())
//         .then(data => displayMeals(data.meals));
// }
const loadMeals = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals));
}

// Meals গুলুকে ডিসপ্লেতে দেখাতে 
const displayMeals = meals => {

    // HTML div এর সাথে ID দিয়ে লিংক করে
    const mealsContainer = document.getElementById('meal-container');
    // Meals এ নতুন করে সার্চ দিতে চাইলে পুরানো ডাটা ক্লিয়ার করে নতুন ডাটা যোগ করতে
    mealsContainer.innerHTML = ``;

    // Meals এর আইটেম লাইন বাই লাইন পাইতে 
    meals.forEach(meal => {
        console.log(meal);

        // Meals এর মধ্যে Inner-HTML তৈরি করতে চাইলে
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
            <div class="card">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title fs-6 fw-bold">${meal.strMeal}</h5>
                    <p class="card-text fs-6">${meal.strInstructions.slice(0, 150)}</p>
                </div>
            </div>
        `;
        // Inner HTML কে জাবা-স্ক্রিপ্ট এর মাধ্যমে মাল্টিপল ভাবে এড করতে
        mealsContainer.appendChild(mealDiv);
    });
}

const searchFood = () => {
    const searchfield = document.getElementById('search-field');
    const searchText = searchfield.value;
    loadMeals(searchText);
    searchfield.value = '';
}

// loadMeals('a');