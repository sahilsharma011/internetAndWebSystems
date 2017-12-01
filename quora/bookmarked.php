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

$sql = "SELECT * FROM questions WHERE star = 1";
$result = $conn->query($sql);

echo json_encode($result->fetch_all());