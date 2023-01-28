let userName = '';
let userQuestion = 'Kun faya Kun?';
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';
userName ? console.log(`Hello, ${userName}`) : console.log('Hello!');
switch (randomNumber) {
  case 0:console.log('It is certain');
  break;
  case 1:console.log('It is decidedly so');
  break;
 case 2:console.log(`Reply hazy try again: ${randomNumber}`); 
  break;// checked to see if parsing worked to display the random number that was picked.
  case 3:console.log('Cannot predict now');
  break;
  case 4:console.log('Do not count on it');
  break;
  case 5:console.log('My sources say no');
  break;
  case 6:console.log('Outlook not so good');
  break;
  case 7:console.log('Signs point to yes');
  break;
  default:
  console.log('');
}
console.log(eightBall);
