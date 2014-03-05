TennisCodeKata
==============

A coding Kata as a team exercise between Travelers folks and its Accenture partners during Scott Dillman's and Scott Sauyet's visit to Bangalore.

Business Requirements
---------------------

  * Keep track of scoring for one tennis game.
  * The game will be played between two named players.
  * For each point scored, you will be told which player won the point.
  * First player to win 4 points wins the game. No 'Ad' scoring.
  * For each point scored, provide a mechanism to record the fact that a point was scored by the given player. As a business owner, I'm not really sure where I want this information saved (ex. database, write to console), and I may change my mind later.
      ** Hint: Keep the code that records the event separate from your game-scoring code
      ** Hint: You don't have to write the code to actually record the event. Just provide a place for it to live that is called from your game scoring.

  * At any point in time, your implementation should be able to answer the following questions:
      1 What is the current score? Example: "[John-Mary]: 15-0"
      2 Is the game over? Example: "Yes, "No"
      3 Who won the game? Example: "Mary", "In Progress"

Development Standards
---------------------

  * Plan your design using an object-oriented approach.
  * Write unit tests to cover all cases.

Tennis Scoring
--------------

    1 point: 15
    2 points: 30
    3 points: 40
    4 points: Winner

Examples:

    0-0
    15-0
    15-15
    30-15
    40-15
    40-30

Examples with Ad Scoring:

    40-40 (Deuce)
    40(Ad)-40
    40-40
    40(Ad)-40
    Winner-40

Extra Credit:
-------------

 * Handle 'Ad' point scoring.
 * How might you handle doubles versus singles?
 * Handle scoring for an entire set


