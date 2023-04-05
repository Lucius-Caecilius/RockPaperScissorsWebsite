console.log("Hello World");

computer_options = ["Rock", "Paper", "Scissors"]

function logic(user_input){
    let computer_move = (computer_options[Math.floor(Math.random() * 3)])
    console.log(user_input)
    console.log(computer_move)
    if(computer_move == user_input){
        results = ("Draw")
    }
    if(user_input == "Rock"){
        if(computer_move == "Paper"){
        results = ("Computer Wins!")
        }
        if(computer_move == "Scissors"){
        results = ("You win!")
        }
    }
    if(user_input == "Paper"){
        if(computer_move == "Scissors"){
        results = ("Computer Wins!")
        }
        if(computer_move == "Rock"){
        results = ("You win!")
        }
    }
    if(user_input == "Scissors"){
        if(computer_move == "Rock"){
        results = ("Computer Wins!")
        }
        if(computer_move == "Paper"){
        results = ("You win!")
        }
    }
    document.getElementById("user_move").innerHTML = "Your move was: " + user_input
    document.getElementById("computer_move").innerHTML = "The computer's move was: " + computer_move
    document.getElementById("results").innerHTML = results
}

document.getElementById("rock").addEventListener('click', function(){
    // alert("You clicked Rock");
    logic("Rock")
});

document.getElementById("paper").addEventListener('click', function(){
    // alert("You clicked Paper");
    logic("Paper")
});

document.getElementById("scissors").addEventListener('click', function(){
    // alert("You clicked Scissors");
    logic("Scissors")
});