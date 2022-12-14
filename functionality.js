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

                // try
                // {
                //     if (document.getElementById('my_calendar') != null) {
                //         document.getElementById('my_calendar').style.width = "500px"
                //     }
                //     document.getElementById("home").innerHTML = "Home<span class='material-icons'>home</span > ";
                //     document.getElementById("news").innerHTML = "News<span class='material-symbols-outlined'>newspaper</span>";
                //     document.getElementById("bmr").innerHTML = "BMR<span class='material-symbols-outlined'>calculate</span>";
                //     document.getElementById("calendar1").innerHTML = "Calendar<span class='material-icons'>calendar_month</span > ";
                //     //document.getElementById("page1").style.width = "25%";
                //     //document.getElementById("page2").style.width = "25%";
                //     //document.getElementById("page3").style.width = "25%";
                //     //document.getElementById("page4").style.width = "25%";
                // }

                // catch {}
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

                // try
                // {
                //     if (document.getElementById('my_calendar') != null) {
                //         document.getElementById('my_calendar').style.width = "300px";
                //         document.getElementById('my_calendar').style.margin = "0px";
                //     }
                //     document.getElementById("home").innerHTML = "<span class='material-icons'>home</span > ";
                //     document.getElementById("news").innerHTML = "<span class='material-symbols-outlined'>newspaper</span>";
                //     document.getElementById("bmr").innerHTML = "<span class='material-symbols-outlined'>calculate</span>";
                //     document.getElementById("calendar1").innerHTML = "<span class='material-icons'>calendar_month</span > ";
                //     //document.getElementById("page1").style.width = "50%";
                //     //document.getElementById("page2").style.width = "50%";
                //     //document.getElementById("page3").style.width = "50%";
                //     //document.getElementById("page4").style.width = "50%";
                // }

                // catch {}
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

function initializeCalendar(thisday)
{
    sizeAdjust();
    putcal(thisday);
}

// function duplicateResize() {
//     width = this.innerWidth;
//     height = this.innerHeight;
//     if (width >= 700) {
//         try
//         {
//             if (document.getElementById('my_calendar') != null) {
//                 document.getElementById('my_calendar').style.width = "500px"
//             }
//             document.getElementById("home").innerHTML = "Home<span class='material-icons'>home</span > ";
//             document.getElementById("news").innerHTML = "News<span class='material-symbols-outlined'>newspaper</span>";
//             document.getElementById("bmr").innerHTML = "BMR<span class='material-symbols-outlined'>calculate</span>";
//             document.getElementById("calendar1").innerHTML = "Calendar<span class='material-icons'>calendar_month</span > ";
//             //document.getElementById("page1").style.width = "25%";
//             //document.getElementById("page2").style.width = "25%";
//             //document.getElementById("page3").style.width = "25%";
//             //document.getElementById("page4").style.width = "25%";
//         }

//         catch {}
//     }
//     else {
//         try
//         {
//             if (document.getElementById('my_calendar') != null) {
//                 document.getElementById('my_calendar').style.width = "300px";
//                 document.getElementById('my_calendar').style.margin = "0px";
//             }
//             document.getElementById("home").innerHTML = "<span class='material-icons'>home</span > ";
//             document.getElementById("news").innerHTML = "<span class='material-symbols-outlined'>newspaper</span>";
//             document.getElementById("bmr").innerHTML = "<span class='material-symbols-outlined'>calculate</span>";
//             document.getElementById("calendar1").innerHTML = "<span class='material-icons'>calendar_month</span > ";
//             //document.getElementById("page1").style.width = "50%";
//             //document.getElementById("page2").style.width = "50%";
//             //document.getElementById("page3").style.width = "50%";
//             //document.getElementById("page4").style.width = "50%";            
//         }

//         catch {}
//     }
// }

var thisday = new Date(); //This is how the calendar knows what day the calendar is open and thus how to flip back to it and highlight it
var mn = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; //Array for month names
var maxdays = [31, 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; //Array for total days in month !NOTE February is determined later based on leap year
var monthchange = 0; //Checker used to change the month in the changecal method
var yearchange = 0; //Checker used to change the year in the changecal method
let currentDay = thisday.getDate() - 1;
let currentMonth = thisday.getMonth();

function bannerrow(monthname, somedate) {
    //This function creates the top of the calendar, including the month name, and buttons to change the month/year of the calendar
    var banstring = "";
    banstring += "<tr class='banner_cal'>";
    banstring += '<td  colspan="7">';
    banstring += "<button class='bannerbuttons' onclick='changecal(thisday, -12)'> << </button>";
    banstring += "<button class='bannerbuttons' onclick='changecal(thisday,-1)'> < </button>";
    banstring += monthname + " " + (somedate.getFullYear());
    banstring += "<button class='bannerbuttons' onclick='changecal(thisday, 1)'> > </button>";
    banstring += "<button class='bannerbuttons' onclick='changecal(thisday, 12)'> >> </button>";
    banstring += "</td>";
    banstring += "</tr>";
    return banstring;

}
function colheadrow() {
    //This function adds the days of the week to the top of the calendar
    var colstring = "";
    colstring += "<tr class='banner_cal'>";
    colstring += "<td> S </td><td> M </td><td> T </td><td> W </td><td> T </td><td> F </td><td> S </td>";
    colstring += "</tr>";
    return colstring;

}
function changecal(somedate, step) {
    //This function is what changes the calendar when the user presses the top buttons
    if (step == 1) {
        var newMonth = somedate.getMonth() + step;
        var newDate = new Date(somedate.getFullYear() + yearchange, newMonth + monthchange);
        monthchange++;
        putcal(newDate, false);
    }
    else if (step == -1) {
        var newMonth = somedate.getMonth() + step;
        var newDate = new Date(somedate.getFullYear() + yearchange, newMonth + monthchange);
        monthchange--;
        putcal(newDate, false);
    }
    else if (step == 12) {
        var newDate = new Date(somedate.getFullYear() + 1 + yearchange, somedate.getMonth() + monthchange);
        yearchange++;
        putcal(newDate, false);
    }
    else if (step == -12) {
        var newDate = new Date(somedate.getFullYear() - 1 + yearchange, somedate.getMonth() + monthchange);
        yearchange--;
        putcal(newDate, false);
    }
}

function returntoday() {
    //This function is what returns the calendar to the correct month, day, and year
    putcal(thisday, true);
    yearchange = 0;
    monthchange = 0;
}

function putmonth(firstdow, somemonth, todaybutton) {
    //This function puts the days of the week onto the calendar
    var rowstring = "";
    var counter = 1;
    for (let i = 0; i < 6; i++) {
        rowstring += "<tr>";
        for (let j = 0; j < 7; j++) {
            if ((i == 0 && j < firstdow) || counter > maxdays[somemonth]) {
                rowstring += "<td>";
            }
            else {
                if ((counter == thisday.getDate() && monthchange == 0 && yearchange == 0) || (counter == thisday.getDate() && todaybutton)) {
                    rowstring += "<td id = \"today\" onclick = \"clickDate(" + (counter - 1)  + "," + somemonth +  ");\"><a href = \"javascript:void(0)\">" + counter;
                    counter++;
                }
                else {
                    rowstring += "<td onclick = \"clickDate(" + (counter - 1) + "," + somemonth + ");\" style = \"background: rgb(235, 126, 126);\"><a href = \"javascript:void(0)\">" + counter;
                    counter++;
                }
            }
            rowstring += "</a></td>";
        }
        rowstring += "</tr>";
    }
    return rowstring;
}

function putcal(somedate, todaybutton) {
    //This is the function that calls all of the various helper-methods to create the full calendar
    var someyear = somedate.getFullYear();
    var somemonth = somedate.getMonth();
    var firstday = new Date(someyear, somemonth, 1);
    var firstdow = firstday.getDay();
    if ((someyear % 4 == 0 && someyear % 100 != 0) || (someyear % 400 == 0)) {
        maxdays[1] = 29;
    }
    else {
        maxdays[1] = 28;
    }


    var somedatename = mn[somedate.getMonth()];

    var htmlstring = "";
    htmlstring += "<table id = 'my_calendar' style='text-align: center; border: 2px; border-style: solid; margin: auto; margin-top: 10px; padding: 10px; border-radius: 10px; width: 95%; height: 500px; background: #ffb3b3; font-size: 150 %; '>";
    htmlstring += bannerrow(somedatename, somedate);
    htmlstring += colheadrow();
    htmlstring += putmonth(firstdow, somemonth, todaybutton);
    htmlstring += "</table>";



    document.getElementById("calendar").innerHTML = htmlstring;
    // duplicateResize();
}



// End function calendarInitialization().

/**
 * Builds an HTML calendar string and applies it to the main calendar HTML code.
 */
let fitnessLogArray = new Array(12).fill(new Array(31).fill(""));

function clickDate(day, month) {
    fitnessLogArray[currentMonth][currentDay] = fitnessLog.value;

    fitnessLog.value = fitnessLogArray[month][day]

    currentDay = day;
    currentMonth = month;
}

