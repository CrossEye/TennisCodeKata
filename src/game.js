var TennisGame = (function() {
    var pointValues = {0: "0", 1: "15", 2: "30", 3: "40"};
    var convert = function(points, opponent) {
        return points > 3 ? (points - opponent > 1) ? "Winner" : (points > opponent) ? "40(ad)" : "40" : pointValues[points];
    };

    var Player = function(name) {
        this.name = name;
        this.points = 0;
    };

    var TennisGame = function(first, second) {
        this.first = new Player(first);
        this.second = new Player(second);
        this.listeners = [];
    };

    TennisGame.prototype.point = function(name) {
        if (this.isGameOver()) {return false;}
        var player = name === this.first.name ? this.first : name === this.second.name ? this.second : null;
        if (player) {
            this.listeners.forEach(function(listener) {listener(player);})
        }
        return player && ++player.points || false;
    };

    TennisGame.prototype.getScore = function() {
        return "[" + this.first.name + " - " + this.second.name + "] " +
            convert(this.first.points, this.second.points) + " - " + convert(this.second.points, this.first.points);
    };

    TennisGame.prototype.isGameOver = function() {
        var f = this.first.points, s = this.second.points;
        return (f > 3 && f - s > 1) || (s > 3 && s - f > 1);
    };

    TennisGame.prototype.getWinner = function() {
        if (!this.isGameOver()) {return null;}  // throw error?
        return (this.first.points > this.second.points) ? this.first.name : this.second.name;
    };

    TennisGame.prototype.addPointListener = function(listener) {
        this.listeners.push(listener);
    };

    return TennisGame;
}());
