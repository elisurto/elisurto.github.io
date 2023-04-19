var square = document.getElementById('square');
var container = document.body;
var xDirection = 1;
var yDirection = 1;

square.addEventListener('click', function() {
    var randomColor = getRandomColor();
    square.style.backgroundColor = randomColor;
});

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function animateSquare() {
    var left = parseInt(square.style.left) || 0;
    var top = parseInt(square.style.top) || 0;
    var containerWidth = container.clientWidth;
    var containerHeight = container.clientHeight;
    var squareWidth = square.clientWidth;
    var squareHeight = square.clientHeight;

    if (left <= 0 || left + squareWidth >= containerWidth) {
        xDirection *= -1;
    }
    if (top <= 0 || top + squareHeight >= containerHeight) {
        yDirection *= -1;
    }

    left += xDirection * 5;
    top += yDirection * 5;

    square.style.left = left + 'px';
    square.style.top = top + 'px';

    requestAnimationFrame(animateSquare);
}

animateSquare();