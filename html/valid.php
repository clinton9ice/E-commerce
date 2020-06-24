<?php 
require_once(config.php);
echo 'Hi There Welcome'
$sql = "SELECT * FROM `user`";
$stmtselect = $db->prepare($sql);
$result = $stmtselect->execute([]);
if($result){
    echo "success"
}else{
    echo 'Error Connection'
}
?>