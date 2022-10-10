let names = "Josh";
let greeting = "Welcome back ";
let myGreeting = greeting + names
let welcomeEl = document.getElementById("welcome-el")

welcomeEl.innerText = greeting + names


welcomeEl.innerText += "👋"