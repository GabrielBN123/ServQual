<?php
$perguntas = array(
    // categoria            ids das divs
    'Tangibilidade'     => ['tang-1', 'tang-2', 'tang-3', 'tang-4', 'tang-5'],
    // 
    'Confiabilidade'    => ['conf-1', 'conf-2', 'conf-3', 'conf-4', 'conf-5'],
    // 
    'Presteza'          => ['pres-1', 'pres-2', 'pres-3', 'pres-4', 'pres-5'],
    // 
    'Segurança'         => ['seg-1', 'seg-2', 'seg-3', 'seg-4', 'seg-5'],
    // 
    'Empatia'           => ['emp-1', 'emp-2', 'emp-3', 'emp-4', 'emp-5']

);
foreach($perguntas as $titulos => $dados){
    if(isset($_POST[$titulos]) == false){
        header('Location: ./');
    }
}