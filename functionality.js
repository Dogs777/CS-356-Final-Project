/*
    Author: Maxwell Rosenthal
    Assignment: Assignment 3
    Course: CS-356: Dynamic Webpage Development
    Date: November 23, 2022
    Description: JavaScript functionality to be applied to the html documents of this assignment.
 */

// Declarations and initializations.

let noSearchBar = false; // Create a tracker to track whether or not there is a search bar that is initialized to true.
let date = new Date();
let year, month, day;

// Functions.

/** * * * * * * * * * * * *
 * UI Scaling Functionality
 * * * * * * * * * * * * * */

/**
 * Adjusts UI elements based on screen size.
 */
function sizeAdjust()
{
    const setupAsync = async () => // Asynchronously adjust the size.
    {
        if (window.innerWidth >= 1100) // If the window width is greater than or equal to 1000 pixels...
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


        if (window.innerWidth >= 700) // If the window width is greater than or equal to 700 pixels...
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

/** * * * * * * * * * * * * * *
 * BMI/BMR Calculator Functions
 * * * * * * * * * * * * * * * */

//This function is for the BMR calculator
// Male BMR: 88.362 + (13.397 * weight in kg) + (4.799 * height in cm) - (5.677 * age in years)
//Female BMR: 447.593 + (9.247 * weight in kg) + (3.098 * height in cm) - (4.330 * age in years)
function calculate() {
    var sex = document.getElementById('sex').value;
    var unit_height = document.getElementById('unit_height').value;
    var unit_weight = document.getElementById('unit_weight').value;
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;
    var age = document.getElementById('age').value;
    var bmr;

    try
    {
        weight = Number(weight);
        age = Number(age)
    }

    catch
    {
        window.alert("You must a enter positive, integer, non-zero data for each element in the calculator (except for height if ft' in\" is selected).");
        return;
    }

    if (Number.isNaN(weight) || weight <= 0 || !Number.isSafeInteger(weight) || Number.isNaN(age) || age <= 0 || !Number.isSafeInteger(age))
    {
        window.alert("You must a enter positive, integer, non-zero data for each element in the calculator (except for height if ft' in\" is selected).");
        return;
    }

    if (unit_weight == 'lbs') {
        weight = weight / 2.20462;
    }
    if (unit_height == 'ft / in') {
        try
        {
            feet = Number(height.substring(0, height.indexOf("'")));
            inches = Number(height.substring((height.indexOf(' ') + 1), height.indexOf('"')));
        }

        catch
        {
            window.alert("You must enter valid integer data in the \"ft' in\"\" format.");
            return;
        }

        if (Number.isNaN(feet) || feet < 1 || Number.isNaN(inches) || inches < 0 || inches > 11)
        {
            window.alert("You must enter valid integer data in the \"ft' in\"\" format.");
            return;
        }

        height = (feet * 30.48) + (inches * 2.54);
    }

    else
    {
        try { height = Number(height); }
    
        catch
        {
            window.alert("You must a enter positive, integer, non-zero data for each element in the calculator (except for height if ft' in\" is selected).");
            return;
        }

        if (Number.isNaN(height) || height <= 0 || !Number.isSafeInteger(height))
        {
            window.alert("You must a enter positive, integer, non-zero data for each element in the calculator (except for height if ft' in\" is selected).");
            return;
        }
    }

    if (age > 128 || weight > 640 || height > 384) {
        window.alert("One or more of the values seem to have been entered in excess. Please verify your input.");
        return;
    }

    if (sex == 'male')
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);

    else
        bmr = 447 + (9.247 * weight) + (3.098 * height) - (4.33 * age);

    //values for BMR and casted as string
    bmr = Math.round(bmr);
    bmr_string = bmr.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    //values for BMI and casted as string
    bmi = weight / ((height / 100) * (height / 100));
    bmi_string = (Math.round(bmi * 100) / 100).toString();

    //for water intake, I actually convert weight back into lbs because you should have your ~ bodyweight in oz of water
    water = Math.round(weight * 220.462) / 100;
        showbmr();
        document.getElemenyById('bmr_button').onclick() = showbmr();
        document.getElemenyById('bmi_button').onclick() = showbmi();
        document.getElemenyById('water_button').onclick() = showwater();
        document.getElementById('sedentary').innerHTML = Math.round(bmr * 1.2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        document.getElementById('light').innerHTML = Math.round(bmr * 1.375).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        document.getElementById('moderate').innerHTML = Math.round(bmr * 1.465).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        document.getElementById('advanced').innerHTML = Math.round(bmr * 1.55).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        document.getElementById('extreme').innerHTML = Math.round(bmr * 1.725).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        document.getElementById('elite').innerHTML = Math.round(bmr * 1.9).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//The three function below are for switching between views of BMR, BMI, and water
function showbmr() {
    try {
        document.getElementById('switch_text').innerHTML = ("Your estimated BMR is " + bmr_string + " calories.");
    }catch(error) {
        document.getElementById('switch_text').innerHTML = ("Please enter and submit data in the above fields for your BMR.");
    }
}

function showbmi() {
    try {
        document.getElementById('switch_text').innerHTML = ("Your BMI is " + bmi_string);
    }catch(error) {
        document.getElementById('switch_text').innerHTML = ("Please enter and submit data in the above fields for your BMI.");
    }
}

function showwater() {
    try {
        document.getElementById('switch_text').innerHTML = ("You should drink about " + water + " ounces, or " + (Math.round(water * 2.95735) / 100) + " liters");
    } catch(error) {
        document.getElementById('switch_text').innerHTML = ("Please enter and submit data in the above fields for your water intake.");
    }
}

/** * * * * * * * * *
 * Calendar Functions
 * * * * * * * * * * */

/**
 * Runs initialization functionality for the fitness tracker calendar.
 */
function calendarInitialization()
{
    sizeAdjust();
    buildCalendar();
} // End function calendarInitialization().

/**
 * Builds an HTML calendar string and applies it to the main calendar HTML code.
 */
function buildCalendar()
{
    // Declarations and initializations.

    year = date.getFullYear(); // Obtain the year.
    month = date.getMonth(); // Obtain the month
    day = date.getDate(); // Obtain the day.

    // Execution.

    // Build the HTML string starting off by applying the month and year banner row.

    let htmlString = "<table id = 'caltable'> <tr> <td colspan = '7' class = \"monthYear\">" +
        date.toLocaleString('en-US', {month: 'long'}) + ", " + year + "</td> </tr>";

    // Add a row of buttons for calendar interaction.

    htmlString += "<tr> <td colspan = '7'> <input type = \"button\" id = \"backYear\" value = \"<<\"\
        onclick = \"date = new Date(year - 1, month, day); buildCalendar();\" class = \"button\"/>"; // - 1 Year.

    htmlString += "<input type = \"button\" id = \"backMonth\" value = \"<\"\
        onclick = \"date = new Date(year, month - 1, day); buildCalendar();\" class = \"button\"/>"; // - 1 Month.

    htmlString += "<input type = \"button\" id = \"today\" value = \"Today\"\
        onclick = \"date = new Date(); buildCalendar();\" class = \"button\"/>"; // - Reset the date.

    htmlString += "<input type = \"button\" id = \"forwardMonth\" value = \">\"\
        onclick = \"date = new Date(year, month + 1, day); buildCalendar();\" class = \"button\"/>"; // + 1 Month.

    htmlString += "<input type = \"button\" id = \"forwardYear\" value = \">>\"\
        onclick = \"date = new Date(year + 1, month, day); buildCalendar();\" class = \"button\"/> </td> </tr>"; // + 1 Year.

    // Apply the day letter heading row.

    htmlString += "<tr> <td>S</td> <td>M</td> <td>T</td> <td>W</td> <td>T</td> <td>F</td> <td>S</td> </tr>"; 

    // Populate the calendar with date information.

    htmlString += obtainDatesHTML();

    // Update the HTML code with the acquired information.

    document.getElementById("calendar").innerHTML = htmlString + "</table>";
} // End function buildCalendar().

/**
 * Obtains and returns a string with the date related calendar information for a given month of a year.
 * @returns An HTML string with the date information for a given month of a year.
 */
function obtainDatesHTML()
{
    // Declarations and initializations.

    let firstWeekday = new Date(year, month, 1).getDay(); // Obtain the first weekday of the month.
    let lastDay = new Date(year, month + 1, 0).getDate(); // Obtain the last day of the month by looking at the first day of the next month.
    let daysRemaining = lastDay; // Establish how many days are left to be added.
    let thisYear = new Date().getFullYear(); // Get the current year.
    let thisMonth = new Date().getMonth(); // Get the current month.
    let datesString = ""; // Create the row string.

    // Execution.

    for (let rows = 0; rows < 6; rows++) // Loop six times (once for each row).
    {
        datesString += "<tr>";

        for (let i = 0; i < 7; i++) // Loop seven times (once for each column).
        {
            if (daysRemaining != 0 && (daysRemaining < lastDay || i == firstWeekday)) // If there are more days to be added and numbers have been added or it is the first weekday.
            {
                if (lastDay - daysRemaining + 1 == day && thisMonth == month && thisYear == year) // If it's the current date to be highlighted.
                    datesString += "<td id = \"presentDay\">";

                else if (i == 0 || i == 6) // If it's a weekend.
                    datesString += "<td class = \"weekend\">";

                else // It's any other day.
                    datesString += "<td class = \"weekday\">";

                datesString += lastDay - daysRemaining + 1;
                daysRemaining--;
            } // if (daysRemaining != 0 && (daysRemaining < lastDay || i == firstWeekday)).

            else // It's not a date displaying td.
                datesString += "<td class = \"blankDay\">x";

            datesString += "</td>";
        } // End for (let i = 0; i < 7; i++).

        datesString += "</tr>";
    } // End while (daysRemaining != 0).

    return datesString;
} // End function obtainDatesHTML().
