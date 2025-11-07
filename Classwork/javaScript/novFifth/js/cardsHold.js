"use strict";

document.addEventListener("DOMContentLoaded", function() {
    let deck = {
        cards: [],
        nextIndex: 0,
        build: function () {
            let suits = ["hearts", "spades", "clubs", "diamonds"];
            let values = [
                {value: 2, name: "2"}, {value: 3, name: "3"}, {value: 4, name: "4"},
                {value: 5, name: "5"}, {value: 6, name: "6"}, {value: 7, name: "7"},
                {value: 8, name: "8"}, {value: 9, name: "9"}, {value: 10, name: "10"},
                {value: 11, name: "J"}, {value: 12, name: "Q"}, {value: 13, name: "K"},
                {value: 14, name: "A"}
            ];
            this.cards = [];
            for (let i = 0; i < suits.length; i++) {
                let suit = suits[i];
                for (let j = 0; j < values.length; j++) {
                    let valueName = values[j];
                    let suitLetter = suit.charAt(0).toUpperCase();
                    let imageName = `${valueName.name}${suitLetter}.png`;
                    this.cards.push({
                        img: imageName,
                        value: valueName.value,
                        name: valueName.name,
                        suit: suit
                    });
                }
            }
        }
    }
    deck.build();
});