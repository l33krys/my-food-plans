/* const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";
document.querySelector("body").appendChild(h2); */

const button = document.getElementById('btn');
button.addEventListener("click", function() {
    document.getElementById('answer').innerHTML = "Surprise!";
    document.getElementById('answer').style.visibility = "visible";
})


