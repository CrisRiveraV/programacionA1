<?php

date_default_timezone_set('America/El_Salvador')
if($_GET){
nombre = $_GET['name'];
echo 'Hola'.$nombre.'desde el servidor, fecha: '.date('d-n-Y H:i:s');
}else{
    header('location:index.html');
}
?>