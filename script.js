/* const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";
document.querySelector("body").appendChild(h2); */

// Today's meal
const button = document.getElementById('btn');
button.addEventListener("click", function() {
    document.getElementById('answer').innerHTML = daily_meal;
    document.getElementById('answer').style.visibility = "visible";
})
const day_of_week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const meals = {
    Sunday: "Baked Spaghetti",
    Monday: "Carnitas Tacos",
    Tuesday: "Sweet and Sour Shrimp",
    Wednesday: "Stuffed Salmon",
    Thursday: "Leftovers",
    Friday: "DoorDash",
    Saturday: "Tri Tip",
}

// let date = new Date();
let day_position = new Date().getDay(); //3
let test = day_of_week[day_position];
let daily_meal = meals[test];

// Toggle full menu from visible to hidden
const full_menu = document.getElementById('toggle');
full_menu.addEventListener("click", function() {
    if (full_menu.innerHTML === "View full menu") {
        full_menu.innerHTML = "Hide full menu";
        const menu_meals = document.getElementsByClassName('menu');
        for (const dish of menu_meals) {
            dish.style.visibility = 'visible';
        }
    } else if (full_menu.innerHTML === "Hide full menu") {
        full_menu.innerHTML = "View full menu";
        const menu_meals = document.getElementsByClassName('menu');
        for (const dish of menu_meals) {
            dish.style.visibility = 'hidden';
        }    
    }
}
)