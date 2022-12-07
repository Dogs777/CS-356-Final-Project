<!--
    Author: Maxwell Rosenthal
    Assignment: Assignment 3
    Course: CS-356: Dynamic Webpage Development
    Date: November 23, 2022
    Description: The trading page of the website.
-->

<!DOCTYPE html>

<html>
    <!-- Head HTML. -->

    <head>
        <title>Assignment 3</title> <!-- Add the webpage's title. -->
        <link rel = "stylesheet" href = "assignment-3.css"/> <!-- Import the CSS for the webpage. -->
        <script src = "functionality.js" type = "text/javascript"></script> <!-- Import the JavaScript for the webpage. -->
        <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- Scale the viewport to fix viewport scaling related issues (See https://devcom.w3schools.com/css/css_rwd_viewport.asp). -->
    </head> <!-- End head. -->

    <!-- Body HTML. -->

    <body onload = "sizeAdjust()">
        <!-- Create a div for the side navigation. -->
        <!-- Code derived from https://www.w3schools.com/howto/howto_js_sidenav.asp. -->
        <div id="mySidenav" class="sidenav">
            <a href = "javascript:void(0)" class = "closebtn" onclick = "closeNav()"><b>&times;</b></a> <!-- Add a button that closes the side navigation. -->
            <a href = "index.html"><b>Homepage</b></a> <!-- Add a redirect to the homepage. -->
            <a href = "nightwatchers.html"><b>The Nightwatchers</b></a> <!-- Add a redirect to the Nightwatchers page. -->
            <a href = "capitolBroadcastTrade.php"><b>Capitol Broadcast Trade</b></a> <!-- Add a redirect to the broadcast trade page. -->
            <a href = "education.html"><b>Broadcast Education</b></a> <!-- Add a redirect to an educational page. -->
            <a href = "about.php"><b>About</b></a> <!-- Add a redirect to the about page. -->
        </div> <!-- End <div id="mySidenav" class="sidenav">. -->

        <!-- Create a div for the top bar. -->

        <div id = "navBar">
            <div id = "topNav">
                <div id = "leftNav">
                    <a href = "javascript:void(0)"><img id = "menuButton" height = "35px" src = "Assets/Persistent/Menu-Icon.png" onclick = "openNav()"/></a> <!-- Add a button to open the navigation bar. -->
                    <a href = "index.html"><img id = "banner" height = "35px" src = "Assets/Persistent/LogoBanner.png"/></a> <!-- Add a banner to the navigation bar that will open the homepage when clicked. -->
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

                <div class = "headerBackdrop"><h1>The Capitol Broadcast Trade</h1></div> <!-- Add heading text. -->

                <p><b>
                    The Capitol Broadcast Trade is where students can go to buy and sell (or trade) audio/video technology amongst one another. 
                    See our two most featured listings below along with a feed of updates from our store, a map to where we are located, 
                    a submission form for things you may want to sell, and a spreadsheet consisting of what is currently listed for sale.
                    <br><br>
                    If you want to make a purchase, please use our order form.
                    Provide your email and a description of what you want and we'll assist in connecting you with the seller and in working out a fair deal.
                </p></b> <!-- Add bold paragraph text. -->

                <!-- Add listings. -->

                <div class="flex-container">
                    <div class="flex-left">
                        <img src = "Assets/TradeItems/G70.jpg" width = "100%" style = "max-width: fit-content;">

                        <div class = "headerBackdrop">
                            <h1>Sony G70 CRT Projector</h1> <!-- Add heading text. -->
                            <h2>$700</h2> <!-- Add heading text. -->
                        </div> <!-- End div. -->

                        <p><b>
                            In phenomenal condition with 300 hours total on the bulbs.
                            <br><br> <!-- Add two newlines. -->
                            Information about the projector can be found here:
                            <br> <!-- Add a newline. -->
                            <a href = "http://www.curtpalme.com/SonyG70.shtm" class = "link">http://www.curtpalme.com/SonyG70.shtm</a> <!-- Embed a link within the text. -->
                        </b></p>
                    </div>

                    <div class="flex-right">
                        <!-- Scaling related code derived https://codepen.io/cobycreative/pen/oNPJpr. -->
                        <div class = "wrapper" style = "max-width: 100%;">
                            <div class = "h_iframe">
                                <iframe
                                    width="100%"
                                    src="https://youtube.com/embed/vHqT1God9vk"
                                    title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                    class = "video">
                                </iframe> <!-- Embed a YouTube video. -->
                            </div> <!-- End div. -->
                        </div> <!-- End div. -->

                        <div class = "headerBackdrop">
                            <h1>Open Source Scan Converter (OSSC)</h1> <!-- Add heading text. -->
                            <h2>$150</h2> <!-- Add heading text. -->
                        </div> <!-- End div. -->

                        <!-- The following text is derived from from https://www.retrorgb.com/ossc.html. -->
                        <p><b>
                            The Open Source Scan Converter is a zero lag upscaler. 
                            At the moment, it is by far the sharpest way to play your analog consoles via HDMI, 
                            offering tons of options, 2x 480p (960p) and up to 5x 240p (1080p!). 
                            It's only shortcoming is it's not compatible with all TV's in every mode, 
                            but it's still an excellent choice for all retro-gaming videophiles!
                            <br><br> <!-- Add two newlines. -->
                            For more information, visit this webpage:
                            <br> <!-- Add a newline. -->
                            <a href = "https://www.retrorgb.com/ossc.html" class = "link">https://www.retrorgb.com/ossc.html</a> <!-- Embed a link within the text. -->
                        </b></p>
                    </div>

                    <div class="flex-left" id = "gridRSSBox" style = "overflow:auto;">
                        <!-- Code modified from from https://www.w3schools.in/php/php-rss-feed. -->
                        <?php
                            $domOBJ = new DOMDocument();
                            $domOBJ -> load("https://nitter.snopyta.org/captechu/rss"); //XML page URL.

                            $content = $domOBJ -> getElementsByTagName("item");

                            foreach($content as $data)
                            {
                                $title = $data -> getElementsByTagName("title") -> item(0) -> nodeValue;
                                $link = $data -> getElementsByTagName("link") -> item(0) -> nodeValue;
                                $dateTime = $data -> getElementsByTagName("pubDate") -> item(0) -> nodeValue;

                                echo nl2br("<p style = \"max-width: 95%; width: 95%; display: block; margin-left: auto; margin-right: auto;\"><b>$title\n\n<a href = \"$link\" class = \"link\">$link</a>\n$dateTime</b></p>");
                            } // End foreach($content as $data).
                        ?>   
                    </div>

                    <div class="flex-right" id = "gridMapBox">
                        <div class = "headerBackdrop"><h1 style = "margin-top: 0px;">Where We're Located</h1></div> <!-- Add heading text. -->

                        <p><b>11301 Springfield Road, Laurel, MD 20708</b></p>
                        <iframe width="100%" height="360px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=-76.858549118042%2C39.04277786543801%2C-76.84438705444337%2C39.05116019329205&layer=mapnik" style="border: 3px solid rgb(13, 86, 119); display: block; margin-left: auto; margin-right: auto; margin-top: 24px;"></iframe>
                        <br> <!-- Add a newline. -->
                        <a href="https://www.openstreetmap.org/#map=17/39.04697/-76.85147" class = "link">View Larger Map</a> <!-- Embed Capitol Technology University's location on OpenStreetMap. -->
                        <br><br> <!-- Add two newlines. -->
                    </div>

                    <div class="flex-left"><iframe id = "submissionForm" src="https://docs.google.com/forms/d/e/1FAIpQLSdHoFTAdnarHv49ftpFjI6FFLHgLhsf2fecAqx-fjjMnZthEQ/viewform?embedded=true" width = "100%" height = "96%" frameborder = "0" marginheight = "0" marginwidth = "0" style = "margin-bottom: 12px;">Loading…</iframe></div> <!-- Embed a Google Form for listings. -->

                    <div class="flex-right">
                        <div class = "headerBackdrop"><h1 style = "margin-top: 0px;">Other Items Listed for Sale</h1></div> <!-- Add heading text. -->

                        <p><b>Orders must be placed using the order form.</b></p>

                        <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSvCbMkIjGNXQ8te8WjyfjXwwO-6ZLXoskOQ4VN9Bl35-Y7d4P_kP5WUL1FMqjj1X7drAEu59SM5dht/pubhtml?gid=1550722807single=truewidget=trueheaders=false" width = "100%" height = "300px" style = "display: block; margin-left: auto; margin-right: auto; margin-top: 24px; margin-bottom: 18px;"></iframe>
                    </div> <!-- Embed form responses.-->
                </div> <!-- End div. -->
            </div> <!-- End div. -->
    
            <!-- Create a div for the right split. -->

            <div id = "right25" class = "split right25">
                <div class = "headerBackdrop"><h1 style = "margin-top: 0px;">Order Form</h1></div> <!-- Add heading text. -->

                <div class = "headerBackdrop" style = "margin-top: 24px;"><h2>Email</h2></div> <!-- Add heading text. -->
                <input id = "emailBox" type = "text" placeholder = "Enter your email..." name = "email" required style = "max-width: 90%;"> <!-- Add a box for email input. -->

                <div class = "headerBackdrop" style = "margin-top: 24px;"><h2>Order Message</h2></div> <!-- Add heading text. -->
                <textarea id = "orderBox" name="order" cols="50" rows="10" placeholder = "What do you want to purchase? Want to talk the price down? This is the box for that." required style = "width: 90%; height: 50%;"></textarea> <!-- Add a box for order input. -->

                <div class = "headerBackdrop" style = "border-radius: 10px; max-width: 95%;"><a href = "javascript:void(0)" onclick = "placeOrder()"><h1>Place Order</h1></a></div> <!-- Add the order placing button. -->
            </div> <!-- End div. -->
        </div> <!-- End div. -->
    </body> <!-- End body. -->
</html> <!-- End html. -->
