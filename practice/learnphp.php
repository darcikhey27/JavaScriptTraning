<html>
<head>
    <title>Information gathered</title>
</head>

<body>

    <?php
        echo "php is working" . "<br />";

        $userName = $_POST['username'];
        $streetAddress =$_POST['streetaddress'];
        $city = $_POST['city'];

        echo "username is " . $userName . "<br />";
        echo "street is " . $streetAddress . "<br />";
        echo "city is " . $city . "<br />";

        echo "some other stuff here";




    ?>

</body>
</html>
