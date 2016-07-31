$( document ).ready(function() {

// Declare all necessary variables outside of the game function.
var correct = 0
var incorrect = 0
var userGuess
	
// Declare each image as a variable.
var q01_image
var q02_image

// Array of questions. Each question is an object. Within the question object is another object with the correct and incorrect answers.
var questions = [
	{ question:	"Homer\'s supervillain boss was named...",
		answer: {
			correct: "Hank Scorpio",
			incorrect_1: "Ernst Stavro Blofeld",
			incorrect_2: "Auric Butterfinger",
			incorrect_3: "Dr. Yes"
		}
	}
	
	{ question: "Why did Ned Flanders check himself into a mental hospital?",
		answer: {
			correct: "A tornado hit Springfield and destroyed \*only\* his house.  When the townspeople banded together to rebuild it, they did a piss-poor job, and Ned lost his marbles.",
			incorrect_1: "His wife died after being knocked off the back of the stadium bleachers at the Springfield Speedway by several T-shirt cannons.",
			incorrect_2: "Soon after investing all his money in opening a store of left-handed items (\"The Leftorium\"), a rare medical condition caused Flanders to become right-handed.",
			incorrect_3: "He thought it was the Christian thing to do."
		}
	}
	

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
];

// Array of answers for each question:

var answers_01 = [
	
];

var answers_02 = [
	"He won a mandatory scholarship from a radio call-in show on KBBT.",
	"He caused a meltdown in a nuclear reactor simulator that had no actual radioactive material in it.",
	"He had an old score to settle with his archnemesis, the Dean of Students.",
	"It was one of the terms of his parole."
];

var answers_03 = [
	"\"I choo-choo-choose you,\" with a picture of a train.",
	"\"My heart apes for you,\" with a picture of an ape.",
	"\"Generic Platonic Holiday Card,\" with no picture at all.",
	"\"You'll do.\""
];

var answers_04 = [
	"Bart drove a tractor through the school while blasting Alice Cooper\'s \"School’s Out.\"",
	"Bart wore a MAD Magazine \"Down With Homework\" T-shirt that sparked a school riot.",
	"Homer and his drunken friends trashed the elementary school, and everyone assumed it was done by child vandals.",
	"The kids got put on curfew for breaking curfew."
];

var answers_05 = [
	"Marge requires twenty-four hour nursing care.",
	"Lisa\'s a clergyman.",
	"Maggie is seven people.",
	"Bart was wounded in Vietnam.",
	"All of the above."
];

var answers_06 = [
	"Barney Gumble woke up from a drunken blackout with a diploma from Krusty\'s Clown College.",
	"He was reading billboards on \"new billboard day\" and saw Krusty the Klown\'s advertisement.",
	"He received a recorded phone message from Krusty the Klown\'s AT-5000 auto-dialer.",
	"His coworkers (Lenny and Carl) dared him to after Mr. Burns said he would fund any employee’s education."
];

var answers_07 = [
	"He helped her break into a museum.",
	"He suffered through a vegetarian meal with her.",
	"He didn\'t parent her for twenty-four hours.",
	"He bought her a lemur."
];

var answers_08 = [
	"In a raffle while visiting Grandpa at the old folks home.",
	"By posing as \"Count Homer\" and test driving a Bentley.",
	"By selling his spare Christmas tree stand to Ned Flanders at a rip-off rate.",
	"Armed robbery."
];

var answers_09 = [
	"Touch of Death.",
	"Bonestorm.",
	"Radioactive Man.",
	"Lee Carvallo\'s Putting Challenge."
];

var answers_10 = [
	"Guatamalan insanity peppers.",
	"Shelbyville Mushrooms.",
	"LSD.",
	"Ayahuasca."
];

var answers_11 = [
	"The Moderately-Priced Masons.",
	"The Diamond Shredders.",
	"The Stonecutters.",
	"The Star Killers."
];

var answers_12 = [
	"A perpetual motion machine.",
	"An AI robot.",
	"A recycling plant.",
	"A Rube Goldberg machine."
];

var answers_13 = [
	"Her sewing instructor.",
	"Milhouse\'s dad\'s boss at the cracker factory.",
	"A woman she met at the library.",
	"An American Gladiator named Pyro."
];

var answers_14 = [
	"He got his weight above 300 pounds and claimed disability."
	"He won a donut-eating contest at work."
	"He rigged a security camera to play a loop of him working. (Like in that movie, \"The Bus That Couldn't Slow Down.\")",
	"He won a bet that Mr. Burns couldn’t think of his name."
];

var answers_15 = [
	"Guns \"R\" Us.",
	"Bloodbath and Beyond.",
	"Lionel Hutz\'s Discount Gun Emporium.",
	"Target (with a human silhouette logo instead of a round target)."
];

// On Click of "Start" button, call game function.

	// Declare all necessary variables inside of the game.
		var timer = 0

	// Use a for loop(?) to RANDOMLY SELECT and push first question from array to #question span.
		$('#question').text(question);
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