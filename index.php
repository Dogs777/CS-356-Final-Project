<!--
    Author: Logan Kalocai and Maxwell Rosenthal
    Assignment: Assignment 3
    Course: CS-356: Dynamic Webpage Development
    Date: December 6, 2022
    Description: Homepage with gridded RSS news feed.
-->

<!DOCTYPE html>

<html>
    <!-- Head HTML. -->

    <head>
        <title>Final Project</title> <!-- Add the webpage's title. -->
        <link rel = "stylesheet" href = "final-project.css"/> <!-- Import the CSS for the webpage. -->
        <script src = "functionality.js" type = "text/javascript"></script> <!-- Import the JavaScript for the webpage. -->
        <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- Scale the viewport to fix viewport scaling related issues (See https://devcom.w3schools.com/css/css_rwd_viewport.asp). -->
    </head> <!-- End head. -->

    <!-- Body HTML. -->

    <body onload = "sizeAdjust()">
        <!-- Create a div for the side navigation. -->
        <!-- Code derived from https://www.w3schools.com/howto/howto_js_sidenav.asp. -->
        <div id="mySidenav" class="sidenav">
            <a href = "javascript:void(0)" class = "closebtn" onclick = "closeNav()"><b>&times;</b></a> <!-- Add a button that closes the side navigation. -->
            <a href = "index.php"><b>Homepage</b></a> <!-- Add a redirect to the homepage. -->
            <a href = "bmr.html"><b>BMR Calculator</b></a> <!-- Add a redirect to the BMR calculator. -->
            <a href = "fitnessTracker.html"><b>Fitness Tracker</b></a> <!-- Add a redirect to the fitness tracker. -->
        </div> <!-- End <div id="mySidenav" class="sidenav">. -->

        <!-- Create a div for the top bar. -->

        <div id = "navBar">
            <div id = "topNav">
                <div id = "leftNav">
                    <a href = "javascript:void(0)"><img id = "menuButton" height = "35px" src = "Assets/Persistent/Menu-Icon.png" onclick = "openNav()"/></a> <!-- Add a button to open the navigation bar. -->
                    <a href = "index.php"><img id = "banner" height = "35px" src = "Assets/Persistent/LogoBanner.png"/></a> <!-- Add a banner to the navigation bar that will open the homepage when clicked. -->
                </div> <!-- End div. -->

            <!-- Add a search box to the right side of the navigation bar. -->
            <!-- Code derived from https://www.w3schools.com/howto/howto_css_searchbar.asp. -->
                <div id = "rightNav">
                    <div id = "searchBoxContainer"><input id = "searchBox" type = "search" placeholder = "Search..." name = "search" required onkeyup = "searchInput(event)"></div> <!-- Add a search box. -->
                    <a href = "javascript:void(0)"><img id = "searchButton" height = "35px" src = "Assets/Persistent/Search-Icon.png" onclick = "searchButton()"/></a> <!-- Add a search button. -->
                </div> <!-- End div. -->
            </div> <!-- End div. -->
        </div> <!-- End div. -->

        <div id = "pageContents">
            <!-- Create a div for the left split. -->

            <div id = "left75" class = "split left75">
                <!-- Add some text to the about page. -->

                <!-- Initial text. -->

                <div class = "headerBackdrop"><h1>Capitol BMI Trackers</h1></div> <!-- Add heading text. -->

                <p><b>
                    Welcome to the Capitol BMI Trackers, this page is dedicated towards better understanding how health, fitness, and the gym are excellent tools towards feeling better. 
                    Our home page is specifically go over the general information about working out. 
                    Afterall, the easiest way to look and feel better comes down to the basics, food, water, sleep, and exercise.
                </b></p> <!-- Add bold paragraph text. -->

                <!-- Food text. -->

                <div class = "headerBackdrop"><h1>Food</h1></div> <!-- Add heading text. -->

                <p><b>
                    Food is the first step in order to change how you feel. 
                    Understanding the building blocks of food can help to find your body's loopholes and to feel fuller eating less. 
                    Firstly, protein! 
                    This macronutrient provides the body four calories per gram and is the greatest method towards feeling fuller. 
                    This macro also allows for muscle protein synthesis, meaning that it helps build muscle. 
                    A good rule of thumb is about 1g of protein should be consumed for every 1lb of lean mass. 
                    As for carbohydrates, this is similar to protein in that it provides four calories for every gram, but also behaves differently. 
                    Typically , this macro does not fill you up, additionally eating simple sugars (candy, breads, desserts) can cause weight gain in sufficient amounts. 
                    This is mainly due to being able to consume so many grams and not feel full. 
                    This is why carbs found in rice, vegetables, and fruits are a better alternative as they provide more complex carbs (more time to break it up means more likely to feel full) as well as more micronutrients (vitamins and minerals). 
                    Lastly, fat. 
                    There is a lot of misconception with fat being unhealthy, when in reality some of the healthier foods (salmon, eggs, etc.) come with fat. 
                    This is a very energy dense food as it provides nine calories per gram, and does not give a crash if you consume it (unlike sugar). 
                    For both carbohydrates and fats, the biggest takeaway for amounts is it varies from person to person and you should do what feels natural so long as what you are eating is not heavy on one versus the other, and that it tracks evenly with your calorie count.
                </b></p> <!-- Add bold paragraph text. -->

                <!-- Water text. -->

                <div class = "headerBackdrop"><h1>Water</h1></div> <!-- Add heading text. -->

                <p><b>
                    This section will be short and sweet. 
                    One of the biggest mistakes that goes on when trying to build muscle is not properly hydrating yourself. 
                    Think about it, you go to the gym, or a walk, and you sweat buckets. 
                    This leaves a need for more water in your body. Properly hyhdrating can lead to increse in strength and can also help to cut calories. 
                    In fact, one of my biggest tips is to replace one or two beverages like soda and alcohol with a water instead each day. 
                    This will lead to feeling just as full while also consuming less unnecessary calories. Adult men should consume over three liters of water a day, and women over two. 
                    The more the merrier.
                </b></p> <!-- Add bold paragraph text. -->

                <!-- Sleep text. -->

                <div class = "headerBackdrop"><h1>Sleep</h1></div> <!-- Add heading text. -->

                <p><b>
                    In an age where kids and teens are staying up well past 2am, it is important to realize how detrimental that habit is. 
                    This does more than just leave you sluggish the next day. It can negatively affect your hormones and result in decrease in muscle long term. 
                    Additionally, having this bad habit can lead to others, like missing the gym or staying home on the couch for longer. 
                    About eight hours is the recommended amount of sleep for most teens and adults, and even more for kids. 
                    I cannot stress this enough how important this section is. In fact, there's even more to this. 
                    It is beneficial to your body to go to bed at a reasonable time as well and consistently. 
                    Around nightfall (9pm-11pm) should be around the best times to fall asleep as your body should produce melatonin (the body's way of feeling sleepy) during this time.
                </b></p> <!-- Add bold paragraph text. -->

                <!-- Exercise text. -->

                <div class = "headerBackdrop"><h1>Exercise</h1></div> <!-- Add heading text. -->

                <p><b>
                    Exercise really ties this all together. 
                    You have better nutrition habits, and sleeping, but where does this all go without exercise. 
                    There is a strong reason why we used to hunt for food. 
                    We could not survive off of what was provided in the land in the form of fruits, crops, and seeds. 
                    In order to eat we had to hunt. This was the physicaly exertion we needed to survive. 
                    A good goal when starting off is to have two rules, go at least five times a day, and to never have a rest day two days in a row. 
                    This is hard when beginning, but that is exactly when you need to set this habit. 
                    Maybe some days you just do some light cardio, that is fine as long as you're moving and pumping blood. 
                    Strength training is an excellent form of exercise as well. 
                    The building of muscle allows you to need to eat more (why do you think I got into lifting) and feel better. 
                    There are plenty of gyms out there with personal training and amazing fellow gym-goers who are willing to help someone in need. 
                    The gym is an amazing outlet for stress as you can work out a lot of mixed feelings or pain here.
                </b></p> <!-- Add bold paragraph text. -->

                <!-- Add listings. -->

                <div class="flex-container">
                    <div class="flex-left">
                        <div class = "headerBackdrop">
                            <h1>Resources</h1> <!-- Add heading text. -->
                            <h2>General Fitness resources</h2> <!-- Add heading text. -->
                        </div> <!-- End div. -->

                        <p><b>
                            • <a href = "https://liamrosen.com/fitness.html" class = "link">Beginner's Health and Fitness Guide</a><br>
                            • <a href = "https://web.archive.org/web/20190623072405/https://bodyrecomposition.com/muscle-gain/initial-body-fat-and-body-composition-changes.html/" class = "link">Initial Body Fat and Body Composition Changes</a><br>
                            • <a href = "https://web.archive.org/web/20180627232224/https://bodyrecomposition.com/muscle-gain/general-philosophies-of-muscle-mass-gain.html/" class = "link">General Philosophies of Muscle Mass Gain</a><br>
                            • <a href = "http://www.fitnessfrog.com/calculators/tdee-calculator.html" class = "link">Total Daily Energy Expenditure (TDEE) Calculator</a><br>
                            • <a href = "https://stronglifts.com/" class = "link">Lift Weights, Get Stronger</a><br>
                            • <a href = "https://www.yogajournal.com/practice/yoga-for-athletes/" class = "link">Yoga for Athletes</a><br>
                            • <a href = "https://www.mayoclinic.org/healthy-lifestyle/fitness/multimedia/stretching/sls-20076840" class = "link">Guide to Stretches</a><br>
                            • <a href = "https://www.boxrox.com/athletes-guide-foam-rolling/" class = "link">The Athlete's Guide to Foam Rolling</a><br>
                            • <a href = "https://jaimeesallthatglitters.blogspot.com/2010/08/make-your-own-foam-roller.html" class = "link">Make Your Own: Foam Roller</a><br>
                        </b></p>
                    </div>

                    <div class="flex-right">
                        <!-- Scaling related code derived https://codepen.io/cobycreative/pen/oNPJpr. -->
                        <div class = "wrapper" style = "max-width: 100%;">
                            <div class = "h_iframe">
                                <iframe
                                    width="100%"
                                    src="https://www.youtube.com/embed/7zR_5o6NvmE"
                                    title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                    class = "video">
                                </iframe> <!-- Embed a YouTube video. -->
                            </div> <!-- End div. -->
                        </div> <!-- End div. -->

                        <div class = "headerBackdrop">
                            <h1>Start Your Own Home Gym</h1> <!-- Add heading text. -->
                            <h2>$500</h2> <!-- Add heading text. -->
                        </div> <!-- End div. -->

                        <!-- The following text is derived from from https://www.dickssportinggoods.com/f/home-gyms. -->
                        <p><b>
                            The biggest hurdle with starting exercise is going to the gym. 
                            That is where a starter home gym might be necessary, 
                            There is plenty of resources online on where to start and what is cheapest. 
                            Some people even make some of their equipment using wood for cheap.
                            <br><br> <!-- Add two newlines. -->
                            For more information, visit this webpage:
                            <br> <!-- Add a newline. -->
                            <a href = "https://www.dickssportinggoods.com/f/home-gyms" class = "link">https://www.dickssportinggoods.com/f/home-gyms</a> <!-- Embed a link within the text. -->
                        </b></p>
                    </div>

                    <div class="flex-left" id = "gridRSSBox" style = "overflow:auto;">
                        <div class = "headerBackdrop"><h1 style = "margin-top: 0px;">CTU Twitter Feed</h1></div> <!-- Add heading text. -->
                        <br>

                        <!-- Code modified from from https://gist.github.com/Tom7762/e60213a139cbdaf94c04a779bc593ea1. -->
                            <?php
                            //Feed URLs
                            $feeds = array(
                                "https://nitter.snopyta.org/captechu/rss",
                                // A comma is needed on the last index of the array for this code to work for some reason. It might be a thing later on though I don't entirely know how to PHP. 
                            );
                            
                            //Read each feed's items
                            $entries = array();
                            foreach($feeds as $feed)
                            {
                                $xml = simplexml_load_file($feed);
                                $entries = array_merge($entries, $xml->xpath("//item"));
                            }
                            
                            //Sort feed entries by pubDate
                            usort($entries, function ($feed1, $feed2) { return strtotime($feed2->pubDate) - strtotime($feed1->pubDate); });
                        ?>

                        <?php
                            //Print all the entries
                            foreach($entries as $entry)
                            {
                                $desc = preg_replace('/max-width:250px/i', 'width: 90%; vertical-align: middle; margin-left: 5%', $entry->description);
                                ?>
                                <div style = "background-color: rgb(50, 50, 50); width: 95%; vertical-align: middle; margin-left: auto; margin-right: auto;">
                                    <b><?= $desc ?></b>
                                    <p style = "max-width: 95%; width: 95%; display: block; margin-left: auto; margin-right: auto;"><b>
                                        <br> <!-- Add a newline. -->
                                        <b><a href="<?= $entry->link ?>" class = "link">View on Nitter</a></b>
                                        <br> <!-- Add a newline. -->
                                        <?= strftime('%m/%d/%Y %I:%M %p', strtotime($entry->pubDate)) ?>
                                    </b></p>
                                </div>
                                <?php
                            }
                        ?>
                    </div>

                    <div class="flex-right" id = "gridMapBox">
                        <div class = "headerBackdrop"><h1 style = "margin-top: 0px;">Logal Gyms</h1></div> <!-- Add heading text. -->

                        <p><b>Gyms nearby Capitol Technology University.</b></p>
                        <iframe width="100%" height="360px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d49546.39125326868!2d-76.84142567842343!3d39.091681803156334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sgyms%20near%20Laurel%2C%20MD!5e0!3m2!1sen!2sus!4v1671047184067!5m2!1sen!2sus" style="border: 3px solid rgb(13, 86, 119); display: block; margin-left: auto; margin-right: auto; margin-top: 24px;"></iframe>
                        <br> <!-- Add a newline. -->
                        <a href="https://www.google.com/maps/search/gyms+near+Laurel,+MD/@39.0916818,-76.8414257,13z" class = "link">View Larger Map</a> <!-- Embed Capitol Technology University's location on OpenStreetMap. -->
                        <br><br> <!-- Add two newlines. -->
                    </div>
                </div> <!-- End div. -->
            </div> <!-- End div. -->

            <!-- Create a div for the right split. -->

            <div id = "right25" class = "split right25" style = "horizontal-align: center; padding-top: 18px;">
                <div class = "headerBackdrop"><h1 style = "margin-top: 0px;">Gym Twitter Feeds</h1></div> <!-- Add heading text. -->
                <br>

                <!-- Code modified from from https://gist.github.com/Tom7762/e60213a139cbdaf94c04a779bc593ea1. -->
                <?php
                    //Feed URLs
                    $feeds = array(
                        "https://nitter.snopyta.org/GoldsGym/rss",
                        "https://nitter.snopyta.org/LAFitness/rss",
                        "https://nitter.snopyta.org/Fitness19Gyms/rss",
                        // A comma is needed on the last index of the array for this code to work for some reason. It might be a thing later on though I don't entirely know how to PHP. 
                    );
                    
                    //Read each feed's items
                    $entries = array();
                    foreach($feeds as $feed)
                    {
                        $xml = simplexml_load_file($feed);
                        $entries = array_merge($entries, $xml->xpath("//item"));
                    }
                    
                    //Sort feed entries by pubDate
                    usort($entries, function ($feed1, $feed2) { return strtotime($feed2->pubDate) - strtotime($feed1->pubDate); });
                ?>

                <?php
                    //Print all the entries
                    foreach($entries as $entry)
                    {
                        $desc = preg_replace('/max-width:250px/i', 'width: 90%; vertical-align: middle; margin-left: 5%', $entry->description);
                        ?>
                        <div style = "background-color: rgb(50, 50, 50); width: 95%; vertical-align: middle; margin-left: auto; margin-right: auto;">
                            <b><?= $desc ?></b>
                            <p style = "max-width: 95%; width: 95%; display: block; margin-left: auto; margin-right: auto;"><b>
                                <br> <!-- Add a newline. -->
                                <b><a href="<?= $entry->link ?>" class = "link">View on Nitter</a></b>
                                <br> <!-- Add a newline. -->
                                <?= strftime('%m/%d/%Y %I:%M %p', strtotime($entry->pubDate)) ?>
                            </b></p>
                        </div>
                        <?php
                    }
                ?>
            </div> <!-- End div. -->
        </div> <!-- End div. -->
    </body> <!-- End body. -->
</html> <!-- End html. -->
