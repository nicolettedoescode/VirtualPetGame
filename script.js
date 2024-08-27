// Initial pet stats
let hunger = 50;
let happiness = 50;
let energy = 50;

// Function to update the stats display
function updateStats() {
    document.getElementById('hunger').textContent = hunger;
    document.getElementById('happiness').textContent = happiness;
    document.getElementById('energy').textContent = energy;
}

// Function to introduce gradual decline in stats
function gradualDecline() {
    hunger = Math.max(0, hunger - Math.floor(Math.random() * 3)); // Hunger decreases gradually
    happiness = Math.max(0, happiness - Math.floor(Math.random() * 2)); // Happiness decreases gradually
    energy = Math.max(0, energy - Math.floor(Math.random() * 2)); // Energy decreases gradually
    updateStats();
    checkGameOver();
}

// Feed the pet
document.getElementById('feed').addEventListener('click', function() {
    if (energy >= 5) { // Prevent feeding if energy is too low
        hunger = Math.max(0, hunger - 10 - Math.floor(Math.random() * 5));
        energy = Math.max(0, energy - 5);
        updateStats();
        document.getElementById('dogImage').src = 'https://media.giphy.com/media/1iTHHRsUzA2me/giphy.gif'; // Eating dog GIF
        setTimeout(() => document.getElementById('dogImage').src = 'images/dog', 3000); // Reset image after 3 seconds
        checkGameOver();
    } else {
        alert("Your pet is too tired to eat!");
    }
});

// Play with the pet
document.getElementById('play').addEventListener('click', function() {
    if (energy >= 10) { // Prevent playing if energy is too low
        happiness = Math.min(100, happiness + 10 + Math.floor(Math.random() * 5));
        energy = Math.max(0, energy - 10 - Math.floor(Math.random() * 5));
        updateStats();
        document.getElementById('dogImage').src = 'https://media.giphy.com/media/13CoXDiaCcCoyk/giphy.gif'; // Playing dog GIF
        setTimeout(() => document.getElementById('dogImage').src = 'images/dog', 3000); // Reset image after 3 seconds
        checkGameOver();
    } else {
        alert("Your pet is too tired to play!");
    }
});

// Put the pet to sleep
document.getElementById('sleep').addEventListener('click', function() {
    energy = Math.min(100, energy + 20 + Math.floor(Math.random() * 10));
    hunger = Math.min(100, hunger + 5 + Math.floor(Math.random() * 5)); // Hunger increases while sleeping
    updateStats();
    document.getElementById('dogImage').src = 'https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif'; // Sleeping dog GIF
    setTimeout(() => document.getElementById('dogImage').src = 'images/dog', 3000); // Reset image after 3 seconds
    checkGameOver();
});

// Check if the game is over (any stat reaches 0)
function checkGameOver() {
    if (hunger <= 0 || happiness <= 0 || energy <= 0) {
        alert("Game Over! Your pet needs better care!");
        resetGame();
    }
}

// Reset the game to initial stats
function resetGame() {
    hunger = 50;
    happiness = 50;
    energy = 50;
    document.getElementById('dogImage').src = 'images/dog'; // Reset to default image
    updateStats();
}

// Initialize the game by updating stats
updateStats();

// Set up the gradual decline every 10 seconds
setInterval(gradualDecline, 10000);
