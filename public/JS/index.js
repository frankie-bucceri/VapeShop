// const fs= require('fs')

//Verify user's age
function ageVerify() {
    var age = prompt("Please enter your age:");
    if (age > 17) alert("Welcome!")
    else {
        alert("since you are under 18, you are not permitted on this website.");
        document.location = "http://www.google.com"
    }
}
// ageVerify();


const createCards = (flavorsArr) => {
    const parent = document.getElementById('append-here');

    flavorsArr.forEach((flavorObj) => {
        const container = document.createElement('div');
        container.classList.add('testStuff');
        container.innerText = flavorObj.flavor

        const flavorImg = document.createElement('img');
        flavorImg.src = flavorObj.img;
        flavorImg.classList.add('test-image');

        container.appendChild(flavorImg);

        parent.appendChild(container)
    })
}
// createCards(flavorsWithImages)

$.ajax({
    url: 'http://localhost:8001/flavors',
    method: 'GET',
    success: function (flavors) {
        createCards(flavors);
    }
})
//logout
function logout() {
    location.replace('./login.html');
}