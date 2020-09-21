<?php 

include '../logica/conexion.php';

global $conexion;

$answers = explode(",",$_REQUEST['answers']);
$arrayIdQuestion = explode(",",$_REQUEST['arrayIdQuestion']);

$sentencia = $conexion-> prepare("INSERT INTO respuesta VALUES(null, ?, ?)");

for($i = 0; $i < sizeof($answers); $i++){

    $sentencia -> bind_param("ii",$arrayIdQuestion[$i],$answers[$i]);

    $sentencia -> execute();
}