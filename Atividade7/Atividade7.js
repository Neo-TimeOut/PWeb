 function play(){
        
        const player_Choice = document.getElementById("player-choice").value;
        const opcoes = ['pedra', 'papel', 'tesoura'];
        computerChoice = Math.ceil(Math.random() * 3) - 1;
        computerChoice = opcoes[computerChoice];

        if (player_Choice === computerChoice){
            result = "Empate!";
        } else if (
            (player_Choice === 'pedra' && computerChoice === 'tesoura') ||
            (player_Choice === 'papel' && computerChoice === 'pedra') ||
            (player_Choice === 'tesoura' && computerChoice === 'papel')
        ) {
            result = "Você venceu!";
        } else {
            result = "Computador venceu!";
        }
        
        b = document.getElementById("alterar2");
        a = document.getElementById("alterar");
        a.innerHTML = `Escolha do Jogador: ${player_Choice} <br> Escolha do Computador: ${computerChoice}`;
        b.innerHTML = `${result}`;
    }
        