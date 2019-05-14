const createCards = (houseArr) => {
    const parent = document.getElementById('append-here');

    houseArr.forEach((houseObj) => {
        const container = document.createElement('div');
        container.classList.add('testStuff');
        container.innerText = houseObj.house

        const houseImg = document.createElement('img');
        houseImg.src = houseObj.img;
        houseImg.classList.add('test-image');

        container.appendChild(houseImg);

        parent.appendChild(container)
    })
}

// createCards();
$.ajax({
    url: 'http://localhost:8001/house',
    method: 'GET',
    success: function (house) {
        createCards(house);
    }
})

//logout();
function logout() {
    location.replace("./login.html");
}