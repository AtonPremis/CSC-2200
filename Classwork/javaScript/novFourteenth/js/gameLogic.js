document.addEventListener("DOMContentLoaded", function() {
    let game = {
        rules : [
            { id: 0, item : 'rock', img : 'rock.PNG',
                alt: "A Rock", beats: "scissors"},
            { id: 1, item : 'paper', img : 'paper.PNG',
                alt: "Paper", beats: "rock" },
            { id: 2, item : 'scissors', img : 'scissors.PNG',
                alt: "Scissors", beats: "paper" },
        ],
        getRandInt : function(min, max ) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        messages: {
            win: {message: "Winner", img: "homerWin.jpg", alt: "Homer Win"},
            lost: {message: "Loser", img: "homerLost.jpg", alt: "Homer Lost"},
            tied: {message: "Tied", img: "homerTied.jpg", alt: "Homer Tied"},
        },
        evaluateResults : function( uObj, cObj){
            if ( uObj.beats === cObj.item ){
                this.state.wins++;
                return this.messages.win;
            } else if ( cObj.beats === uObj.item ){
                this.state.losses++;
                return this.messages.lost;
            } else if ( cObj.item === uObj.item ){
                this.state.draws++;
                return this.messages.tied;
            } else {
                // Todo: To this better
                alert(" Warning danger")
            }
        },
        state: {
            wins: 0,
            losses: 0,
            draws: 0
        }
    }
    let ui = {
        displayImage: function( imgObj, disId){
            const imgHTML = `<img src="imgs/${imgObj.img}"
                alt="${imgObj.alt}" width="100px" />`;
            document.getElementById(disId).innerHTML = imgHTML;
        },
        updateResultMessage(result) {
            const inHTML = result.message;
            const inner = `<img src=${result.img} width="100px" height="100px" alt=${result.alt} />`;
            document.getElementById("homerResults").innerHTML = inner + inHTML;
        },
        updateGameState(state) {
            document.getElementById("wins").innerHTML = state.wins;
            document.getElementById("loss").innerHTML = state.losses;
            document.getElementById("draws").innerHTML = state.draws;
        }

    }
    document.getElementById("mainButton")
        .addEventListener("click", function(event) {
            let sel1 = parseInt(document.getElementById("sel1").value);
            if ( isNaN( sel1 )){
                alert( "Select is NAN")
            } else if ( sel1 < 0 || sel1 > 2 ){
                alert( "Select is Bad input");
            } else {
                let gObj = game.rules[sel1];
                ui.displayImage(gObj, "uPick");
                let cPick = game.getRandInt(0,2);
                // ToDo: make sure cPick is a 0, 1, 2
                let computerObj = game.rules[cPick];
                ui.displayImage(computerObj, "cPick");

                const result = game.evaluateResults(gObj, computerObj);
                ui.updateResultMessage(result);
                ui.updateGameState(game.state);
            }

        });
});