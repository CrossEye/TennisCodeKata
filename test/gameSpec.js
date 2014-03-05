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
        })

    });
});