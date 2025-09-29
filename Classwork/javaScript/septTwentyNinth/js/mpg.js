function calcMPG() {
    let miles = parseFloat(document.getElementById("miles").value);
    let gallons = parseFloat(document.getElementById("gallons").value);

    let errorString = "";

    if (isNaN(miles)) {
        errorString = "Miles must be a number";
    }

    if (isNaN(gallons)) {
        errorString += "Gallons must be a number";
    }

    if (errorString == "") {
        let mpg = miles / gallons;
    }

    console.log(`Miles: ${miles}`);
    console.log(`Gallons: ${gallons}`);
    // let oMiles = "Miles" + miles + "Is Good";
    // console.log(oMiles);
    // console.log(`gallons: ${gallons} Is Good and ${miles} Is Good`);
}