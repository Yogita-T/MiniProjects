function rpsGame(yourChoice) {
    let humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randToRpsInt());
    //console.log(yourChoice);

    results = decideWinner(humanChoice, botChoice);
    message = finalMessage(results);
    rpsFrontEnd(humanChoice, botChoice, message);
}

// converts random no between 0-1 to integer
function randToRpsInt() {
    return Math.floor(Math.random()*3);
}

function numberToChoice(number) {
    return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(yourChoice, computerChoice) {
    let rpsDatabase = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0}
    }

    let yourScore = rpsDatabase[yourChoice][computerChoice];
    return(yourScore);
}

function finalMessage(yourScore) {
    if (yourScore === 0) {
        return {'message': 'You lost!', 'color': 'red'}
    } else if (yourScore === 0.5) {
        return {'message': 'Draw!', 'color': 'yellow'}
    } else if(yourScore === 1) {
        return {'message': 'You won!', 'color': 'green'}
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    let imagesDatabase =  {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    // remove images after clicking
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    // adding divs after clicking to show final results
    let humanDiv = document.createElement('div');
    let botDiv = document.createElement('div');
    let messageDiv = document.createElement('div');
    humanDiv.id = "user-image-choice";
    botDiv.id = "computer-image-choice";
    messageDiv.id = "result-message";

    //console.log(humanDiv);
    humanDiv.innerHTML = "<img src='"+ imagesDatabase[humanImageChoice]+ "' height=150 width=150 style='box-shadow: 0px 10px 50px #FB8B24;'>";
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding= 30px;'> "+finalMessage['message']+" </h1>";
    botDiv.innerHTML = "<img src='"+ imagesDatabase[botImageChoice]+ "' height=150 width=150 style='box-shadow: 0px 10px 50px #d12a2a;'>";
    
    document.getElementById('game-display-box').appendChild(humanDiv);
    document.getElementById('game-display-box').appendChild(messageDiv);
    document.getElementById('game-display-box').appendChild(botDiv);
}

// This function stores initial pictures attributes to restore later
function storeInitialImages() {
    let imageRock = document.createElement('img');
    let imagePaper = document.createElement('img');
    let imageScissors = document.createElement('img');

    imageRock.id = "rock";
    imageRock.src = "https://media.istockphoto.com/id/170215830/photo/limestone.jpg?s=612x612&w=0&k=20&c=qkOXtIKgSbjSSWGPQdD-KAlh1_C5-U_B6_WpWMTRDzo=";
    imageRock.alt = "Rock";
    imageRock.setAttribute('onclick', 'rpsGame(this)');

    imagePaper.id = "paper";
    imagePaper.src = "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/notebook-paper-background-design-template-c114c2ed2104bd8b815cf7fbb2f34f44_screen.jpg?ts=1636989881";
    imagePaper.alt = "Paper";
    imagePaper.setAttribute('onclick', 'rpsGame(this)');

    imageScissors.id = "scissors";
    imageScissors.src = "https://media.istockphoto.com/id/139741364/photo/scissors-w-path.jpg?s=612x612&w=is&k=20&c=4zXzM4KeEgvDZdilVAKezlU5wnzUwTJZ66xfodW6BnI=";
    imageScissors.alt = "Scissors";
    imageScissors.setAttribute('onclick', 'rpsGame(this)');


    document.getElementById('game-display-box').appendChild(imageRock);
    document.getElementById('game-display-box').appendChild(imagePaper);
    document.getElementById('game-display-box').appendChild(imageScissors);
}
 // this resets the game user interface
function rpsGameReset() {
    document.getElementById('user-image-choice').remove();
    document.getElementById('result-message').remove();
    document.getElementById('computer-image-choice').remove();

    storeInitialImages();
}