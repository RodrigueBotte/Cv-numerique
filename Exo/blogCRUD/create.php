<?php
session_start();
require "../../../../ressources/service/_shouldBeLogged.php";
shouldBeLogged(true, "../../../02-read.php");
$idUser = $_SESSION["idUser"];
$error = [];

if($_SERVER['REQUEST_METHOD']==='GET' && isset($_GET['message'])){
    require "../../../../ressources/service/_pdo.php";
    $pdo = connexionPDO();

    if(empty($_GET['message'])){
        $error['message'] = "Il n'y a aucun message";
    }
    else{
        $message = $_GET["message"];
        $sql = $pdo->prepare("INSERT INTO messages (message, idUser) VALUES (?, ?)");
        $sql->execute( [$message, $idUser]);
        header("Location: ./read.php?id=".$idUser);
        exit();
    }
}
?>
<?