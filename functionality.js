/*
    Author: Maxwell Rosenthal
    Assignment: Assignment 3
    Course: CS-356: Dynamic Webpage Development
    Date: November 23, 2022
    Description: JavaScript functionality to be applied to the html documents of this assignment.
 */

// Declarations and initializations.

let noSearchBar = false; // Create a tracker to track whether or not there is a search bar that is initialized to true.

// Functions.

/** * * * * * * * * * * * * *
 * Generalized functionality
 * * * * * * * * * * * * * */

/**
 * Adjusts UI elements based on screen size.
 */
function sizeAdjust()
{
    const setupAsync = async () => // Asynchronously adjust the size.
    {
        if (window.outerWidth >= 1100) // If the window width is greater than or equal to 1000 pixels...
        {
            try
            {
                for (const flexItemLeft of document.getElementsByClassName("flex-left"))
                {
                    flexItemLeft.classList.add("flex-item-left");

                    try { flexItemLeft.classList.remove("flex-item-vertical-horizontal"); }
                    catch {} // Catch and do nothing.

                    try { flexItemLeft.classList.remove("flex-item-vertical-vertical"); }
                    catch {} // Catch and do nothing.
                } // End for (const flexItemLeft of document.getElementsByClassName("flex-left")).

                for (const flexItemRight of document.getElementsByClassName("flex-right"))
                {
                    flexItemRight.classList.add("flex-item-right");

                    try { flexItemRight.classList.remove("flex-item-vertical-horizontal"); }
                    catch {} // Catch and do nothing.

                    try { flexItemRight.classList.remove("flex-item-vertical-vertical"); }
                    catch {} // Catch and do nothing.
                } // End for (const flexItemRight of document.getElementsByClassName("flex-right")).

                document.getElementById("submissionForm").height = "96%";
                document.getElementById("gridRSSBox").style.height = "0px";
                document.getElementById("gridRSSBox").style.height = String(document.getElementById("gridMapBox").clientHeight) + "px";
            } // End try.

            catch {} // Catch and do nothing.
        } // End if (window.outerWidth >= 1000).

        else // Otherwise...
        {
            try
            {
                for (const flexItemLeft of document.getElementsByClassName("flex-left"))
                {
                    flexItemLeft.classList.add("flex-item-vertical-horizontal");

                    try { flexItemLeft.classList.remove("flex-item-left"); }
                    catch {} // Catch and do nothing.

                    try { flexItemLeft.classList.remove("flex-item-vertical-vertical"); }
                    catch {} // Catch and do nothing.
                } // End for (const flexItemLeft of document.getElementsByClassName("flex-left")).

                for (const flexItemRight of document.getElementsByClassName("flex-right"))
                {
                    flexItemRight.classList.add("flex-item-vertical-horizontal");

                    try { flexItemRight.classList.remove("flex-item-right"); }
                    catch {} // Catch and do nothing.

                    try { flexItemRight.classList.remove("flex-item-vertical-vertical"); }
                    catch {} // Catch and do nothing.
                } // End for (const flexItemRight of document.getElementsByClassName("flex-right")).

                document.getElementById("submissionForm").height = "480px";
                document.getElementById("gridRSSBox").style.height = "0px";
                document.getElementById("gridRSSBox").style.height = String(document.getElementById("gridMapBox").clientHeight) + "px";
            } // End try.

            catch {} // Catch and do nothing.
        } // End else.


        if (window.outerWidth >= 700) // If the window width is greater than or equal to 700 pixels...
        {
            if (noSearchBar) // If there is currently no search bar...
            {
                noSearchBar = false; // Set noSearchBar to false.
                document.getElementById("searchBoxContainer").innerHTML = // Update the search box container's inner HTML to...
                    "<input id = \"searchBox\" type = \"search\" placeholder = \"Search...\" name = \"search\" required onkeyup = \"searchInput(event)\"></input>"; // contain the search box.

                // Change right50Verticals to right50s and add splits.
                try
                {
                    document.getElementById("right50").classList.add("right50");
                    document.getElementById("right50").classList.add("split");
                    document.getElementById("right50").classList.remove("rightVertical");
                } // End try.

                catch {} // Catch and do nothing.

                // Change right25Verticals to right25s and add splits.
                try
                {
                    document.getElementById("right25").classList.add("right25");
                    document.getElementById("right25").classList.add("split");
                    document.getElementById("right25").classList.remove("rightVertical");    
                } // End try.

                catch {} // Catch and do nothing.

                // Change left50Verticals to left50s and add splits.
                try
                {
                    document.getElementById("left50").classList.add("left50");
                    document.getElementById("left50").classList.add("split");
                    document.getElementById("left50").classList.remove("leftVertical");    
                } // End try.

                catch {} // Catch and do nothing.

                // Change left75Verticals to left75s and add splits.
                try
                {
                    document.getElementById("left75").classList.add("left75");
                    document.getElementById("left75").classList.add("split");
                    document.getElementById("left75").classList.remove("leftVertical");    
                } // End try.

                catch {} // Catch and do nothing.
            } // End if (noSearchBar).
        } // End if (window.outerWidth >= 700).

        else // Otherwise...
        {
            if (!noSearchBar) // If the search bar is in the webpage...
            {
                noSearchBar = true; // Set noSearchBar to true.
                document.getElementById("searchBox").remove(); // Remove the search box.

                // Change right50s to right50Verticals and remove splits.
                try
                {
                    document.getElementById("right50").classList.add("rightVertical");
                    document.getElementById("right50").classList.remove("split");
                    document.getElementById("right50").classList.remove("right50");
                } // End try.

                catch {} // Catch and do nothing.

                // Change right25s to right25Verticals and remove splits.
                try
                {
                    document.getElementById("right25").classList.add("rightVertical");
                    document.getElementById("right25").classList.remove("split");
                    document.getElementById("right25").classList.remove("right25");
                } // End try.

                catch {} // Catch and do nothing.

                // Change left50s to left50Verticals and remove splits.
                try
                {
                    document.getElementById("left50").classList.add("leftVertical");
                    document.getElementById("left50").classList.remove("split");
                    document.getElementById("left50").classList.remove("left50");
                } // End try.

                catch {} // Catch and do nothing.

                // Change left75s to left75Verticals and remove splits.
                try
                {
                    document.getElementById("left75").classList.add("leftVertical");
                    document.getElementById("left75").classList.remove("split");
                    document.getElementById("left75").classList.remove("left75");
                } // End try.

                catch {} // Catch and do nothing.
            } // End if (!noSearchBar).

            try
            {
                for (const flexItemLeft of document.getElementsByClassName("flex-left"))
                {
                    flexItemLeft.classList.add("flex-item-vertical-vertical");

                    try { flexItemLeft.classList.remove("flex-item-left"); }
                    catch {} // Catch and do nothing.

                    try { flexItemLeft.classList.remove("flex-item-vertical-horizontal"); }
                    catch {} // Catch and do nothing.
                } // End for (const flexItemLeft of document.getElementsByClassName("flex-left")).

                for (const flexItemRight of document.getElementsByClassName("flex-right"))
                {
                    flexItemRight.classList.add("flex-item-vertical-vertical");

                    try { flexItemRight.classList.remove("flex-item-right"); }
                    catch {} // Catch and do nothing.

                    try { flexItemRight.classList.remove("flex-item-vertical-horizontal"); }
                    catch {} // Catch and do nothing.
                } // End for (const flexItemRight of document.getElementsByClassName("flex-right")).
            } // End try.

            catch {} // Catch and do nothing.
        } // End else.
    } // End const setupAsync = async () =>.

    setupAsync(); // Setup asynchronously.
} // End function sizeAdjust().

/**
 * Code that will run the size adjustment function upon page resizing.
 */
window.onresize = function() { sizeAdjust(); }; // Adjust the size of UI elements as necessary upon page resize.

/** * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Navigation menu JavaScript - Code utilized from https://www.w3schools.com/howto/howto_js_sidenav.asp
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */ 

/**
 * Open the side navigation bar.
 */
function openNav()
{
    if (window.outerWidth >= 400) // If the page width is greater than or equal to 400 pixels...
        document.getElementById("mySidenav").style.width = "300px"; // Set the width of the side navigation to 300px.

    else // Otherwise...
        document.getElementById("mySidenav").style.width = "75%"; // Set the width of the side navigation to 75% of the window width.
} // Set the width of mySidenav to 250px.

/**
 * Set the width of the side navigation to 0.
 */
function closeNav() { document.getElementById("mySidenav").style.width = "0"; } // Set the width of mySidenav to 0px.

/** * * * * * * * * *
 * Search Functions
 * * * * * * * * * */

/**
 * Search for the inputted text if the user presses enter.
 * @param {*} event The event of the key press?
 */
function searchInput(event)
{
    if (event.key == "Enter")
    {
        input = searchBox.value; // Acquire the user's input from the text box and store it in the input variable.
        searchBox.value = ""; // Clear the search box.

        if (input.length > 0) // If the user entered something...
            window.open("https://search.brave.com/search?q=site%captechu.edu%20" + // Use brave search to query a specific site...
                encodeURIComponent(input)); // with the user's input after encoding it to a URI compatible format.
    } // End (e.which == 13).
}

/**
 * Prompt the user to enter text and search a website online for said text.
 */
function searchButton()
{
    // Declarations and initializations.

    let input; // Create a variable to store user input.

    if (noSearchBar) // If there is no search bar...
        input = prompt("Enter a query to search for."); // Acquire the user's input via a prompt and store it in the input variable.

    else // Otherwise...
    {
        input = searchBox.value; // Acquire the user's input from the text box and store it in the input variable.
        searchBox.value = ""; // Clear the search box.
    } // End else.

    if (input.length > 0) // If the user entered something...
        window.open("https://search.brave.com/search?q=site%3Acaptechu.edu%20" + // Use brave search to query a specific site...
            encodeURIComponent(input)); // with the user's input after encoding it to a URI compatible format.

    else // Otherwise...
        window.alert("You must enter something to search for."); // Tell the user that they must enter some form of input.
} // End function search().

/** * * * * * * * * * * * * * * * *
 * Nightwatchers split box functions
 * * * * * * * * * * * * * * * * * */

/**
 * Initialize the right split for the Nightwatchers page.
 */
function initializeRightBox()
{
    // Declarations and initializations.

    const d = (new Date).getDay(); // Acqure the current day of the week.
    let ballotID = "rcidCrUTpC64fYovdFKBnj"; // Create a varialbe to store the ballot ID, must be manually set each week.

    // Execution.

    if (d == 4) // If it is a Thursday...
        document.getElementById("nightwatersRightBox").innerHTML = "<iframe src=\"https://www.rcv123.org/ballot/" + ballotID + "?embed=true\" title=\"RCV123 Ballot\" width=\"100%\" height=\"700\"></iframe>"; // Set the link that of the ballot page.

    else if (d == 5) // If it is a Friday...
        document.getElementById("nightwatersRightBox").innerHTML = "<iframe src=\"https://www.rcv123.org/results/" + ballotID + "?embed=true\" title=\"RCV123 Ballot\" width=\"100%\" height=\"700\"></iframe>"; // Set the link to that of the results page.
} // End function initializeRightBox().

/**
 * Takes a nomination entry and appends it to a JSON file.
 */
function submitNomination()
{
    // Code utilized from https://evdokimovm.github.io/javascript/nodejs/2016/11/11/write-data-to-local-json-file-using-nodejs.html.

    let fs = require('fs');

    fs.readFile("nominations.json", 'utf-8', function(err, data)
    {
        if (err)
            throw err;

        let arrayOfObjects = JSON.parse(data);

        arrayOfObjects.users.push(JSON.stringify({name: nameBox.value, year: yearBox.value, videoID: videoIDBox.value}));
    }); // End fs.readFile("nominations.json", 'utf-8', function(err, data).

    fs.writeFile('./users.json', JSON.stringify(arrayOfObjects), 'utf-8', function(err)
    {
		if (err)
            throw err;
	}); // End fs.writeFile('./users.json', JSON.stringify(arrayOfObjects), 'utf-8', function(err).
} // End function submitNomination().

/** * * * * * * * * * * * * * * * *
 * Capitol Broadcast Trade functions
 * * * * * * * * * * * * * * * * * */
function placeOrder()
{
    // Declarations and initializations.

    let email = emailBox.value; // Acquire the user's email from the email box and store it in the email variable.

    // Email validation regex taken from https://www.w3resource.com/javascript/form/email-validation.php.
    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) // If the email is not valid...
    {
        window.alert("You must enter a valid email address."); // Prompt the user for a valid email address.
        return; // End the function's execution.
    } // End if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))).

    let orderMessage = orderBox.value; // Acquire the user's order message from the order box and store it in the orderMessage variable.

    if (orderMessage.length == 0) // If nothing was entered in the order box...
    {
        window.alert("You must enter what you want to purchase if you want to purchase something."); // Prompt the user for order details.
        return; // End the function's execution.
    } // End if (orderMessage.length == 0).

    // Execution.

    // Code utilized from https://www.tutorialspoint.com/how-to-read-and-write-a-file-using-javascript.

    let fs = require('fs');

    fs.writeFile("Orders/" + String(Math.floor(Math.random() * 100000000)) + ".txt", "Email:\n" + email + "\n\nOrder Message:\n" + orderMessage, (err) =>
    {
        if (err)
            throw err;

        else
        {
            window.alert("Your order request has been submitted! Keep an eye on your email for more information."); // Inform the user that their order has been submitted.
            emailBox.value = ""; // Clear the email box.
            orderMessage.value = ""; // Clear the order message box.
        } // End else.
    }); // End fs.writeFile("Orders/" + String(Math.floor(Math.random() * 100000000)) + ".txt", "Email:\n" + email + "\n\nOrder Message:\n" + orderMessage, (err) =>.
} // End function placeOrder().

//This function is for the BMR calculator
// Male BMR: 88.362 + (13.397 * weight in kg) + (4.799 * height in cm) - (5.677 * age in years)
//Female BMR: 447.593 + (9.247 * weight in kg) + (3.098 * height in cm) - (4.330 * age in years)
function calculate() {
    var gender = document.getElementById('gender').value;
    var unit_height = document.getElementById('unit_height').value;
    var unit_weight = document.getElementById('unit_weight').value;
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;
    var age = document.getElementById('age').value;
    var bmr;

    if (unit_weight == 'lbs') {
        weight = weight / 2.20462;
    }
    if (unit_height == 'ft / in') {
        feet = height.substring(0, height.indexOf("'"));
        inches = height.substring((height.indexOf(' ') + 1), height.indexOf('"'));
        height = (feet * 30.48) + (inches * 2.54);
    }


    if (gender == 'male') {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    }
    else if (gender == 'female') {
        bmr = 447 + (9.247 * weight) + (3.098 * height) - (4.33 * age);
    }
    bmr = Math.round(bmr);
    bmr_string = bmr.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    if (weight > 1200 || height > 544 || age > 244) {
        document.getElementById('bmr').innerHTML = ("Your estimated basal metabolic rate is extraordinarily high, Our suggestion is you seek a physician");

    }
    else {
        document.getElementById('bmr').innerHTML = ("Your estimated basal metabolic rate is " + bmr_string + " calories.");
        document.getElementById('sedentary').innerHTML = Math.round(bmr * 1.2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        document.getElementById('light').innerHTML = Math.round(bmr * 1.375).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        document.getElementById('moderate').innerHTML = Math.round(bmr * 1.465).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        document.getElementById('advanced').innerHTML = Math.round(bmr * 1.55).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        document.getElementById('extreme').innerHTML = Math.round(bmr * 1.725).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        document.getElementById('elite').innerHTML = Math.round(bmr * 1.9).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }


}
