<?php
session_start();
require "../../../../ressources/service/_shouldBeLogged.php";
shouldBeLogged(true, "../../../02-read.php");
if (!isset($_GET['id'])){
    header("Location: /");
    exit;
}
require '../../../../ressources/Template/_header.php';
require "../../../../ressources/service/_pdo.php";

$connexion = connexionPDO();
$sql = $connexion->prepare("SELECT message, idMessage FROM messages INNER JOIN users ON messages.idUser=users.idUser WHERE messages.idUser=?");
$sql->execute([$_GET['id']]);
$message = $sql->fetchAll();

if($_SESSION["username"]):
?>
<table>
    <thead>
        <tr>
            <th>Message</th>
            <th>Action</th>
        </tr>
    </thead>
    <?php foreach($message as $msg): ?>
        <tr>
            <td><?= $msg["message"]?></td>
            <td> 
                <a href="./update.php?id=<?php echo $msg['idMessage'] ?>">Modifier</a>
                <a href="./delete.php?id=<?php echo $msg['idMessage'] ?>&idUser=<?= $_GET['id'] ?> ">Supprimer</a>
            </td>
        </tr>
    <?php endforeach; ?>
</table>
    <form action="./create.php" method="GET">
        <label for="message">Nouveau message</label><br>
        <textarea name="message" id="message"></textarea><br>
        <input type="submit" value="Envoyer">
    </form>
<?php
endif;
require '../../../../ressources/Template/_footer.php';
?>