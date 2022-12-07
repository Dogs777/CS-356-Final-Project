<!--
    Author: Maxwell Rosenthal
    Assignment: Assignment 3
    Course: CS-356: Dynamic Webpage Development
    Date: November 23, 2022
    Description: The about page of the website.
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

                <div class = "headerBackdrop"><h1>What is Capitol Technolgoy University</h1></div> <!-- Add heading text. -->

                <!-- The following text was modified from https://www.captechu.edu/about-capitol/capitol-history. -->
                <p><b>
                    Capitol Technology University is a private university in South Laurel, Maryland near Washington, DC. 
                    Capitol offers undergraduate and graduate programs specializing in engineering, computer science, information technology, and business. 
                    It is classified among "Special Focus Institutions&#8212Schools of Engineering" and is a National Center of Academic Excellence in Information Assurance Education.
                </b></p> <!-- Add bold paragraph text. -->

                <!-- Scaling related code derived https://codepen.io/cobycreative/pen/oNPJpr. -->
                <div class = "wrapper">
                    <div class = "h_iframe">
                        <iframe
                            width="560"
                            height="315"
                            src="https://youtube.com/embed/8XEOO0GAUK0"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                            class = "video">
                        </iframe> <!-- Embed a YouTube video. -->
                    </div> <!-- End div. -->
                </div> <!-- End div. -->

                <div class = "headerBackdrop"><h1>The History of Capitol</h1></div> <!-- Add heading text. -->

                <!-- The following text was copied from https://www.captechu.edu/about-capitol/capitol-history. -->
                <p><b>
                    Capitol Technology University was founded in Washington, D.C., as the Capitol Radio Engineering Institute (CREI) in 1927 by Eugene H. Rietzke. A Navy veteran and radio operator, Rietzke saw the need for an advanced school that would produce talented radio and electronics technicians. CREI began as a correspondence school, but its popularity led to the 1932 opening of a residence division, allowing students to work hands-on in laboratories. As radio technology improved, new training programs and courses were quickly added. Following World War II, CREI became one of the first three technical institutes accredited by the Engineers' Council for Professional Development.
                    <br><br> <!-- Add two newlines. -->
                    The institute entered a new era in the mid-1950s when it began awarding three-year Associate of Applied Science degrees. The school expanded its reach to new programs in applied engineering and electronics. The institute also changed its name to Capitol Institute of Technology (CIT) in 1964. CIT awarded its first Bachelor of Science degrees in 1966 to four graduates of its electronics engineering technology program. Anticipating the need for more room, CIT relocated in 1969 to Kensington, Maryland.
                    <br><br> <!-- Add two newlines. -->
                    During the following decade, enrollment increased as well as program offerings. In 1976, the Middle States Association of Colleges and Secondary Schools granted accreditation to Capitol. The National Science Foundation also provided funding for new instructional scientific equipment. Quickly outgrowing its space, Capitol's leaders recognized a need for a permanent home and began searching for a new campus.
                    <br><br> <!-- Add two newlines. -->
                    In 1980, the college found its home in Laurel, Maryland. Within three years, Capitol purchased the 52-acre former site of the Beltsville Speedway, built new academic facilities, and opened its doors. Enrollment swelled and the college added two more engineering technology degrees. Within the next decade, a capital campaign and funding from the state of Maryland raised millions for buildings, equipment, and a scholarship endowment. The campus expanded with Telecommunications Hall and the 340-seat Avrum Gudelsky Memorial Auditorium.
                    <br><br> <!-- Add two newlines. -->
                    In the late 1980s, Capitol's leadership again recognized the transformation in the institution. The technical-based curriculum had become broader by increasing the number of humanities and social science courses offered. With a spacious campus and the addition of four-year degrees, the school had shed its skin as a technical institute. Preferring a title and an environment that would better suit the evolving institution, the Board of Trustees changed the school's name to Capitol College. Along with the name change came a plan to offer more degrees in engineering and management, build on-campus housing, and convert from a quarterly academic calendar to a semester system.
                    <br><br> <!-- Add two newlines. -->
                    The period of growth continued in the 1990s. Capitol College began offering master's degrees. The college began several outreach efforts and business partnerships, such as the NASA PREP summer program for minority students and the Maryland Distance Learning Network. As the 20th century came to a close, the college also expanded the John G. and Beverly A. Puente Library, creating a spacious state-of-the-art facility with a multimedia teaching center.
                    <br><br> <!-- Add two newlines. -->
                    The opening of the William G. McGowan Academic Center in 2005 marked the beginning of the next era for the college. The academic center expanded the computer science department, Space Operations Institute, and the BRAC-funded Cyber Battle Lab.
                    <br><br> <!-- Add two newlines. -->
                    In 2010, Capitol College launched its first-ever doctoral program. The doctorate in information assurance prepared students for leadership roles in the burgeoning field of cybersecurity. Since the college offered the degree almost exclusively online, Capitol began accepting doctoral students from across the globe. Four years later, the institution added its second doctoral program in management and decision sciences.
                    <br><br> <!-- Add two newlines. -->
                    The increased growth and diversity of programs led the college to become Capitol Technology University in 2014. Since 2014, the University has embarked on a long-term strategic plan of continued expansion, including the addition of new facilities on campus and increased academic programs. In 2017, Dr. Bradford L. Sims became the eighth president of Capitol Technology University, inheriting the proud legacy that began with Eugene H. Rietzke.
                    <br><br> <!-- Add two newlines. -->
                    As a respected regional leader, Capitol Technology University continues to attract the attention of government agencies and corporate partners. Through a partnership with NASA, Capitol offers academic programs in astronautical engineering and practical training at its Space Operations Institute. The National Security Agency and Department of Homeland Security have designated the University a National Center of Academic Excellence in Information Assurance Education, and the Institute of Electrical and Electronics Engineers has named the University one of its 12 educational partners.
                    <br><br> <!-- Add two newlines. -->
                    Today, Capitol Technology University is the only independent university in Maryland that specializes in providing a relevant education in engineering, cybersecurity, computer science, business, and related fields. The institution takes pride in its proven record of placing graduates in competitive careers with salaries that are higher than the industry average. Capitol Technology University currently offers 3 associate's degrees, 25 bachelor's degrees, 19 master's degrees, and 29 doctorates.
                    <br><br> <!-- Add two newlines. -->
                    While innovations spur new developments and industries, the foundations taught at Capitol Technology University - thinking critically, actively and creatively - remain. Capitol Technology University is committed to providing students with a quality education and the relevant experience to excel in a rapidly changing world filled new technology and global commerce both now and in the future.
                </b></p> <!-- Add bold paragraph text. -->
            </div> <!-- End div. -->

            <!-- Create a div for the right split. -->

            <div id = "right25" class = "split right25" style = "horizontal-align: center;">
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

                        // $anchors = $data -> getElementsByTagName('img');
                        // foreach ($anchors as $element)
                        // {
                        //     $src = $element -> getAttribute('src');
                        //     echo nl2br("<img src=\"$src\">\n");
                        // }
                        echo nl2br("<p style = \"max-width: 95%; width: 95%; display: block; margin-left: auto; margin-right: auto;\"><b>$title\n\n<a href = \"$link\" class = \"link\">$link</a>\n$dateTime</b></p>");
                    } // End foreach($content as $data).
                ?>
            </div> <!-- End div. -->
        </div> <!-- End div. -->
    </body> <!-- End body. -->
</html> <!-- End html. -->
