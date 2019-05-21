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