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
        evaluateResults : function( uObj, cObj){
            if ( uObj.beats === cObj.item ){
                return "You Win";
            } else if ( cObj.beats === uObj.item ){
                return "You Lose"
            } else if ( cObj.item === uObj.item ){
                return "Its a tie";
            } else {
                // Todo: To this better
                alert(" Warning danger")
            }
        }
    }
    let ui = {
        displayImage: function( imgObj, disId){
            const imgHTML = `<img src="imgs/${imgObj.img}"
                alt="${imgObj.alt}" width="100px" />`;
            document.getElementById(disId).innerHTML = imgHTML;
        }

    }
    document.getElementById("mainButton")
        .addEventListener("click", function(event) {
            alert("Clicked");
            let sel1 = parseInt(document.getElementById("sel1").value);
            if ( isNaN( sel1 )){
                alert( "Select is NAN")
            } else if ( sel1 < 0 || sel1 > 2 ){
                alert( "Select is Bab input");
            } else {
                let gObj = game.rules[sel1];
                ui.displayImage(gObj, "uPick");
                let cPick = game.getRandInt(0,2);
                // ToDo: make sure cPick is a 0, 1, 2
                let computerObj = game.rules[cPick];
                ui.displayImage(computerObj, "cPick");

            }

        });
})