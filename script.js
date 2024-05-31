// // const philosopher = "Аристотель";
// // let index = 0;

// // document.addEventListener('keypress', function(event) {
// //   if (event.key === 'Enter') {
// //     if (index < philosopher.length) {
// //       const span = document.createElement('span');
// //       span.textContent = philosopher[index];
// //       document.getElementById('philosopher').appendChild(span);
// //       index++;
// //     }
// //   }
// // });
// const word = "Аристотель".toUpperCase();
// let guessedWord = Array(word.length).fill('_');
// let wrongAttempts = 0;

// document.getElementById('word').textContent = guessedWord.join(' ');

// document.addEventListener('keypress', function(event) {
//   const letter = event.key.toUpperCase();
  
//   if (word.includes(letter)) {
//     for (let i = 0; i < word.length; i++) {
//       if (word[i] === letter) {
//         guessedWord[i] = letter;
//       }
//     }
//     document.getElementById('word').textContent = guessedWord.join(' ');
//   } else {
//     wrongAttempts++;
//     document.getElementById('hangman').textContent = "🔪".repeat(wrongAttempts);
    
//     if (wrongAttempts === 6) {
//       document.getElementById('word').textContent = word;
//       document.removeEventListener('keypress');
//       document.getElementById('hangman').textContent = "💀 Повешен!";
//     }
//   }
// });

const wordToGuess = "Иммануил Кант".toLowerCase();
const wordDisplay = document.getElementById('word-display');
const letterInput = document.getElementById('letter-input');
const checkButton = document.getElementById('check-button');
const successMessage = document.getElementById('success-message');

checkButton.addEventListener('click', () => {
    const letter = letterInput.value.toLowerCase();
    if (wordToGuess.includes(letter)) {
        const letters = wordToGuess.split('');
        wordDisplay.innerHTML = '';
        letters.forEach((char) => {
            if (char === letter) {
                wordDisplay.innerHTML += `<span class="green">${char}</span>`;
            } else {
                wordDisplay.innerHTML += char;
            }
        });

        if (wordDisplay.textContent === wordToGuess) {
            successMessage.style.display = 'block';
        }
    } else {
        letterInput.value = '';
        letterInput.placeholder = 'Неверно! Попробуйте еще раз.';
    }
});