const createCards = (batteriesArr) => {
    const parent = document.getElementById('append-here');

    batteriesArr.forEach((batteriesObj) => {
        const container = document.createElement('div');
        container.classList.add('testStuff');
        container.innerText = batteriesObj.name;

        const batteriesImg = document.createElement('img');
        batteriesImg.src = batteriesObj.img;
        batteriesImg.classList.add('test-image');

        container.appendChild(batteriesImg);
        const addToCartBtn = document.createElement('button');
        addToCartBtn.innerText = 'Add to cart';
        addToCartBtn.onclick = () => addToCart(batteriesObj)

        const actionBtnContainer = document.createElement('div');
        actionBtnContainer.style = 'width: 100%; display: flex; flex-driection: row; justify-content: space-around; padding-top: 5px; padding-bottom: 5px; background-color: rgba(0,0,0,0.4);';

        const removeFromCartBtn = document.createElement('button');
        removeFromCartBtn.innerText = 'Remove';
        removeFromCartBtn.onclick = () => removeFromCart(batteriesObj)

        const actionBtnContainer2 = document.createElement('div');
        actionBtnContainer2.style = 'width: 100%; display: flex; flex-driection: row; justify-content: space-around; padding-top: 5px; padding-bottom: 5px; background-color: rgba(0,0,0,0.4);';

        actionBtnContainer.appendChild(addToCartBtn)
        actionBtnContainer.appendChild(removeFromCartBtn)

        container.appendChild(actionBtnContainer);

        parent.appendChild(container)
    })

}

$.ajax({
    url: 'http://localhost:8001/batteries',
    method: 'GET',
    success: function (batteries) {
        createCards(batteries);
    }
})

function logout() {
    location.replace('./login.html')
}