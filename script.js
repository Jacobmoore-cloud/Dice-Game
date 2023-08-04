// let randomNumber = Math.floor(Math.random() * 6) + 1;

// let randomImage1 = 'images/dice' + randomNumber + '.png';

// let imageSource = document.querySelector('.image1');
// imageSource.setAttribute('src', randomImage1);



// let randomNumber2 = Math.floor(Math.random() * 6) +1;

// let randomImage2 = 'images/dice' + randomNumber2 + '.png';

// let imageSource2 = document.querySelector('.img2');
// imageSource2.setAttribute('src', randomImage2);


// if (randomNumber > randomNumber2) {
//   document.querySelector('.text').innerHTML = 'Player 1 Wins!';
// }
// else if (randomNumber2 > randomNumber) {
//   document.querySelector('.text').innerHTML = 'Player 2 Wins!';
// }
// else {
//   document.querySelector('.text').innerHTML = 'Draw!';
// }



function diceGame () {
  let randomNumber = Math.floor(Math.random() * 6) + 1;

  let randomImage1 = 'images/dice' + randomNumber + '.png';

  let imageSource = document.querySelector('.image1');
  imageSource.setAttribute('src', randomImage1);



  let randomNumber2 = Math.floor(Math.random() * 6) +1;

  let randomImage2 = 'images/dice' + randomNumber2 + '.png';

  let imageSource2 = document.querySelector('.img2');
  imageSource2.setAttribute('src', randomImage2);




  if (randomNumber > randomNumber2) {
    document.querySelector('.text').innerHTML = 'Player 1 Wins!';
  }
  else if (randomNumber2 > randomNumber) {
    document.querySelector('.text').innerHTML = 'Player 2 Wins!';
  }
  else {
    document.querySelector('.text').innerHTML = 'Draw!';
  }
}