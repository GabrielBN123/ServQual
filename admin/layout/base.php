<?php
    function css($arquivo_css){
		echo '<link rel="stylesheet" href="../css/'.$arquivo_css.'.css">';
		
	}
	function javaScript($arquivo_js){
		echo '<script type="text/javascript" src="../js/'.$arquivo_js.'.js"></script>';
    }
    // css
	css('bootstrap');
	css('slider');
	css('responsividade');
	css('novo_estilo');
	// js
	javaScript('jquery');
	javaScript('bootstrap');
	javaScript('funcoes');
	
?>
