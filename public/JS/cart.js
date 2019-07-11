
const createCards = (flavorsArr) => {
    const parent = document.getElementById('append-here');

    flavorsArr.forEach((flavorObj) => {
        const container = document.createElement('div');
        container.classList.add('testStuff');
        container.innerText = flavorObj.name

        const flavorImg = document.createElement('img');
        flavorImg.src = flavorObj.img;
        flavorImg.classList.add('test-image');

        const addToCartBtn = document.createElement('button');
        addToCartBtn.innerText = '+';
        addToCartBtn.onclick = () => addToCart(flavorObj)

        const actionBtnContainer = document.createElement('div');
        actionBtnContainer.style = 'width: 100%; display: flex; flex-driection: row; justify-content: space-around; padding-top: 5px; padding-bottom: 5px; background-color: rgba(0,0,0,0.4);';


        const removeFromCartBtn = document.createElement('button');
        removeFromCartBtn.innerText = '-';
        removeFromCartBtn.onclick = () => removeFromCart(flavorObj)

        const actionBtnContainer2 = document.createElement('div');
        actionBtnContainer2.style = 'width: 100%; display: flex; flex-driection: row; justify-content: space-around; padding-top: 5px; padding-bottom: 5px; background-color: rgba(0,0,0,0.4);';
        actionBtnContainer.appendChild(addToCartBtn)
        actionBtnContainer.appendChild(removeFromCartBtn)
        // actionBtnContainer2.appendChild(removeFromCartBtn)

        container.appendChild(flavorImg);
        container.appendChild(actionBtnContainer)
        
        // container.appendChild(addToCartBtn)
        parent.appendChild(container)

    })
}

cart = getCartFromStorage();
console.log(cart)

createCards(cart)

//logout
function logout() {
    location.replace('./login.html');
}