/*
1.Guardar as opções na variável "choices".
2.Guardar as combinações das opções na variável "matches".
3.Referenciar a classe "player-options";
4.
*/

(function(){
    var choices = {Rock: 0, Paper: 1, Scissors: 2},
        matches = {Rock: "Scissors", Paper: "Rock", Scissors: "Paper"},
        playerOptions = document.getElementsByClassName("player-options"),
        pcOptions = document.getElementsByClassName("pc-options");

        //Função pega a opção do jogador e mostra na tela
        function chooseOption(evt){ 
            evt.preventDefault(); //Ele não executa o evento padrão do html
            choosed = document.getElementById("player-choice"); //Pega o elemento onde será mostrado a opção esocolhida pelo jogador
            choosed.src = evt.target.src; //Troca o source do recipiente pelo source do elemento escolhido pelo jogador.
            

        }
        //Adicionando o evento chooseOptions a cada target.
        for (var i = 0; i < playerOptions.length; i++) {
            playerOptions[i].addEventListener("click", chooseOption);
        };

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

