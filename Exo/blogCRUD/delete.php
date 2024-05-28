<?php
require "../../../../ressources/service/_shouldBeLogged.php";
shouldBeLogged(true, "./exercice/connexion.php");

require ("../../../../ressources/service/_pdo.php");

$connexion = connexionPDO() ;
$sql = $connexion->prepare("DELETE FROM messages WHERE idMessage=?");
$sql->execute([$_GET['id']]);
header('Location: ./read.php?id='.$_GET['idUser']);
exit;

?>