function calcMPG() {
    let miles = parseFloat(document.getElementById("miles").value);
    let gallons = parseFloat(document.getElementById("gallons").value);

    let errorString = "";

    if (isNaN(miles)) {
        errorString = "<span style='color: red'>Miles must be a number</span>";
    }

    if (isNaN(gallons)) {
        errorString += "<span class='error'>Gallons must be a number</span>";
    }

    if (errorString == "") {
        let mpg = miles / gallons;
        errorString = `MPG: ${mpg}`;
    }

    let results = document.getElementById("results");
    results.innerHTML = errorString;

    console.log(`Miles: ${miles}`);
    console.log(`Gallons: ${gallons}`);
    // let oMiles = "Miles" + miles + "Is Good";
    // console.log(oMiles);
    // console.log(`gallons: ${gallons} Is Good and ${miles} Is Good`);
}