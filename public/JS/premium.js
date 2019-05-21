const createCards = (premiumArr) => {
    const parent = document.getElementById('append-here');

    premiumArr.forEach((premiumObj) => {
        const container = document.createElement('div');
        container.classList.add('testStuff');
        container.innerText = premiumObj.premium

        const premiumImg = document.createElement('img');
        premiumImg.src = premiumObj.img;
        premiumImg.classList.add('test-image');

        container.appendChild(premiumImg);

        parent.appendChild(container)
    })

}

// createCards();
$.ajax({
    url: 'http://localhost:8001/premium',
    method: 'GET',
    success: function (premium) {
        createCards(premium);
    }
})

//logout();
function logout() {
    location.replace("./login.html");
}