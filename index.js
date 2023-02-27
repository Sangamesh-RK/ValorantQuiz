let read = require('readline-sync');
let score = 0
questionBank = {
  'Which agent is known for fire?': 'Pheonix',
  'How many abilites a agent has?': '4',
  'Which is the cheapest gun available in Valorant?': 'Classic',
  'Whats the highest Valorant rank?': 'Radiant',
  'Whats the name of device that attacker?': 'Spike',
}
username = read.question('Whats your name? \n')
console.log('Valorant Quiz \n')
for (question in questionBank) {
  answer = questionBank[question]
  console.log(question + '\n')
  userAnswer = read.question('Answer: ')
  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log('Correct!\n')
    score++
  } else {
    console.log('Incorrect!\n')
  }
}
console.log(username + ' Score: ' + score)