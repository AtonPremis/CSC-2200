"use strict";

document.addEventListener("DOMContentLoaded", function() {
    const totalValue = document.getElementById("totalValue");
    let itemList = [];
    let countList = [];
    let priceList = [];

    document.addEventListener("submit", function(event) {
        event.preventDefault();
        const itemName = document.getElementById("itemName").value.trim();
        const count = document.getElementById("count").value;
        const pricePerItem = document.getElementById("pricePerItem").value;

        itemList.push(itemName);
        countList.push(count);
        priceList.push(pricePerItem);

        displayItems();
    })

    function displayItems() {
        let totalValueNumber = 0;
        let inventoryList = document.getElementById("inventoryList");
        inventoryList.innerHTML = "";
        for (let i = 0; i < itemList.length; i++) {
            let inventoryItem = document.createElement("div");
            inventoryItem.classList.add("inventoryItem");
            inventoryItem.innerHTML = `
                <p>${itemList[i]}</p>
                <p>Count: ${countList[i]}</p>
                <p>$${priceList[i]} each</p>
                <button>Reduce</button>
            `;
            inventoryList.appendChild(inventoryItem);
            totalValueNumber += parseFloat(priceList[i]) * parseInt(countList[i]);
        }

        totalValue.innerHTML = `Total Value: $${totalValueNumber}`;
    }
})