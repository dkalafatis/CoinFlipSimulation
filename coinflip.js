function simulateCoinFlips() {
    let numFlips = document.getElementById('numFlips').value;
    let headsCount = 0;
    let tailsCount = 0;

    for (let i = 0; i < numFlips; i++) {
        // Generate a random number (0 or 1) and increment the appropriate counter
        if (Math.floor(Math.random() * 2) === 0) {
            headsCount++;
        } else {
            tailsCount++;
        }
    }

    // Display the results
    document.getElementById('results').innerHTML = `Results:<br>Heads: ${headsCount}<br>Tails: ${tailsCount}`;
}
