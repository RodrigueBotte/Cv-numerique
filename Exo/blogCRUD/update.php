<?php
session_start();
require "../../../../ressources/service/_shouldBeLogged.php";
require "../../../../ressources/service/_csrf.php";
shouldBeLogged(true, "./exercice/connexion.php");

if(!isset($_SESSION["idUser"], $_GET["id"]) || $_SESSION["idUser"] != $_GET["id"]){
    // header("Location: /");
    // exit;
}
require ("../../../../ressources/service/_pdo.php");
$pdo = connexionPDO();
// $sql = $pdo->prepare("SELECT message, idMessage FROM messages where idMessage=:id");
// $sql->execute(["id"=>(int)$_GET["idMessage"]]);
// $row = $sql->fetch();

$message = "";
$error = [];
if($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['message'])){
    if(empty($_GET['message'])){
        $message = $_GET['message'];
    }
    else{
        $message = cleanData($_GET['message']);
    }
    if(empty($error)){
        $sql = $pdo->prepare('UPDATE messages SET message=? WHERE idMessage= ?');
        $sql->execute([$message, $_GET['id']]);
    }
}
$title = "Modification de votre message";
require ('../../../../ressources/Template/_header.php');
// if($row):
?>
    <form action="" method="GET">
        <label for="message">Modifier le message</label><br>
        <textarea name="message" id="message" ></textarea><br>
        <input type="hidden" name="id" value="<?php echo $_GET["id"] ?>">
        <input type="submit" value="Envoyer">
    </form>
<?php
// endif;
require ('../../../../ressources/Template/_footer.php')
?>