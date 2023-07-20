/* const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";
document.querySelector("body").appendChild(h2); */

// Today's meal
const button = document.getElementById('btn');
button.addEventListener("click", function() {
    document.getElementById('answer').innerHTML = dailyMeal; // Assign today's meal
    document.getElementById('answer').style.visibility = "visible"; // Make visible when clicked
})

const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const meals = {
    Sunday: "Baked Spaghetti",
    Monday: "Carnitas Tacos",
    Tuesday: "Sweet and Sour Shrimp",
    Wednesday: "Stuffed Salmon",
    Thursday: "Leftovers",
    Friday: "DoorDash",
    Saturday: "Tri Tip",
}

// Identify daily meal
let dayPosition = new Date().getDay(); // Chained new Date() and .getDay(); Create date object and position in week
let whatDayItIs = dayOfWeek[dayPosition]; // Use position in week to get day of week
let dailyMeal = meals[whatDayItIs]; // Use day of week to get that day's meal

// Toggle full menu from visible to hidden
const fullMenu = document.getElementById('toggle'); // Assign element to variable for evaluation
fullMenu.addEventListener("click", function() {
    if (fullMenu.innerHTML === "View full menu") {
        fullMenu.innerHTML = "Hide full menu"; // Change text to hide so that next click will hide items
        const menuMeals = document.getElementsByClassName('menu');
        // For item in object used here to access menu item individually
        for (const dish of menuMeals) {
            dish.style.visibility = 'visible';
        }
    } else if (fullMenu.innerHTML === "Hide full menu") {
        fullMenu.innerHTML = "View full menu";  // Change text to view so that next click will show items
        const menuMeals = document.getElementsByClassName('menu');
        // For item in object used here to access menu item individually
        for (const dish of menuMeals) {
            dish.style.visibility = 'hidden';
        }    
    }
}
)