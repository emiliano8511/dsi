<?php
$connection_string="host=localhost port=5432 user=postgres password=123 dbname=language";
$conn = pg_connect($connection_string) or die("Fall la conexin.");
?>
