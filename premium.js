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

// createCards();
$.ajax({
    url: 'http://localhost:8001/premium',
    method: 'GET',
    success: function (flavors) {
        createCards(flavors);
    }
})

//logout();
function logout() {
    location.replace("./login.html");
}