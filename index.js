// imports
var readLineSync = require('readline-sync');
var chalk = require('chalk');

// declarations
var score1 = 0;
var score2 = 0;
var scoreMessage = 'Your current score is ';

// functions
function askQuestion(question, correctAns, score) {
	var userAnswer = readLineSync.question(question);
	if (correctAns.toLowerCase() === userAnswer.toLowerCase()) {
		console.log(chalk.bgGreen('you are correct'));
		score += 1;
		console.log(chalk.bgGreen(scoreMessage + score));
	} else {
		console.log(chalk.bgRed.bold('sorry! you are wrong'));
	}
	return score;
}

function checkHighScore(currScore, highScores) {
	for (var i = 0; i < highScores.length; i++) {
		if (currScore >= highScores[i].score) {
			console.log(
				chalk.redBright.bold.italic('High Scores beaten- ' + highScores[i].name)
			);
		}
	}
}

// array of question objects
// stack questions array
var stackQuestions = [
	{
		question: chalk.magenta
			.bold(`1. Process of inserting an element in Stack is called :
      a. Create.
      b. Push.
      c. intake.
      d. Pop.\n`),
		answer: 'b'
	},
	{
		question: chalk.magenta
			.bold(`2. Process of removing an element from Stack is called :
      a. Create.
      b. Push.
      c. break.
      d. Pop.\n`),
		answer: 'd'
	},
	{
		question: chalk.magenta
			.bold(`3. In a Stack, if a user tries to remove an element from an empty Stack it is called :
      a. Stack overflow.
      b. Stack underflow.
      c. Stack error.
      d. Stack pointer error.\n`),
		answer: 'b'
	},
	{
		question: chalk.magenta
			.bold(`4. Pushing an element into a stack already having the max number of elements, then that error message is called :
      a. Stack overflow.
      b. Stack underflow.
      c. Crashed.
      d. fault.\n`),
		answer: 'a'
	},
	{
		question: chalk.magenta.bold(`5. one of the application of Stacks is :
      a. used for breadth first Search.
      b. checking parenthesis balance in compilers.
      c. used to apply FIFO policy.\n`),
		answer: 'b'
	}
];

// Queue questions array
var queueQuestions = [
	{
		question: chalk.magenta
			.bold(`1. A linear list of elements in which deletion can be done at one end(front) and insertion can take place only at the other end(rear) is known as :
      a. Queue.
      b. Stack.
      c. Tree.
      d. Linked list.\n`),
		answer: 'a'
	},
	{
		question: chalk.magenta
			.bold(`2. The data structure required for Breadth first Traversal on a graph is? :
      a. Stack.
      b. Array.
      c. Queue.
      d. Tree.\n`),
		answer: 'c'
	},
	{
		question: chalk.magenta.bold(`3. A Queue follows :
      a. FIFO(first in first out) policy.
      b. LIFO(last in first out) policy.
      c. Ordered array.
      d. Linear tree.\n`),
		answer: 'a'
	},
	{
		question: chalk.magenta.bold(`4. Circular queue is also known as :
      a. Curve.
      b. Square Buffer.
      c. Rectangle Buffer.
      d. Ring Buffer.\n`),
		answer: 'd'
	},
	{
		question: chalk.magenta
			.bold(`5. A data structure in which elements can be inserted or deleted at/from both ends but not in the middle is :
      a. Queue.
      b. Circular Queue.
      c. Dequeue.
      d. Priority Queue\n`),
		answer: 'c'
	}
];

var highScores1 = [
	{
		name: 'GautamCodes',
		score: 5
	},
	{
		name: 'RahulTech',
		score: 4
	}
];

var highScores2 = [
	{
		name: 'Sahil',
		score: 5
	},
	{
		name: 'Aditya',
		score: 3
	}
];

var questionName = "What's your sweet Name? ";
var userName = chalk.green(readLineSync.question(questionName));
var welcomeMessage = 'Welcome! ' + userName + '\n';
console.log(welcomeMessage);

// question loop
for (var i = 0; i < stackQuestions.length; i++) {
	var current = stackQuestions[i];
	score1 = askQuestion(current.question, current.answer, score1);
	console.log('\n');
}

console.log(
	chalk.bgCyan.yellowBright.bold(
		'Your Final Score is ' + score1 + ' for Stacks quiz.'
	)
);

checkHighScore(score1, highScores1);

// queue Quiz
if (readLineSync.keyInYN(chalk.blue('Wanna take quiz on Queue as well ?'))) {
	for (i = 0; i < queueQuestions.length; i++) {
		current = queueQuestions[i];
		score2 = askQuestion(current.question, current.answer, score2);
		console.log('\n');
	}
	console.log(
		chalk.bgCyan.yellowBright.bold(
			'Your Final Score is ' + score2 + ' for Queue quiz.'
		)
	);

	checkHighScore(score2, highScores2);
	console.log(chalk.yellowBright('\nkeep going Coder...\n'));
} else {
	console.log(chalk.yellowBright('\nkeep going Coder...\n'));
}
