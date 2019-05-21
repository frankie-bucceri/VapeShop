const createCards = (modsArr) => {
    const parent = document.getElementById('append-here');

    modsArr.forEach((modObj) => {
        const container = document.createElement('div');
        container.classList.add('testStuff');
        container.innerText = modObj.mod;

        const modImg = document.createElement('img');
        modImg.src = modObj.img;
        modImg.classList.add('test-image');

        container.appendChild(modImg);

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