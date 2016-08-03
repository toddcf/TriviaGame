$( document ).ready(function() {

// Global variables:
var correctCount	= 0
var incorrectCount	= 0
var userGuess
var timer

function gameFunction () {

	// List of Questions
	var questionsToPick = {
		question01: {
			ask:		"Homer\'s supervillain boss was named...",
			correct:	"option4",
			options: {
				option1: "Ernst Stavro Blofeld",
				option2: "Auric Butterfinger",
				option3: "Dr. Yes",
				option4: "Hank Scorpio"
			},
			picture: "../images/hank_scorpio_posing.jpg"
		},
		
		question02: {
			ask:		"Why did Ned Flanders check himself into a mental hospital?",
			correct:	"option1",
			options: {
				option1: "A tornado hit Springfield and destroyed ONLY his house.  When the townspeople banded together to rebuild it, they did a piss-poor job, and Ned lost his marbles.",
				option2: "His wife died after being knocked off the back of the stadium bleachers at the Springfield Speedway by several T-shirt cannons.",
				option3: "Soon after investing all his money in opening a store of left-handed items (\"The Leftorium\"), a rare medical condition caused Flanders to become right-handed.",
				option4: "He thought it was the Christian thing to do."
			},
			picture: "../images/ned_flanders_asylum.jpg"
		},
		
		question03: {
			ask:		"Why did Homer have to go \"back\" to college?",
			correct:	"option2",
			options: {
				option1: "He won a mandatory scholarship from a radio call-in show on KBBT.",
				option2: "He caused a meltdown in a nuclear reactor simulator that had no actual radioactive material in it.",
				option3: "He had an old score to settle with his archnemesis, the Dean of Students.",
				option4: "It was one of the terms of his parole."
			},
			picture: "../images/nuclear_inspection_simulator_van.png"
		},

		question04: {
			ask:		"What did Lisa\'s Valentine\'s Day card to Ralph Wiggum say?",
			correct:	"option1",
			options: {
				option1: "\"I choo-choo-choose you,\" with a picture of a train.",
				option2: "\"My heart apes for you,\" with a picture of an ape.",
				option3: "\"Generic Platonic Holiday Card,\" with no picture at all.",
				option4: "\"You'll do.\""
			},
			picture: "../images/choo_choo_choose_you.png"
		},

		question05: {
			ask:		"Why did all the kids in Springfield get put on a citywide curfew?",
			correct:	"option3",
			options: {
				option1: "Bart drove a tractor through the school while blasting Alice Cooper\'s \"School’s Out.\"",
				option2: "Bart wore a MAD Magazine \"Down With Homework\" T-shirt that sparked a school riot.",
				option3: "Homer and his drunken friends trashed the elementary school, and everyone assumed it was done by child vandals.",
				option4: "The kids got put on curfew for breaking curfew."
			},
			picture: "../images/homer_drunk_driving.jpg"
		},	
		
		question06: {
			ask:		"What deductions did Homer claim on his taxes?",
			correct:	"option5",
			options: {
				option1: "Marge requires twenty-four hour nursing care.",
				option2: "Lisa\'s a clergyman.",
				option3: "Maggie is seven people.",
				option4: "Bart was wounded in Vietnam.",
				option5: "All of these."
			},
			picture: "../images/homer_simpson_taxes.jpg"
		},
		
		question07: {
			ask:		"What gave Homer the idea to go to clown college?",
			correct:	"option1",
			options: {
				option1: "He was reading billboards on \"new billboard day\" and saw Krusty the Klown\'s advertisement.",
				option2: "Barney Gumble woke up from a drunken blackout with a diploma from Krusty\'s Clown College.",
				option3: "He received a recorded phone message from Krusty the Klown\'s AT-5000 auto-dialer.",
				option4: "His coworkers (Lenny and Carl) dared him to after Mr. Burns said he would fund any employee’s education."
			},
			picture: "../images/krustys_clown_college_billboard.png"
		},

		question08: {
			ask:		"How did Homer make it up to Lisa after Bart glued a bunch of novelty items to his face and caused her to miss an event she was really looking forward to?",
			correct: 	"option2",
			options: {
				option1: "He suffered through a vegetarian meal with her.",
				option2: "He helped her break into a museum.",
				option3: "He didn\'t parent her for twenty-four hours.",
				option4: "He bought her a lemur."
			},
			picture: "../images/lost_our_lisa.png"
		},

		question09: {
			ask:		"How did Homer score coupons to a spa for himself and Marge?",
			correct: 	"option2",
			options: {
				option1: "In a raffle while visiting Grandpa at the old folks home.",
				option2: "By posing as \"Count Homer\" and test driving a Bentley.",
				option3: "By selling his spare Christmas tree stand to Ned Flanders at a rip-off rate.",
				option4: "Armed robbery."
			},
			picture: "../images/count_homer.jpg"
		},
		
		question10: {
			ask:		"What video game did Bart try to shoplift?",
			correct: 	"option2",
			options: {
				option1: "Touch of Death",
				option2: "Bonestorm",
				option3: "Radioactive Man",
				option4: "Lee Carvallo\'s Putting Challenge"
			},
			picture: "../images/bonestorm.jpg"
		},
		
		question11: {
			ask:		"What did Homer ingest before going on a vision quest?",
			correct:	"option1",
			options: {
				option1: "Guatamalan Insanity Peppers",
				option2: "Shelbyville Shrooms",
				option3: "LSD",
				option4: "Ayahuasca"
			},
			picture: "../images/wiggum_pepper.jpg"
		},
		
		question12: {
			ask:		"What secret society did Homer join?",
			correct:	"option3",
			options: {
				option1: "The Moderately-Priced Masons.",
				option2: "The Diamond Shredders.",
				option3: "The Stonecutters.",
				option4: "The Star Killers."
			},
			picture: "../images/stonecutters.png"
		},
		
		question13: {
			ask:		"What did Lisa build in her free time while the teachers union was on strike?",
			correct:	"option1",
			options: {
				option1: "A perpetual motion machine.",
				option2: "An AI robot.",
				option3: "A recycling plant.",
				option4: "A Rube Goldberg machine."
			},
			picture: "../images/perpetual_motion_machine.jpg"
		},
		
		question14: {
			ask:		"After Milhouse\'s parents got divorced, his mother started dating...",
			correct:	"option4",
			options: {
				option1: "Her sewing instructor.",
				option2: "Milhouse\'s dad\'s boss at the cracker factory.",
				option3: "A woman she met at the library.",
				option4: "An American Gladiator named Pyro."
			},
			picture: "../images/pyro_and_gyro.png"
		},

		question15: {
			ask:		"How did Homer achieve work-from-home status?",
			correct:	"option1",
			options: {
				option1: "He got his weight above 300 pounds and claimed disability.",
				option2: "He won a donut-eating contest at work.",
				option3: "He rigged a security camera to play a loop of him working. (Like in that movie, \"The Bus That Couldn't Slow Down.\")",
				option4: "He won a bet that Mr. Burns couldn’t think of his name."
			},
			picture: "../images/king_size_homer.png"
		},
		
		question16: {
			ask:		"At which store did Homer purchase a gun?",
			correct:	"option2",
			options: {
				option1: "Guns \"R\" Us.",
				option2: "Bloodbath and Beyond.",
				option3: "Lionel Hutz\'s Discount Gun Emporium.",
				option4: "Target (with a human silhouette logo instead of a round target)."
			},
			picture: "../images/bloodbath_and_beyond.png"
		}	
	}
}
// Functions:
	
	// Choose a random question:
	questionsToPick = questionsToPick[Math.floor(Math.random() * questionsToPick.length)].question;
	// Above, do I need to add +1 to get it to pick the last question in the array?
	console.log(questionsToPick);
	// DISPLAY the question in HTML.
	$('#question').html(questionsToPick);

	// Test answer.  THIS IS NOT WORKING.
	
	var answers = questionsToPick.answer.correct;
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