const createCards = (tanksArr) => {
    const parent = document.getElementById('append-here');

    tanksArr.forEach((tankObj) => {
        const container = document.createElement('div');
        container.classList.add('testStuff');
        container.innerText = tankObj.tank;

        const tankImg = document.createElement('img');
        tankImg.src = tankObj.img;
        tankImg.classList.add('test-image');

        container.appendChild(tankImg);
        const addToCartBtn = document.createElement('button');
        addToCartBtn.innerText = 'Add to cart';
        addToCartBtn.onclick = () => addToCart(tankObj)

        const actionBtnContainer = document.createElement('div');
        actionBtnContainer.style = 'width: 100%; display: flex; flex-driection: row; justify-content: space-around; padding-top: 5px; padding-bottom: 5px; background-color: rgba(0,0,0,0.4);';

        const removeFromCartBtn = document.createElement('button');
        removeFromCartBtn.innerText = 'Remove';
        removeFromCartBtn.onclick = () => removeFromCart(tankObj)

        const actionBtnContainer2 = document.createElement('div');
        actionBtnContainer2.style = 'width: 100%; display: flex; flex-driection: row; justify-content: space-around; padding-top: 5px; padding-bottom: 5px; background-color: rgba(0,0,0,0.4);';

        actionBtnContainer.appendChild(addToCartBtn)
        actionBtnContainer.appendChild(removeFromCartBtn)

        container.appendChild(actionBtnContainer);

        parent.appendChild(container)
    })

}

$.ajax({
    url: 'http://localhost:8001/tanks',
    method: 'GET',
    success: function(tanks) {
        createCards(tanks);
    }
})
function logout(){
    location.replace('./login.html')
}