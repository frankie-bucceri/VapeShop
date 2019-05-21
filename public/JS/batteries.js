const createCards = (batteriesArr) => {
    const parent = document.getElementById('append-here');

    batteriesArr.forEach((batteriesObj) => {
        const container = document.createElement('div');
        container.classList.add('testStuff');
        container.innerText = batteriesObj.batteries;

        const batteriesImg = document.createElement('img');
        batteriesImg.src = batteriesObj.img;
        batteriesImg.classList.add('test-image');

        container.appendChild(batteriesImg);

        parent.appendChild(container)
    })

}

$.ajax({
    url: 'http://localhost:8001/batteries',
    method: 'GET',
    success: function(batteries) {
        createCards(batteries);
    }
})
function logout(){
    location.replace('./login.html')
}