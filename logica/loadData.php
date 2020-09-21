<?php
/* Obtenemos todas las preguntas dependiendo del sector. Se almacenan en un 
array y en la última posción, se indica el sector. Todo se devuelve como un
JSON */

include '../logica/conexion.php';

global $conexion;

$sector = $_REQUEST['sector'];

$container=[];

$sql = ("SELECT p.id, p.pregunta, s.servicio 
FROM preguntas p
INNER JOIN servicios s
ON s.id = p.servicio
INNER JOIN sectores se
ON se.id = p.sector
WHERE se.sector = '$sector'");

if($result = $conexion -> query($sql)){

    if ($result->num_rows > 0){
    
        while($temp = $result->fetch_assoc()){
            $container[] = $temp;
        }
    }
    
    $container['sector']=$sector;

    echo json_encode($container);

}else{
    echo $conexion->error;
}