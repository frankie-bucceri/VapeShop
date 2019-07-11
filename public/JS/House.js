const createCards = (houseArr) => {
    const parent = document.getElementById('append-here');

    houseArr.forEach((houseObj) => {
        const container = document.createElement('div');
        container.classList.add('testStuff');
        container.innerText = houseObj.name

        const houseImg = document.createElement('img');
        houseImg.src = houseObj.img;
        houseImg.classList.add('test-image');

        container.appendChild(houseImg);
        const addToCartBtn = document.createElement('button');
        addToCartBtn.innerText = 'Add to cart';
        addToCartBtn.onclick = () => addToCart(houseObj)

        const actionBtnContainer = document.createElement('div');
        actionBtnContainer.style = 'width: 100%; display: flex; flex-driection: row; justify-content: space-around; padding-top: 5px; padding-bottom: 5px; background-color: rgba(0,0,0,0.4);';

        const removeFromCartBtn = document.createElement('button');
        removeFromCartBtn.innerText = 'Remove';
        removeFromCartBtn.onclick = () => removeFromCart(houseObj)

        const actionBtnContainer2 = document.createElement('div');
        actionBtnContainer2.style = 'width: 100%; display: flex; flex-driection: row; justify-content: space-around; padding-top: 5px; padding-bottom: 5px; background-color: rgba(0,0,0,0.4);';

        actionBtnContainer.appendChild(addToCartBtn)
        actionBtnContainer.appendChild(removeFromCartBtn)

        container.appendChild(actionBtnContainer)


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