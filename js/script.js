/*

*/

(function(){
    var choices = {Rock: 0, Paper: 1, Scissors: 2},
        matches = {Rock: "Scissors", Paper: "Rock", Scissors: "Paper"},
        playerOptions = document.getElementByClassName("player-options");

        play

})();








// var RockPaperScissors = (function () {
//     var winningMap = {Rock: "Scissors", Paper: "Rock", Scissors: "Paper"}; 

//     var choices = ["Rock", "Scissors", "Paper"];

//     //Gerar resposta aleatória para o computador
// 	var getComputerChoice = function () {
//     	return choices[ Math.floor(Math.random() * 3) ];
// 	};

// 	//Gerar resultados com base nas escolhas do jogador e do computador
//     var getWinner = function (playerChoice, computerChoice) {
//         if(playerChoice === computerChoice){
//         	return "Tie";
//     	}
//     	if(computerChoice === winningMap[playerChoice]){
//         	return "Player Wins";
//     	}
//     	return "Computer Wins";
//     };

//     //Closure
//     function RockPaperScissors(playerChoice) {
//         this.playerChoice = playerChoice;
//         this.computerChoice = getComputerChoice();
//         this.winner = getWinner(this.playerChoice, this.computerChoice);
//     }

//     //Mostrar as escolhas do jogador e do computador
//     RockPaperScissors.prototype.toString = function () {
//         return this.winner + " [Computer: " + choices[this.computerChoice] + ", Player: " + choices[this.playerChoice] + "]";
//     };

//     return RockPaperScissors;

// })();

