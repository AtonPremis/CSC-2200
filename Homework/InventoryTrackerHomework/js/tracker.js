"use strict";

document.addEventListener("DOMContentLoaded", function() {
    const totalValue = document.getElementById("totalValue");
    let inventoryList = document.getElementById("inventoryList");
    let itemList = [];
    let countList = [];
    let priceList = [];

    document.addEventListener("submit", function(event) {
        event.preventDefault();
        const itemName = document.getElementById("itemName").value.trim();
        const count = document.getElementById("count").value;
        const pricePerItem = document.getElementById("pricePerItem").value;

        itemList.push(itemName);
        countList.push(parseInt(count));
        priceList.push(parseFloat(pricePerItem));

        displayItems();
        document.getElementById("itemName").value = "";
        document.getElementById("count").value = "";
        document.getElementById("pricePerItem").value = "";
    })

    function displayItems() {
        let totalValueNumber = 0;
        inventoryList.innerHTML = "";
        for (let i = 0; i < itemList.length; i++) {
            let inventoryItem = document.createElement("div");
            inventoryItem.classList.add("inventoryItem");
            inventoryItem.innerHTML = `
                <p>${itemList[i]}</p>
                <p>Count: ${countList[i]}</p>
                <p>$${priceList[i]} each</p>
                <button data-index="${i}">Reduce</button>
            `;
            inventoryList.appendChild(inventoryItem);
            totalValueNumber += priceList[i] * countList[i];
        }

        totalValue.innerHTML = `Total Value: $${totalValueNumber.toFixed(2)}`;
    }

    inventoryList.addEventListener("click", (event) => {
        if (event.target.tagName === "BUTTON") {
            const index = event.target.getAttribute("data-index");
            countList[index] -= 1;
            if (countList[index] === 0) {
                itemList.splice(index, 1);
                countList.splice(index, 1);
                priceList.splice(index, 1);
                displayItems();
                return;
            }

            displayItems();
        }
    })
})