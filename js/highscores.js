document.addEventListener('DOMContentLoaded', function () {
    var highscores = JSON.parse(localStorage.getItem('highscores')) || [];

    var filteredHighscores = highscores.filter(function (scoreEntry) {
        return scoreEntry.score > 2;
    });
    
    var highscoresList = document.getElementById('highscores-list');

    if (filteredHighscores.length === 0) {
        highscoresList.innerHTML = '<li>No high scores yet.</li>';
    } else {
        filteredHighscores.forEach(function (scoreEntry) {
            var listItem = document.createElement('li');
            listItem.textContent = scoreEntry.initials + ': ' + scoreEntry.score;
            highscoresList.appendChild(listItem);
        });
    }
});
