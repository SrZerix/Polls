<?php

/* Devuelve todas las medias. Trae las medias una a una, mediante dos contadores.
El contador que indica el sector, indica las pasadas. En el momento este supere
el valor 3, el blucle termina. Mientras tanto, el otro contador, va sacando las
diferentes medias por sector. El contador i, indica las posiciones en el array
donde se almacenan los resultado. Que se devuelve como un JSON.
*/

include '../logica/conexion.php';

global $conexion;

$contador = 1;
$contadorSector = 1;

$i = 0;

while ($contadorSector <= 3){

    $sql = "SELECT AVG(r.nota) AS Media
    FROM respuesta r, preguntas p
    WHERE p.servicio = $contador
    AND p. sector = $contadorSector
    AND r.id_pregunta = p.id";

    $result = $conexion->query($sql);

    if ($result->num_rows == 1){
        $media = $result->fetch_assoc(); 

    }else{
        echo $conexion->error;
    }

    $medias[$i] = $media['Media'];

    $i++;

        if ($contador == 3){
                $contadorSector++;
                $contador = 1;
        }else{
            $contador++;
        }
}

echo json_encode($medias);