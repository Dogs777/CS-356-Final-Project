var width, height;
window.onresize = window.onload = function () {
    width = this.innerWidth;
    height = this.innerHeight;
    if (width >= 700) {
        if (document.getElementById('table') != null) {
            document.getElementById("table").innerHTML = '<tr style="width: 100%;"><th id="page1" style="width: 25%; font-size: 100%; font-weight: normal;"><a href="https://www.sciencedaily.com/releases/2022/09/220920100754.htm">Are you an Early Bird or a Night Owl? Our Activity Patterns and Sleep Cycles Could Influence our Risk of Diseases,such as Type 2 Diabetes and Heart Disease.</a></th><th id="page2" style="width: 25%;"><img style="width: 100%;" src="images/sleep.jpg" /></th><th id="page3" style="width: 25%; font-weight: normal;"><a href="https://www.mensjournal.com/health-fitness/crossfit-games-competitor-tests-positive-peds-stripped-bronze-medal/">CrossFit Games Competitor Ricky Garard Tests Positive for P.E.D.s, Stripped of Bronze Medal. Possible Rise in Usage of Drugs Amongst Athletes?</a></th><th id="page4" style="width: 25%;"><img style="width: 100%;" src="images/crossfit.jpg" /></th></tr ><tr><th id="page5" style="width: 25%; font-weight: normal;"><a href="https://www.cbsnews.com/boston/video/fitness-instructor-uses-recovery-story-to-inspire-others/">Fitness instructor hopes recovery story inspires others. Billy Gaine hopes his story will inspire others who are going through a similar situation. WBZ-TV\'s Paul Burton reports.</a></th><th id="page6" style="width: 25%;"><img style="width: 100%;" src="images/trainer.jpg" /></th><th id="page7" style="width: 25%; font-weight: normal;"><a href="https://www.nbcwashington.com/news/local/18-year-old-arrested-in-maryland-la-fitness-assaults-police-say-more-victims-possible/3192538/">18-Year-Old Arrested in Maryland LA Fitness Assaults; Police Say More Victims Possible. </a></th><th id="page8" style="width: 25%;"><img style="width: 100%;" src="images/lafitness.jpg" /></th></tr><tr><th id="page9" style="width: 25%; font-weight: normal;"><a href="https://www.youtube.com/watch?v=Pb0dYyuR0ok">Logan Paul Crossed The Line - Scientifically Dismantling Prime Hydration </a></th><th id="page10" style="width: 25%;"><img style="width: 100%;" src="images/moreplates.jpg" /></th><th id="page11" style="width: 25%; font-weight: normal;"><a href="https://www.youtube.com/watch?v=o9E7LslOeaM"> LIFE HACK || MEAL SIZES EXAMPLES || Comparing 200 Calorie Meals || Eat THIS not THAT!!! </a></th><th id="page12" style="width: 25%;"><img style="width: 100%;" src="images/greg.jpg" /></th></tr><tr><th id="page13" style="width: 25%; font-weight: normal;"><a href="https://www.health.harvard.edu/staying-healthy/exercising-to-relax">Exercising to relax. How does exercise reduce stress? Surprising answers to this question and more.</a></th><th id="page14" style="width: 25%;"><img style="width: 100%;" src="images/relax.jpg" /></th><th id="page15" style="width: 25%; font-weight: normal;"><a href="https://www.sciencedaily.com/releases/2022/10/221026114351.htm">At risk for diabetes? Cut the carbs, says new study. A low-carbohydrate diet, if sustained, may be a useful dietary approach for preventing and treating type 2 diabetes.</a></th><th id="page16" style="width: 25%;"><img style="width: 100%;" src="images/carbs.jpg" /></th></tr>';
        }
        else if (document.getElementById('my_calendar') != null) {
            document.getElementById('my_calendar').style.width = "500px"
        }
        document.getElementById("home").innerHTML = "Home<span class='material-icons'>home</span > ";
        document.getElementById("news").innerHTML = "News<span class='material-symbols-outlined'>newspaper</span>";
        document.getElementById("bmr").innerHTML = "BMR<span class='material-symbols-outlined'>calculate</span>";
        document.getElementById("calendar1").innerHTML = "Calendar<span class='material-icons'>calendar_month</span > ";
        console.log('screen big');
        //document.getElementById("page1").style.width = "25%";
        //document.getElementById("page2").style.width = "25%";
        //document.getElementById("page3").style.width = "25%";
        //document.getElementById("page4").style.width = "25%";
    }
    else {
        if (document.getElementById('table') != null) {
            document.getElementById("table").innerHTML = '<tr style="width: 100%;"><th id="page1" style="width: 25%; font-size: 100%; font-weight: normal;"><a href="https://www.sciencedaily.com/releases/2022/09/220920100754.htm">Are you an Early Bird or a Night Owl? Our Activity Patterns and Sleep Cycles Could Influence our Risk of Diseases,such as Type 2 Diabetes and Heart Disease.</a></th><th id="page2" style="width: 25%;"><img style="width: 100%;" src="images/sleep.jpg" /></th><th id="page3" style="width: 25%; font-weight: normal;"><a href="https://www.mensjournal.com/health-fitness/crossfit-games-competitor-tests-positive-peds-stripped-bronze-medal/">CrossFit Games Competitor Ricky Garard Tests Positive for P.E.D.s, Stripped of Bronze Medal. Possible Rise in Usage of Drugs Amongst Athletes?</a></th><th id="page4" style="width: 25%;"><img style="width: 100%;" src="images/crossfit.jpg" /></th></tr ><tr><th id="page5" style="width: 25%; font-weight: normal;"><a href="https://www.cbsnews.com/boston/video/fitness-instructor-uses-recovery-story-to-inspire-others/">Fitness instructor hopes recovery story inspires others. Billy Gaine hopes his story will inspire others who are going through a similar situation. WBZ-TV\'s Paul Burton reports.</a></th><th id="page6" style="width: 25%;"><img style="width: 100%;" src="images/trainer.jpg" /></th><th id="page7" style="width: 25%; font-weight: normal;"><a href="https://www.nbcwashington.com/news/local/18-year-old-arrested-in-maryland-la-fitness-assaults-police-say-more-victims-possible/3192538/">18-Year-Old Arrested in Maryland LA Fitness Assaults; Police Say More Victims Possible. </a></th><th id="page8" style="width: 25%;"><img style="width: 100%;" src="images/lafitness.jpg" /></th></tr><tr><th id="page9" style="width: 25%; font-weight: normal;"><a href="https://www.youtube.com/watch?v=Pb0dYyuR0ok">Logan Paul Crossed The Line - Scientifically Dismantling Prime Hydration </a></th><th id="page10" style="width: 25%;"><img style="width: 100%;" src="images/moreplates.jpg" /></th><th id="page11" style="width: 25%; font-weight: normal;"><a href="https://www.youtube.com/watch?v=o9E7LslOeaM"> LIFE HACK || MEAL SIZES EXAMPLES || Comparing 200 Calorie Meals || Eat THIS not THAT!!! </a></th><th id="page12" style="width: 25%;"><img style="width: 100%;" src="images/greg.jpg" /></th></tr><tr><th id="page13" style="width: 25%; font-weight: normal;"><a href="https://www.health.harvard.edu/staying-healthy/exercising-to-relax">Exercising to relax. How does exercise reduce stress? Surprising answers to this question and more.</a></th><th id="page14" style="width: 25%;"><img style="width: 100%;" src="images/relax.jpg" /></th><th id="page15" style="width: 25%; font-weight: normal;"><a href="https://www.sciencedaily.com/releases/2022/10/221026114351.htm">At risk for diabetes? Cut the carbs, says new study. A low-carbohydrate diet, if sustained, may be a useful dietary approach for preventing and treating type 2 diabetes.</a></th><th id="page16" style="width: 25%;"><img style="width: 100%;" src="images/carbs.jpg" /></th></tr>';
        }
        else if (document.getElementById('my_calendar') != null) {
            document.getElementById('my_calendar').style.width = "300px";
            document.getElementById('my_calendar').style.margin = "0px";
        }
        document.getElementById("home").innerHTML = "<span class='material-icons'>home</span > ";
        document.getElementById("news").innerHTML = "<span class='material-symbols-outlined'>newspaper</span>";
        document.getElementById("bmr").innerHTML = "<span class='material-symbols-outlined'>calculate</span>";
        document.getElementById("calendar1").innerHTML = "<span class='material-icons'>calendar_month</span > ";
        console.log('screen small');
        //document.getElementById("page1").style.width = "50%";
        //document.getElementById("page2").style.width = "50%";
        //document.getElementById("page3").style.width = "50%";
        //document.getElementById("page4").style.width = "50%";
    }
}

function duplicateResize() {
    width = this.innerWidth;
    height = this.innerHeight;
    if (width >= 700) {
        if (document.getElementById('table') != null) {
            document.getElementById("table").innerHTML = '<tr style="width: 100%;"><th id="page1" style="width: 25%; font-size: 100%; font-weight: normal;"><a href="https://www.sciencedaily.com/releases/2022/09/220920100754.htm">Are you an Early Bird or a Night Owl? Our Activity Patterns and Sleep Cycles Could Influence our Risk of Diseases,such as Type 2 Diabetes and Heart Disease.</a></th><th id="page2" style="width: 25%;"><img style="width: 100%;" src="images/sleep.jpg" /></th><th id="page3" style="width: 25%; font-weight: normal;"><a href="https://www.mensjournal.com/health-fitness/crossfit-games-competitor-tests-positive-peds-stripped-bronze-medal/">CrossFit Games Competitor Ricky Garard Tests Positive for P.E.D.s, Stripped of Bronze Medal. Possible Rise in Usage of Drugs Amongst Athletes?</a></th><th id="page4" style="width: 25%;"><img style="width: 100%;" src="images/crossfit.jpg" /></th></tr ><tr><th id="page5" style="width: 25%; font-weight: normal;"><a href="https://www.cbsnews.com/boston/video/fitness-instructor-uses-recovery-story-to-inspire-others/">Fitness instructor hopes recovery story inspires others. Billy Gaine hopes his story will inspire others who are going through a similar situation. WBZ-TV\'s Paul Burton reports.</a></th><th id="page6" style="width: 25%;"><img style="width: 100%;" src="images/trainer.jpg" /></th><th id="page7" style="width: 25%; font-weight: normal;"><a href="https://www.nbcwashington.com/news/local/18-year-old-arrested-in-maryland-la-fitness-assaults-police-say-more-victims-possible/3192538/">18-Year-Old Arrested in Maryland LA Fitness Assaults; Police Say More Victims Possible. </a></th><th id="page8" style="width: 25%;"><img style="width: 100%;" src="images/lafitness.jpg" /></th></tr><tr><th id="page9" style="width: 25%; font-weight: normal;"><a href="https://www.youtube.com/watch?v=Pb0dYyuR0ok">Logan Paul Crossed The Line - Scientifically Dismantling Prime Hydration </a></th><th id="page10" style="width: 25%;"><img style="width: 100%;" src="images/moreplates.jpg" /></th><th id="page11" style="width: 25%; font-weight: normal;"><a href="https://www.youtube.com/watch?v=o9E7LslOeaM"> LIFE HACK || MEAL SIZES EXAMPLES || Comparing 200 Calorie Meals || Eat THIS not THAT!!! </a></th><th id="page12" style="width: 25%;"><img style="width: 100%;" src="images/greg.jpg" /></th></tr><tr><th id="page13" style="width: 25%; font-weight: normal;"><a href="https://www.health.harvard.edu/staying-healthy/exercising-to-relax">Exercising to relax. How does exercise reduce stress? Surprising answers to this question and more.</a></th><th id="page14" style="width: 25%;"><img style="width: 100%;" src="images/relax.jpg" /></th><th id="page15" style="width: 25%; font-weight: normal;"><a href="https://www.sciencedaily.com/releases/2022/10/221026114351.htm">At risk for diabetes? Cut the carbs, says new study. A low-carbohydrate diet, if sustained, may be a useful dietary approach for preventing and treating type 2 diabetes.</a></th><th id="page16" style="width: 25%;"><img style="width: 100%;" src="images/carbs.jpg" /></th></tr>';
        }
        else if (document.getElementById('my_calendar') != null) {
            document.getElementById('my_calendar').style.width = "500px"
        }
        document.getElementById("home").innerHTML = "Home<span class='material-icons'>home</span > ";
        document.getElementById("news").innerHTML = "News<span class='material-symbols-outlined'>newspaper</span>";
        document.getElementById("bmr").innerHTML = "BMR<span class='material-symbols-outlined'>calculate</span>";
        document.getElementById("calendar1").innerHTML = "Calendar<span class='material-icons'>calendar_month</span > ";
        console.log('screen big');
        //document.getElementById("page1").style.width = "25%";
        //document.getElementById("page2").style.width = "25%";
        //document.getElementById("page3").style.width = "25%";
        //document.getElementById("page4").style.width = "25%";
    }
    else {
        if (document.getElementById('table') != null) {
            document.getElementById("table").innerHTML = '<tr style="width: 100%;"><th id="page1" style="width: 25%; font-size: 100%; font-weight: normal;"><a href="https://www.sciencedaily.com/releases/2022/09/220920100754.htm">Are you an Early Bird or a Night Owl? Our Activity Patterns and Sleep Cycles Could Influence our Risk of Diseases,such as Type 2 Diabetes and Heart Disease.</a></th><th id="page2" style="width: 25%;"><img style="width: 100%;" src="images/sleep.jpg" /></th><th id="page3" style="width: 25%; font-weight: normal;"><a href="https://www.mensjournal.com/health-fitness/crossfit-games-competitor-tests-positive-peds-stripped-bronze-medal/">CrossFit Games Competitor Ricky Garard Tests Positive for P.E.D.s, Stripped of Bronze Medal. Possible Rise in Usage of Drugs Amongst Athletes?</a></th><th id="page4" style="width: 25%;"><img style="width: 100%;" src="images/crossfit.jpg" /></th></tr ><tr><th id="page5" style="width: 25%; font-weight: normal;"><a href="https://www.cbsnews.com/boston/video/fitness-instructor-uses-recovery-story-to-inspire-others/">Fitness instructor hopes recovery story inspires others. Billy Gaine hopes his story will inspire others who are going through a similar situation. WBZ-TV\'s Paul Burton reports.</a></th><th id="page6" style="width: 25%;"><img style="width: 100%;" src="images/trainer.jpg" /></th><th id="page7" style="width: 25%; font-weight: normal;"><a href="https://www.nbcwashington.com/news/local/18-year-old-arrested-in-maryland-la-fitness-assaults-police-say-more-victims-possible/3192538/">18-Year-Old Arrested in Maryland LA Fitness Assaults; Police Say More Victims Possible. </a></th><th id="page8" style="width: 25%;"><img style="width: 100%;" src="images/lafitness.jpg" /></th></tr><tr><th id="page9" style="width: 25%; font-weight: normal;"><a href="https://www.youtube.com/watch?v=Pb0dYyuR0ok">Logan Paul Crossed The Line - Scientifically Dismantling Prime Hydration </a></th><th id="page10" style="width: 25%;"><img style="width: 100%;" src="images/moreplates.jpg" /></th><th id="page11" style="width: 25%; font-weight: normal;"><a href="https://www.youtube.com/watch?v=o9E7LslOeaM"> LIFE HACK || MEAL SIZES EXAMPLES || Comparing 200 Calorie Meals || Eat THIS not THAT!!! </a></th><th id="page12" style="width: 25%;"><img style="width: 100%;" src="images/greg.jpg" /></th></tr><tr><th id="page13" style="width: 25%; font-weight: normal;"><a href="https://www.health.harvard.edu/staying-healthy/exercising-to-relax">Exercising to relax. How does exercise reduce stress? Surprising answers to this question and more.</a></th><th id="page14" style="width: 25%;"><img style="width: 100%;" src="images/relax.jpg" /></th><th id="page15" style="width: 25%; font-weight: normal;"><a href="https://www.sciencedaily.com/releases/2022/10/221026114351.htm">At risk for diabetes? Cut the carbs, says new study. A low-carbohydrate diet, if sustained, may be a useful dietary approach for preventing and treating type 2 diabetes.</a></th><th id="page16" style="width: 25%;"><img style="width: 100%;" src="images/carbs.jpg" /></th></tr>';
        }
        else if (document.getElementById('my_calendar') != null) {
            document.getElementById('my_calendar').style.width = "300px";
            document.getElementById('my_calendar').style.margin = "0px";
        }
        document.getElementById("home").innerHTML = "<span class='material-icons'>home</span > ";
        document.getElementById("news").innerHTML = "<span class='material-symbols-outlined'>newspaper</span>";
        document.getElementById("bmr").innerHTML = "<span class='material-symbols-outlined'>calculate</span>";
        document.getElementById("calendar1").innerHTML = "<span class='material-icons'>calendar_month</span > ";
        console.log('screen small');
        //document.getElementById("page1").style.width = "50%";
        //document.getElementById("page2").style.width = "50%";
        //document.getElementById("page3").style.width = "50%";
        //document.getElementById("page4").style.width = "50%";
    }
}

function login() {
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;
    if (email == 'adminemail@gmail.com' && password == 'adminpassword123') {
        document.location.href = 'news.html'
    }
}

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




/*THE JS CODE BELOW IS FROM ASSIGNMENT #3 OF THE INTRO TO JAVASCRIPT CLASS LAST YEAR
  THIS WAS MADE BY ME, I SIMPLY COPIED AND PASTED IT INTO THIS ASSIGNMENT
  I ALSO HAVE TO ADD DETAILS REGARDING THE MEALS FOR EACH DAY HOWEVER

*/

var thisday = new Date(); //This is how the calendar knows what day the calendar is open and thus how to flip back to it and highlight it
var mn = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; //Array for month names
var maxdays = [31, 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; //Array for total days in month !NOTE February is determined later based on leap year
var monthchange = 0; //Checker used to change the month in the changecal method
var yearchange = 0; //Checker used to change the year in the changecal method

function bannerrow(monthname, somedate) {
    //This function creates the top of the calendar, including the month name, and buttons to change the month/year of the calendar
    var banstring = "";
    banstring += "<tr class='banner'>";
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
    colstring += "<tr class='banner'>";
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
                    rowstring += "<td class='today'> " + counter;
                    counter++;
                }
                else {
                    console.log("Yearchange: " + yearchange + ", Monthchange: " + monthchange + ", " + counter + "==" + thisday.getDate());
                    rowstring += "<td> " + counter;
                    counter++;
                }
            }
            rowstring += "</td>";
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
    htmlstring += "<table id = 'my_calendar' style='text-align: center; border: 2px; border-style: solid; margin: auto; margin-top: 10px; padding: 10px; border-radius: 10px; width: 500px; height: 500px; background: #ffb3b3; font-size: 150 %; '>";
    htmlstring += bannerrow(somedatename, somedate);
    htmlstring += colheadrow();
    htmlstring += putmonth(firstdow, somemonth, todaybutton);
    htmlstring += "</table>";



    document.getElementById("calendar").innerHTML = htmlstring;
    duplicateResize();
}

