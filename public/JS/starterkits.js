const createCards = (starterkitsArr) => {
    const parent = document.getElementById('append-here');

    starterkitsArr.forEach((starterkitsObj) => {
        const container = document.createElement('div');
        container.classList.add('testStuff');
        container.innerText = starterkitsObj.starterkits;

        const starterkitsImg = document.createElement('img');
        starterkitsImg.src = starterkitsObj.img;
        starterkitsImg.classList.add('test-image');

        container.appendChild(starterkitsImg);

        parent.appendChild(container)
    })

}

$.ajax({
    url: 'http://localhost:8001/starterkits',
    method: 'GET',
    success: function(tanks) {
        createCards(tanks);
    }
})
function logout(){
    location.replace('./login.html')
}