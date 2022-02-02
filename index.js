import fetch from 'node-fetch';
import promptSync from 'prompt-sync';
const prompt = promptSync();

function getRandomString(length) {
	return fetch(`https://ciprand.p3p.repl.co/api?len=${length}&count=10`)
		.then((response) => response.json())
		.catch('There was an error. Please try again');
}

async function printRandomString() {
	const stringLength = prompt('Enter a valid whole number from 1 - 199');
	const length = parseInt(stringLength);

	if (typeof length !== 'number' || length <= 0 || length % 1 !== 0) {
		console.log('Please enter a positive whole number .');
		return;
	}
	const data = await getRandomString(length);
  let listOfStrings = [];
	data.Strings.forEach((string) => listOfStrings.push(string));
  //console.log(listOfStrings)
	return listOfStrings;
}

console.log(printRandomString(5));
