import PromptSync from 'prompt-sync';
const prompt = PromptSync();
const number = prompt('Enter Number: ');

const evenOrOdd = (num) => {
  return num % 2 == 0 ? 'Even' : 'Odd';
};

console.log(evenOrOdd(number));
