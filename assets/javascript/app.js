$( document ).ready(function() {

// Declare all necessary variables outside of the game.
	// Correct tally.
	// Incorrect tally.
	// userGuess
	// Declare each image as a variable.
// Array of questions.
questions: [
	"Homer\'s supervillain boss was named...",
	"Why did Ned Flanders check himself into a mental hospital?",
	"Why did Homer have to go \"back\" to college?",
	"What did Lisa\'s Valentine\'s Day card to Ralph Wiggum say?",
	"Why did all the kids in Springfield get put on a citywide curfew?",
	"What deductions did Homer claim on his taxes?",
	"What gave Homer the idea to go to clown college?",
	"How did Homer make it up to Lisa after Bart caused her to miss an event she was really looking forward to?",
	"How did Homer score coupons to a spa for himself and Marge?",
	"What video game did Bart try to shoplift?",
	"What did Homer ingest before going on a vision quest?",
	"What secret society did Homer join?",
	"What did Lisa build in her free time while the teachers union was on strike?",
	"After Milhouse\'s parents got divorced, his mother started dating...",
	"How did Homer achieve work-from-home status?",
	"At which store did Homer purchase a gun?"
]

// Array of answers for each question.
answers_01: [
	"Ernst Stavro Blofeld",
	"Auric Butterfinger",
	"Dr. Yes",
	"Hank Scorpio"
]

answers_02: [
	"A tornado hit Springfield and destroyed \*only\* his house.  When the townspeople banded together to rebuild it, they did a piss-poor job, and Ned lost his marbles.",
	"His wife died after being knocked off the back of the stadium bleachers at the Springfield Speedway by several T-shirt cannons.",
	"Soon after investing all his money in opening a store of left-handed items (\"The Leftorium\"), a rare medical condition caused Flanders to become right-handed.",
	"He thought it was the Christian thing to do."
]

answers_03 [
	"He won a mandatory scholarship from a radio call-in show on KBBT.",
	"He caused a meltdown in a nuclear reactor simulator that had no actual radioactive material in it.",
	"He had an old score to settle with his archnemesis, the Dean of Students.",
	"It was one of the terms of his parole."
]

answers_04 [
	"\"I choo-choo-choose you,\" with a picture of a train.",
	"\"My heart apes for you,\" with a picture of an ape.",
	"\"Generic Platonic Holiday Card,\" with no picture at all.",
	"\"You'll do.\""
]



// On Click of "Start" button, call game function.

	// Declare all necessary variables inside of the game.
		// timer

	// Use for loop(?) to push first question from array to #question span.
		// Reset timer to start point.
			// (45 seconds? Adjust when testing game to find best amount of time.)
		// Begin counting down.

	// Use for loop(?) to push first "answers" array to #answers span.
		// Array randomly chooses order in which to display the answers each time.

	// If Q1 is correct...
		// Display image.
			// something like: VAR.eq(3).append(image);
		// Congratulate player.
		// Add to "correct" tally.
		// empty div or span.
	// If Q1 is incorrect...
		// Display image.
		// Tell player this was incorrect. Notify of correct answer.
		// Add to "incorrect" tally.
		// empty div or span.

	// If timer runs out, question is marked incorrect.
		// Copy and paste from "If Q1 is incorrect" above.

	// Advance to the next question.

	// After last question, display score, etc., and "Play Again?" button.
	// On Click of "Play Again?", reset the game.

};