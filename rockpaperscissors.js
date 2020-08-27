//Rock Paper Scissors Function
function rockPaperScissors (){
//variables
const rock = document.querySelector('button');
const paper = rock.nextElementSibling;
const scissors = paper.nextElementSibling;
const refresh = scissors.nextElementSibling;
let paragraph = document.createElement('p');
let wins = document.querySelector('#wins');
let loses = document.querySelector('#loses');
let ties = document.querySelector('#ties');
let currentstreak = document.querySelector('#streak');
let bestStreak = document.querySelector('#beststreak');
let winRate = document.querySelector('#winrate');
let gamesPlayed = document.querySelector('#games-played');
paragraph.id = "win-or-lose";
const comp = document.querySelector('.comp');
let computerText = document.querySelector('p');
let text = '';
let counter = 0;
let counterloses = 0;
let counterTies = 0;
let counterstreak = 0;
let gameCounter = 0;
let didYouwin = '';
//functionality of rock paper scissors
function computer () {
// random element
    let random = Math.floor(Math.random()* 3);
    let arr = ['rock','paper','scissors'];
    let computerChoice = arr[random];

        computerText.innerHTML = `You choose ${this.value} and Computer chooses ${computerChoice}.`;
        if (computerChoice === this.value) {
            paragraph.innerHTML = 'Its a tie.'
            comp.appendChild(paragraph)
            counterTies++;
            counterstreak = 0;
            didYouwin = 'tie';
        } else if (computerChoice === 'paper' && this.value === 'rock') {
            paragraph.innerHTML = 'Paper beats Rock! You lose!';
            comp.appendChild(paragraph);
            counterloses++;
            counterstreak = 0;
            didYouwin = 'loss';
        } else if (computerChoice === 'scissors' && this.value === 'rock') {
            paragraph.innerHTML = 'Rock beats Scissors! You win!';
            comp.appendChild(paragraph);
            counter++;
            counterstreak++;
            didYouwin = 'win';
        } else if (computerChoice === 'rock' && this.value === 'paper') {
            paragraph.innerHTML = 'Paper beats Rock! You win!';
            comp.appendChild(paragraph);
            counter++;
            counterstreak++;
            didYouwin = 'win';
        } else if (computerChoice === 'scissors' && this.value === 'paper') {
            paragraph.innerHTML = 'Scissors beats Paper! You lose!';
            comp.appendChild(paragraph);
            counterloses++;
            counterstreak = 0;
            didYouwin = 'loss';
        } else if (computerChoice === 'rock' && this.value === 'scissors') {
            paragraph.innerHTML = 'Rock beats Scissors! You lose!';
            comp.appendChild(paragraph);
            counterloses++;
            counterstreak = 0;
            didYouwin = 'loss';
        } else if (computerChoice === 'paper' && this.value === 'scissors') {
            paragraph.innerHTML = 'Scissors beats Paper! You win!';
            comp.appendChild(paragraph);
            counter++;
            counterstreak++;
            didYouwin = 'win';
        } if (counterstreak >= currentstreak.innerHTML && counterstreak >= bestStreak.innerHTML ) {
            bestStreak.innerHTML = counterstreak
        }
        gameCounter++;
        currentstreak.innerHTML = counterstreak;
        gamesPlayed.innerHTML = gameCounter;
        wins.innerHTML = counter;
        loses.innerHTML = counterloses;
        ties.innerHTML = counterTies;
        winRate.innerHTML = Math.round((counter / gameCounter) * 100) + '%';
        if (counter % 10 === 0 && counter !== 0) {
            alert("Looks like you are enjoying the game. Would you like to leave a rating?")
        }
    }

function reload () {
    location.reload();
}

rock.onclick = computer;
paper.onclick = computer;
scissors.onclick = computer;
refresh.onclick = reload;
}
rockPaperScissors();
function starRating () {
//rating 
//variables
const star1 = document.querySelector('#star1');
const star2 = document.querySelector('#star2');
const star3 = document.querySelector('#star3');
const star4 = document.querySelector('#star4');
const star5 = document.querySelector('#star5');
const stars = document.querySelector('.star').children;

// fas === solid far === empty
function rating () {
    //do a thing for every chidl element of stars
    for (i = 0; i < stars.length; i++) {
        //checking if the star is clicked
        if (stars[i] === event.target) {
            //specific check for star5
            if (star5.classList.contains('fas') && event.target === star5) {
                star5.classList.remove('fas');
                star5.classList.add('far');
            }
            //checking for empty star then change to solid star
            else if (stars[i].classList.contains('far')) {
                stars[i].classList.remove('far');
                stars[i].classList.add('fas');
                //below is jquery attempt
               /* $("div.star:nth-child(3)").prevAll().removeClass('far');
                $("div.star:nth-child(3)").nextAll().addClass('fas'); */
                for (j = 0; j < stars.length; j++) {
                    
                    if (j >= i) {
                        break;
                    }
                    stars[j].classList.remove('far');
                    stars[j].classList.add('fas');
                } // below is first attempt
               /* stars[i - 1].classList.remove('far');
                stars[i - 1].classList.add('fas');
                stars[i - 2].classList.remove('far');
                stars[i - 2].classList.add('fas');
                stars[i - 3].classList.remove('far');
                stars[i - 3].classList.add('fas');
                stars[i - 4].classList.remove('far');
                stars[i - 4].classList.add('fas'); */
                //checking for solid star and next star is solid too then changing to empty star
            }  else if (stars[i].classList.contains('fas') && stars[i + 1].classList.contains('fas')) {
                for (k = stars.length - 1; k >= 0; k--) {
                    if (k <= i) {
                        break;
                    }
                    stars[k].classList.remove('fas');
                    stars[k].classList.add('far'); 
                } // below is first attempt
                /*stars[i + 1].classList.remove('fas');
                stars[i + 1].classList.add('far');
                stars[i + 2].classList.remove('fas');
                stars[i + 2].classList.add('far');
                stars[i + 3].classList.remove('fas');
                stars[i + 3].classList.add('far');
                stars[i + 4].classList.remove('fas');
                stars[i + 4].classList.add('far'); */
            } //checking if solid then changing to empty
             else if (stars[i].classList.contains('fas')) {
                stars[i].classList.remove('fas');
                stars[i].classList.add('far');
                for (l = stars.length - 1; l >= 0; l--) {
                    if (l <= i) {
                        break;
                    }
                    stars[l].classList.remove('fas');
                    stars[l].classList.add('far'); 
                } //below is first attempt
               /* stars[i + 1].classList.remove('fas');
                stars[i + 1].classList.add('far');
                stars[i + 2].classList.remove('fas');
                stars[i + 2].classList.add('far');
                stars[i + 3].classList.remove('fas');
                stars[i + 3].classList.add('far');
                stars[i + 4].classList.remove('fas');
                stars[i + 4].classList.add('far'); */
                
            }
        }
    }
    star1.style.color = 'red';
    star2.style.color = 'red';
    star3.style.color = 'red';
    star4.style.color = 'red';
    star5.style.color = 'red';
}

star1.addEventListener('click',rating);
star2.addEventListener('click',rating);
star3.addEventListener('click',rating);
star4.addEventListener('click',rating);
star5.addEventListener('click',rating);
//rating hover

function ratingHover() {
        event.target.style.color = 'grey'; 
      
        for (n = 0; n < stars.length; n++) {
            if (stars[n] === event.target) {
                for (o = 0; o < stars.length; o++) {
                    if (o >= n) {
                        break;
                    } else {
                    stars[o].style.color = 'grey'; }
                }
            
            }
            
        }
};

function ratingUnhover () {
    event.target.style.color = 'red'; 
      
    for (n = 0; n < stars.length; n++) {
        if (stars[n] === event.target) {
            star1.style.color = 'red';
        star2.style.color = 'red';
        star3.style.color = 'red';
        star4.style.color = 'red';
        star5.style.color = 'red'; 
        }
    }   
};

star1.addEventListener('mouseover', ratingHover);
star1.addEventListener('mouseout', ratingUnhover);
star2.addEventListener('mouseover', ratingHover);
star2.addEventListener('mouseout', ratingUnhover);
star3.addEventListener('mouseover', ratingHover);
star3.addEventListener('mouseout', ratingUnhover);
star4.addEventListener('mouseover', ratingHover);
star4.addEventListener('mouseout', ratingUnhover);
star5.addEventListener('mouseover', ratingHover);
star5.addEventListener('mouseout', ratingUnhover);
//Submit 

const submitReview = document.querySelector('#submit');
const fullRating = document.querySelector('.full-rating');

function submit () {
    const ratingLeft = document.createElement('p');
    let newRating = fullRating.appendChild(ratingLeft);
    newRating.id = 'review';
    if (star5.classList.contains('fas')) {
        newRating.innerHTML = '5 STARS!';
    } else if (star4.classList.contains('fas')) {
        newRating.innerHTML = '4 Stars!'
    } else if (star3.classList.contains('fas')) {
        newRating.innerHTML = '3 Stars.'
    } else if (star2.classList.contains('fas')) {
        newRating.innerHTML = '2 Stars.'
    } else if (star1.classList.contains('fas')) {
        newRating.innerHTML = '1 Star. :('
    } else {
        newRating.innerHTML = '0 stars. That bad huh?'
    } 
    for (m = 0; m < stars.length; m++) {
        stars[m].classList.remove('fas');
        stars[m].classList.add('far');
    } // below is first attempt
   /* star1.classList.remove('fas');
    star1.classList.add('far');
    star2.classList.remove('fas');
    star2.classList.add('far');
    star3.classList.remove('fas');
    star3.classList.add('far');
    star4.classList.remove('fas');
    star4.classList.add('far');
    star5.classList.remove('fas');
    star5.classList.add('far');*/
}
submitReview.onclick = submit;
}

starRating();

//attempt 2 for rating system
/*
const s1 = document.querySelector('#box5');
const s2 = document.querySelector('#box4');
const s3 = document.querySelector('#box3');
const s4 = document.querySelector('#box2');
const s5 = document.querySelector('#box1');



function attempt () {




    event.target.style.backgroundColor = 'blue';
    console.log('change to blue')


}

s1.addEventListener('click', attempt);
s2.addEventListener('click', attempt);
s3.addEventListener('click', attempt);
s4.addEventListener('click', attempt);
s5.addEventListener('click', attempt);
*/