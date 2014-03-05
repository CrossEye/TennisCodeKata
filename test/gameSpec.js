describe('TennisGame', function() {
    beforeEach(function() {
    });

    describe("as a constructor", function() {
        it('is a function', function() {
            expect(TennisGame).toBeAFunction();
        });

        it('that creates objects', function() {
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

        it('has an `addPointListener` method', function() {
            expect(game.addPointListener).toBeAFunction();
        });
    });

    describe("adding the first point", function() {
        var game;
        beforeEach(function() {
            game = new TennisGame("John", "Mary");
        });

        it("causes the score to be updated properly", function() {
            game.point("John");
            expect(game.getScore()).toBe("[John - Mary] 15 - 0");
        });

        it("(regardless of which player gets the point)", function() {
            game.point("Mary");
            expect(game.getScore()).toBe("[John - Mary] 0 - 15");
        });
    });

    describe("continually adding points", function() {
        it("causes the score to be updated properly", function() {
            var game = new TennisGame("Anusha", "Premalatha");
            game.point("Anusha");
            game.point("Premalatha");
            game.point("Premalatha");
            game.point("Premalatha");
            game.point("Anusha");
            expect(game.getScore()).toBe("[Anusha - Premalatha] 30 - 40");
        });

        it("has no effect once the game is won", function() {
            var game = new TennisGame("Anusha", "Premalatha");
            game.point("Anusha");
            game.point("Premalatha");
            game.point("Premalatha");
            game.point("Premalatha");
            game.point("Anusha");
            game.point("Premalatha");
            expect(game.isGameOver()).toBe(true);
            expect(game.getScore()).toBe("[Anusha - Premalatha] 30 - Winner");
            game.point("Anusha");
            game.point("Anusha");
            expect(game.getScore()).toBe("[Anusha - Premalatha] 30 - Winner");
        });
    });

    describe("isGameOver", function() {
        it("reports whether a player has won", function() {
            var game = new TennisGame("Karthik", "Amit");
            game.point("Karthik");
            game.point("Amit");
            game.point("Amit");
            game.point("Amit");
            game.point("Karthik");
            game.point("Amit");
            expect(game.isGameOver()).toBe(true);
        });

        it("notes 'advantage' situations", function() {
            var game = new TennisGame("Akul", "Saravanna");
            game.point("Akul");
            game.point("Saravanna");
            game.point("Saravanna");
            game.point("Saravanna");
            game.point("Akul");
            game.point("Akul");
            game.point("Saravanna");
            expect(game.isGameOver()).toBe(false); // 40(ad) - 40
            game.point("Akul");
            expect(game.isGameOver()).toBe(false); // 40 - 40
            game.point("Saravanna");
            expect(game.isGameOver()).toBe(false); // 40(ad) - 40
            game.point("Akul");
            expect(game.isGameOver()).toBe(false); // 40 - 40
            game.point("Akul");
            expect(game.isGameOver()).toBe(false); // 40 - 40(ad)
            game.point("Akul");
            expect(game.isGameOver()).toBe(true);  // 40 - Winner
        });
    });

    describe("getWinner", function() {
        it("reports which player has won", function() {
            var game = new TennisGame("Sauyet", "Dillman");
            game.point("Sauyet");
            game.point("Dillman");
            game.point("Dillman");
            game.point("Dillman");
            game.point("Sauyet");
            game.point("Dillman");
            expect(game.getWinner()).toBe("Dillman");
        });

        it("returns `null` if neither player has won", function() {
            var game = new TennisGame("Gopika", "Susanta");
            game.point("Gopika");
            game.point("Susanta");
            game.point("Susanta");
            game.point("Susanta");
            game.point("Gopika");
            expect(game.getWinner()).toBeNull();
        });

    });

    describe("pointListener", function() {
        it("hears when points are added", function() {
            var game = new TennisGame("Jayasimha", "Abheek");
            var latest = null;
            var listener = function(player) {
                latest = player;
            };
            game.addPointListener(listener);
            game.point("Abheek");
            expect(latest.name).toBe("Abheek");
            game.point("Jayasimha");
            expect(latest.name).toBe("Jayasimha");
        });
    });

});