const container = document.querySelector(".container")
const coffees = [
    { name: "Latte", image: "images/coffee1.jpg" },
    { name: "Black Coffee", image: "images/coffee2.jpg" },
    { name: "Choco Coffee", image: "images/coffee3.jpg" },
    { name: "Cappuccino", image: "images/coffee4.jpg" },
    { name: "Hot Cream Coffee", image: "images/coffee5.jpg" },
    { name: "Milk Coffee", image: "images/coffee6.jpg" },
    { name: "Ice Coffee", image: "images/coffee7.jpg" },
    { name: "Espresso", image: "images/coffee8.jpg" },
    { name: "Total Black Coffee", image: "images/coffee9.jpg" },
]

const showCoffees = () => {
    let output = ""
    coffees.forEach(
        ({ name, image }) =>
        (output += `
                <div class="card">
                    <img class="card--avatar" src=${image} />
                    <h1 class="card--title">${name}</h1>
                    <a class="card--link" href="#">Taste</a>
                </div>       
                `)
    )
    container.innerHTML = output
}

document.addEventListener("DOMContentLoaded", showCoffees);

if ("serviceworker" in navigator) {
    window.addEventListener("load", function() {
        navigator.serviceworker
        .register("/serviceworker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("servicer worker not registered", err));
  });
}