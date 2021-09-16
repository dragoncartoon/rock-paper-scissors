const humanScore = 0;
const robotScore = 5;
function isGameOver() {
  if (humanScore === 5 || robotScore === 5) {
    // gameButton.forEach((btn) => {
    //   btn.disabled = true;
    // });
    return ; 
  }
}

console.log(isGameOver());
