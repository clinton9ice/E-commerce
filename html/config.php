<?php
$db_user = 'root';
$db_pass = '';
$db_name = 'sc fashionwares'


$db = new PDO ('mysql:host=localhost;dbname='.$db_name . ';characterset-utf8', $db_user, $db_pass);
$db->setAttribute(PDO::ATTR_ERR, PDO::ERRORMODE_EXCEPTION);

?>