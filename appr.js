

const colors = getRandomNumber();
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function () {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = getRandomNumber();
    color.textContent = getRandomNumber();
})

function getRandomNumber() {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';

    for (var i = 0; i < 10; i++) {
        console.log(getRandomNumber());
    }
}