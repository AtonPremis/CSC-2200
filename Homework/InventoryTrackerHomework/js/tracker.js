"use strict";

document.addEventListener("DOMContentLoaded", function() {
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
        let inventoryList = document.getElementById("inventoryList");
        inventoryList.innerHTML = "";
        for (let i = 0; i < inventoryList.length; i++) {
            
        }
    }
})