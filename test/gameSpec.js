describe('TennisGame', function() {
    beforeEach(function() {
    });

    describe("as a constructor function", function() {
        it('is a function', function() {
            expect(TennisGame).toBeAFunction();
        });

        it('creates objects', function() {
            var game = new TennisGame();
            expect(game).toBeAnObject();
        });
    });

    describe("(each game)", function() {
        var game;
        beforeEach(function() {
            game = new TennisGame();
        });

        it('has a `point` method', function() {
            expect(game.point).toBeAFunction();
        });

        it('has a `getScore` method', function() {
            expect(game.getScore).toBeAFunction();
        });

        it('has a `isGameOver` method', function() {
            expect(game.isGameOver).toBeAFunction();
        });

        it('has a `getWinner` method', function() {
            expect(game.getWinner).toBeAFunction();
        });
    });

    describe("adding the first point", function() {
        var game;
        beforeEach(function() {
            game = new TennisGame("John", "Mary");
        });

        it("causes the score to be updated properly", function() {
            game.point("John");
            expect(game.getScore()).toEqual("[John - Mary] 15 - 0");
        });

        it("(regardless of which player gets the point)", function() {
            game.point("Mary");
            expect(game.getScore()).toEqual("[John - Mary] 0 - 15");
        });
    });

});