<?php
/**
 * Created by PhpStorm.
 * User: sahilsharma
 */
$conn = mysqli_connect("localhost", "root", "", "quora");
if (mysqli_connect_errno()) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
    die;
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Quora</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <link href="css/style.css" rel="stylesheet">
    <link href="css/font-awesome.min.css" rel="stylesheet"/>
    <script src="js/script.js"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script async defer
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCj0pS-iu-9y2EKDrJlo7a2_X-qCsXpVno&callback=initMap"></script>


    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
</head>

<body>


<!-- header start -->
<header id="wrapper-header">
    <div id="header-logo"><a href="#">Quora</a></div>
    <nav id="header-nav-bar">
        <a href="#" id="menu-icon"></a>
        <ul>
            <li><a href="#" id="all">Home</a></li>
            <li><a href="#" id="bookmark">Bookmarks</a></li>
        </ul>
    </nav>
</header>
<!-- End of header -->

<section class="section-non-footer">
    <!-- Left navbar -->
    <section class="section-nav-bar">
        <nav id="left-nav-bar">
            <h2 style="margin-left: 5px">
                Topics
            </h2>
            <ul>
                <?php
                $sql = "SELECT id, topic FROM topics";
                $result = $conn->query($sql);
                if ($result->num_rows > 0) {
                    // output data of each row
                    while ($row = $result->fetch_assoc()) {
                        echo '<li><a href="#" class="topicFilter" id="' . $row["id"] . '">' . $row['topic'] . '</a></li>';
                    }
                }


                ?>
            </ul>
        </nav>
    </section>
    <!-- End of left navbar -->
    <!-- Main section -->
    <main>

        <section id="show_all">
            <?php
            $sql = "SELECT * FROM questions";
            $result = $conn->query($sql);
            if ($result->num_rows > 0) {
                // output data of each row
                while ($row = $result->fetch_assoc()) {
                    echo '<section id="answer-section"  data-location="'.$row['location'].'" data-topic="'.$row['topic'].'"><article>
                        <h3>'.$row['question'].'</h3>

                        <p>'.$row['answer'].'</p>

                    </article></section>';
                }
            }
            ?>
        </section>
        <section id="show_bookmarks">

        </section>
    </main>


    <aside style="margin-top: 100px ">
        <h2 style="margin-left: 5px">
            Location
        </h2>
        <div id="map"
             style="width:200px;height:200px; float: right; position: relative;  padding: 20px 0 0 1.5rem;"></div>
        <section id="section-right-news">
            <?php
            $sql = "SELECT DISTINCT location FROM questions";
            $result = $conn->query($sql);
            $locations = [];
            if ($result->num_rows > 0) {
                // output data of each row
                while ($row = $result->fetch_assoc()) {
                    echo '<article><a href="#" class="locationFliter" onclick="locationFilter(\''.$row['location'].'\')"><h4>' . $row['location'] . '</h4></a></article>';
                }
            }
            ?>
        </section>
    </aside>

    <!-- End of Right panel -->
</section>


</body>
</html>