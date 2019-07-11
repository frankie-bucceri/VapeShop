const createCards = (modsArr) => {
    const parent = document.getElementById('append-here');

    modsArr.forEach((modObj) => {
        const container = document.createElement('div');
        container.classList.add('testStuff');
        container.innerText = modObj.name;

        const modImg = document.createElement('img');
        modImg.src = modObj.img;
        modImg.classList.add('test-image');

        container.appendChild(modImg);
        const addToCartBtn = document.createElement('button');
        addToCartBtn.innerText = 'Add to cart';
        addToCartBtn.onclick = () => addToCart(modObj)

        const actionBtnContainer = document.createElement('div');
        actionBtnContainer.style = 'width: 100%; display: flex; flex-driection: row; justify-content: space-around; padding-top: 5px; padding-bottom: 5px; background-color: rgba(0,0,0,0.4);';

        const removeFromCartBtn = document.createElement('button');
        removeFromCartBtn.innerText = 'Remove';
        removeFromCartBtn.onclick = () => removeFromCart(modObj)

        const actionBtnContainer2 = document.createElement('div');
        actionBtnContainer2.style = 'width: 100%; display: flex; flex-driection: row; justify-content: space-around; padding-top: 5px; padding-bottom: 5px; background-color: rgba(0,0,0,0.4);';

        actionBtnContainer.appendChild(addToCartBtn)
        actionBtnContainer.appendChild(removeFromCartBtn)

        container.appendChild(actionBtnContainer);

        parent.appendChild(container)
    })

}


$.ajax({
    url: 'http://localhost:8001/mods',
    method: 'GET',
    success: function (mods) {
        createCards(mods);
    }
})
// logout
function logout() {
    location.replace('./login.html')
}