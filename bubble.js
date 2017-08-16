var scores = [60, 50, 60, 58, 54, 54,
              58, 50, 52, 54, 48, 69,
              34, 55, 51, 52, 44, 51,
              69, 64, 66, 55, 52, 61,
              46, 31, 57, 52, 44, 18,
              41, 53, 55, 61, 51, 44];
function printAndGetHighScore(scores){
var output;
var highScore = 0;

for (var i = 0; i<scores.length;i++) {
    output = " bub sol #" + i + " score: " + scores[i];
    console.log(output);
    if(scores[i] > highScore) {
        highScore = scores[i];
    }
}
    return highScore;
}

function getBestResults(scores, highScore) {
    var bestSolutions = [];
    for (var i = 0; i < scores.length; i++) {
        if (scores[i] == highScore) {
            bestSolutions.push(i);
        }
    }
    return bestSolutions;
}


var highScore = printAndGetHighScore(scores);

console.log("Bubbles tests: " + scores.length);
console.log("highest bubble score: " + highScore);


var bestSolutions = printAndGetHighScore(scores);
console.log("Solutions with the highest score: " + bestSolutions);
console.log("Bubbles tests: " + scores.length);
console.log("highest bubble score: " + highScore);