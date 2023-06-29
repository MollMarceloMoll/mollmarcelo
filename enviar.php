<?php 
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $asunto = $_POST['asunto'];
    $mensaje = $_POST['mensaje'];

    $destinatario = 'mollmarcelomoll@gmail.com';
    $correo = "Nombre: $nombre\nMensaje: $mensaje\n";

    mail($destinatario, $asunto, $correo);

    header('Location: confirmacion.html');
    exit();
}
?>