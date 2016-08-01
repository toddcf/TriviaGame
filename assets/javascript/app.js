$( document ).ready(function() {

// Global variables:
var correctCount	= 0
var incorrectCount	= 0
var userGuess
var timer

// Array of questions. Each question is an object. Within the question object is another object with the correct and incorrect answers.
var questionsToPick = [
	{ question:	"Homer\'s supervillain boss was named...",
		answer: {
			correct: "Hank Scorpio",
			incorrect_1: "Ernst Stavro Blofeld",
			incorrect_2: "Auric Butterfinger",
			incorrect_3: "Dr. Yes"
		},
		picture: "../images/hank_scorpio_posing.jpg"
	},
	
	{ question: "Why did Ned Flanders check himself into a mental hospital?",
		answer: {
			correct: "A tornado hit Springfield and destroyed ONLY his house.  When the townspeople banded together to rebuild it, they did a piss-poor job, and Ned lost his marbles.",
			incorrect_1: "His wife died after being knocked off the back of the stadium bleachers at the Springfield Speedway by several T-shirt cannons.",
			incorrect_2: "Soon after investing all his money in opening a store of left-handed items (\"The Leftorium\"), a rare medical condition caused Flanders to become right-handed.",
			incorrect_3: "He thought it was the Christian thing to do."
		},
		picture: "../images/ned_flanders_asylum.jpg"
	},
	
	{ question:	"Why did Homer have to go \"back\" to college?",
		answer: {
			correct: "He caused a meltdown in a nuclear reactor simulator that had no actual radioactive material in it.",
			incorrect_1: "He won a mandatory scholarship from a radio call-in show on KBBT.",
			incorrect_2: "He had an old score to settle with his archnemesis, the Dean of Students.",
			incorrect_3: "It was one of the terms of his parole."
		},
		picture: "../images/nuclear_inspection_simulator_van.png"
	},

	{ question: "What did Lisa\'s Valentine\'s Day card to Ralph Wiggum say?",
		answer: {
			correct: "\"I choo-choo-choose you,\" with a picture of a train.",
			incorrect_1: "\"My heart apes for you,\" with a picture of an ape.",
			incorrect_2: "\"Generic Platonic Holiday Card,\" with no picture at all.",
			incorrect_3: "\"You'll do.\""
		},
		picture: "../images/choo_choo_choose_you.png"
	},

	{ question: "Why did all the kids in Springfield get put on a citywide curfew?",
		answer: {
			correct: "Homer and his drunken friends trashed the elementary school, and everyone assumed it was done by child vandals.",
			incorrect_1: "Bart drove a tractor through the school while blasting Alice Cooper\'s \"School’s Out.\"",
			incorrect_2: "Bart wore a MAD Magazine \"Down With Homework\" T-shirt that sparked a school riot.",
			incorrect_3: "The kids got put on curfew for breaking curfew."
		},
		picture: "../images/homer_drunk_driving.jpg"
	},	
	
	{ question: "What deductions did Homer claim on his taxes?",
		answer: {
			correct: "All of these.",
			incorrect_1: "Marge requires twenty-four hour nursing care.",
			incorrect_2: "Lisa\'s a clergyman.",
			incorrect_3: "Maggie is seven people.",
			incorrect_4: "Bart was wounded in Vietnam."
		},
		picture: "../images/homer_simpson_taxes.jpg"
	},
	
	{ question: "What gave Homer the idea to go to clown college?",
		answer: {
			correct: "He was reading billboards on \"new billboard day\" and saw Krusty the Klown\'s advertisement.",
			incorrect_1: "Barney Gumble woke up from a drunken blackout with a diploma from Krusty\'s Clown College.",
			incorrect_2: "He received a recorded phone message from Krusty the Klown\'s AT-5000 auto-dialer.",
			incorrect_3: "His coworkers (Lenny and Carl) dared him to after Mr. Burns said he would fund any employee’s education."
		},
		picture: "../images/krustys_clown_college_billboard.png"
	},

	{ question: "How did Homer make it up to Lisa after Bart glued a bunch of novelty items to his face and caused her to miss an event she was really looking forward to?",
		answer: {
			correct: "He helped her break into a museum.",
			incorrect_1: "He suffered through a vegetarian meal with her.",
			incorrect_2: "He didn\'t parent her for twenty-four hours.",
			incorrect_3: "He bought her a lemur."
		},
		picture: "../images/lost_our_lisa.png"
	},

	{ question: "How did Homer score coupons to a spa for himself and Marge?",
		answer: {
			correct: "By posing as \"Count Homer\" and test driving a Bentley.",
			incorrect_1: "In a raffle while visiting Grandpa at the old folks home.",
			incorrect_2: "By selling his spare Christmas tree stand to Ned Flanders at a rip-off rate.",
			incorrect_3: "Armed robbery."
		},
		picture: "../images/count_homer.jpg"
	},
	
	{ question: "What video game did Bart try to shoplift?",
		answer: {
			correct: "Bonestorm",
			incorrect_1: "Touch of Death",
			incorrect_2: "Radioactive Man",
			incorrect_3: "Lee Carvallo\'s Putting Challenge"
		},
		picture: "../images/bonestorm.jpg"
	},
	
	{ question: "What did Homer ingest before going on a vision quest?",
		answer: {
			correct: "Guatamalan Insanity Peppers",
			incorrect_1: "Shelbyville Shrooms",
			incorrect_2: "LSD",
			incorrect_3: "Ayahuasca"
		},
		picture: "../images/wiggum_pepper.jpg"
	},
	
	{ question: "What secret society did Homer join?",
		answer: {
			incorrect_1: "The Moderately-Priced Masons.",
			incorrect_2: "The Diamond Shredders.",
			correct: "The Stonecutters.",
			incorrect_3: "The Star Killers."
		},
		picture: "../images/stonecutters.png"
	},
	
	{question: "What did Lisa build in her free time while the teachers union was on strike?",
		answer: {
			correct: "A perpetual motion machine.",
			incorrect_1: "An AI robot.",
			incorrect_2: "A recycling plant.",
			incorrect_3: "A Rube Goldberg machine."
		},
		picture: "../images/perpetual_motion_machine.jpg"
	},
	
	{ question: "After Milhouse\'s parents got divorced, his mother started dating...",
		answer: {
			incorrect_1: "Her sewing instructor.",
			incorrect_2: "Milhouse\'s dad\'s boss at the cracker factory.",
			incorrect_3: "A woman she met at the library.",
			correct: "An American Gladiator named Pyro."
		},
		picture: "../images/pyro_and_gyro.png"
	},

	{ question: "How did Homer achieve work-from-home status?",
		answer: {
			correct: "He got his weight above 300 pounds and claimed disability.",
			incorrect_1: "He won a donut-eating contest at work.",
			incorrect_2: "He rigged a security camera to play a loop of him working. (Like in that movie, \"The Bus That Couldn't Slow Down.\")",
			incorrect_3: "He won a bet that Mr. Burns couldn’t think of his name."
		},
		picture: "../images/king_size_homer.png"
	},
	
	{ question: "At which store did Homer purchase a gun?",
		answer: {
			incorrect_1: "Guns \"R\" Us.",
			correct: "Bloodbath and Beyond.",
			incorrect_2: "Lionel Hutz\'s Discount Gun Emporium.",
			incorrect_3: "Target (with a human silhouette logo instead of a round target)."
		},
		picture: "../images/bloodbath_and_beyond.png"
	}	
];

// Functions:
	
	// Choose a random question:
	questionsToPick = questionsToPick[Math.floor(Math.random() * questionsToPick.length)].question;
	// Above, do I need to add +1 to get it to pick the last question in the array?
	console.log(questionsToPick);
	// DISPLAY the question in HTML.
	$('#question').html(questionsToPick);

	// Test answer.  THIS IS NOT WORKING.
	var answers = this.answer.correct;
	// RANDOMIZE the appropriate answer options:
		// this.answer = Math.floor(Math.random() * this.answer.length);
		// DISPLAY the answers in HTML.
		console.log(answers);
		$('#answers').html(SOMETHING);

// Main Process:

	// Starts and restarts the game:
	var startGame = function() {
		// Reset timer.
		var timer			= 0;
		// Reset correctCount
		var correctCount	= 0;
		// Reset incorrectCount
		var incorrectCount	= 0;
		// Push these changes to HTML.




		// Use a for loop(?) to RANDOMLY SELECT and push first question from array to #question span.
			// Reset timer to start point.
				// (45 seconds? Adjust when testing game to find best amount of time.)
			// Begin counting down.

		// Use for loop(?) to push first "answers" array to #answers span.
			// Array randomly chooses order in which to display the answers each time.

		// TIMER -- Does it go before or after if/else?
		// If timer runs out, question is marked incorrect.
			// Display "Time Up," then copy and paste from "If Q1 is incorrect" above.

		// If userGuess is correct...
		if (userGuess == correct) {
			// Display image.
				// something like: VAR.eq(3).append(image);
			// Congratulate player.
			// Add to "correct" tally.
			correctCount = correctCount++;
			console.log(correctCount);
			// empty div or span.
		}
		// If userGuess is incorrect...
		else {
			// Display image.
			// Tell player this was incorrect. Notify of correct answer.
			// Add to "incorrect" tally.
			incorrectCount = incorrectCount++;
			console.log(incorrectCount);
			// empty div or span.
		}

		// Advance to the next question.

		// Do not repeat questions.

		// Stop after questionsToPick.length.

		// After last question, display score, etc., and "Play Again?" button.
		// On Click of "Play Again?", reset the game.
		confirm("Good work! Play again?")
			if (true) {
				startGame();
			}
			else {
				alert("Thanks for playing!");
			}
	}
});