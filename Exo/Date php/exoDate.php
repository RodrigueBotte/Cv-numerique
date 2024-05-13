<!-- 
    ----------------------------Exercice D1-----------------------------
    écrire une fonction "frenchDate" qui retournera la date du jour 
    en français, puis l'afficher (exemple : jeudi 25 août 2022);
-->

<!-- 
    ----------------------------Exercice D2-----------------------------
    Utiliser la fonction précédement créé pour afficher la date 
    puis l'heure depuis laquelle l'utilisateur visite le site.
    On utilisera les sessions.
-->

<!-- 
    ----------------------------Exercice D3-----------------------------
    Afficher depuis combien de seconde l'utilisateur est présent sur le site.
-->
<?php 
session_start();
    $title = "Les dates";
    require "../ressources/template/_header.php";
    // Permet de paramètrer la timezone, le string doit être "continent/capital" en anglais
    date_default_timezone_set("Europe/Paris");
    // Si on souhaite récupérer le timestamp actuel :
    echo time(), "<br>";

function frenchDate(){
        $jour= array("Dimanche ", "Lundi ", "Mardi ", "Mercredi ", "Jeudi ", "Vendredi ", "Samedi ");
        $mois = array(" Janvier ", " Fevrier ", " Mars ", " Avril ", " Mai ", " Juin ");
        echo $jour[date("w")], date("m"), $mois[date("n")-1], date("Y"), "<br>";
        echo date("N m n Y"),"<br>";
        if(!isset($_SESSION["logged"])){
            $_SESSION["logged"] = $jour[date("w")]. date("m"). $mois[date("n")-1]. date("Y") . date("H:i:s");
            $_SESSION["timestamp"] = time();  
        };
        echo $_SESSION["logged"],  "<br>";
        echo time()-$_SESSION["timestamp"];
    }
    
    frenchDate();
    

    require "../ressources/template/_footer.php";
?>