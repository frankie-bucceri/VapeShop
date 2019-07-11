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
        container.innerText = flavorObj.name

        const flavorImg = document.createElement('img');
        flavorImg.src = flavorObj.img;
        flavorImg.classList.add('test-image');

        // const incBtn = document.createElement('button');
        // incBtn.innerText = '+';
        // const decBtn = document.createElement('button');
        // decBtn.innerText = '-';
        const addToCartBtn = document.createElement('button');
        addToCartBtn.innerText = 'Add to cart';
        addToCartBtn.onclick = () => addToCart(flavorObj)

        const actionBtnContainer = document.createElement('div');
        actionBtnContainer.style = 'width: 100%; display: flex; flex-driection: row; justify-content: space-around; padding-top: 5px; padding-bottom: 5px; background-color: rgba(0,0,0,0.4);';


        const removeFromCartBtn = document.createElement('button');
        removeFromCartBtn.innerText = 'Remove';
        removeFromCartBtn.onclick = () => removeFromCart(flavorObj)

        const actionBtnContainer2 = document.createElement('div');
        actionBtnContainer2.style = 'width: 100%; display: flex; flex-driection: row; justify-content: space-around; padding-top: 5px; padding-bottom: 5px; background-color: rgba(0,0,0,0.4);';

        // const quantity = document.createElement('span');
        // quantity.innerText = 1;
        
        // actionBtnContainer.appendChild(decBtn)
        // actionBtnContainer.appendChild(quantity)
        // actionBtnContainer.appendChild(incBtn)
        actionBtnContainer.appendChild(addToCartBtn)
        actionBtnContainer.appendChild(removeFromCartBtn)
        // actionBtnContainer2.appendChild(removeFromCartBtn)
        
        container.appendChild(flavorImg);
        container.appendChild(actionBtnContainer)
        // container.appendChild(addToCartBtn)

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