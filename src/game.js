var TennisGame = (function() {
    var pointValues = {
        0: 0,
        1: 15,
        2: 30,
        3: 40
    };
    var convert = function(points) {
        var val = pointValues[points];
        return typeof val === "number" ? val : "Winner";
    };

    var Player = function(name) {
        this.name = name;
        this.points = 0;
    };

    var TennisGame = function(first, second) {
        this.first = new Player(first);
        this.second = new Player(second);
    };

    TennisGame.prototype.point = function(name) {
        if (name === this.first.name) {
            this.first.points++;
        } else if (name === this.second.name) {
            this.second.points++;
        }
    };

    TennisGame.prototype.getScore = function() {
        return "[" + this.first.name + " - " + this.second.name + "] " + convert(this.first.points) + " - " + convert(this.second.points);
    };

    TennisGame.prototype.isGameOver = function() {
        var f = this.first.points, s = this.second.points;
        return (f > 3 && f - s > 1) || (s > 3 && s - f > 1);
    };

    TennisGame.prototype.getWinner = function() {
        if (!this.isGameOver()) {return null;}  // throw error?
        return (this.first.points > this.second.points) ? this.first.name : this.second.name;
    };

    return TennisGame;
}());


