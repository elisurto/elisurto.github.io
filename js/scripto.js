// Get the square element
var squareElement = document.getElementById("square");

// Add a click event listener to the square
squareElement.addEventListener("click", function() {
    // Generate a random color
    var randomColor = getRandomColor();
    // Set the square background color to the random color
    squareElement.style.backgroundColor = randomColor;
});

// Function to generate a random color
function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}