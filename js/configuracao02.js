$(document).ready(function(){
	$("a").on('click', function(event) {

		// Certifique-se de que this.hash tenha um valor antes de substituir o comportamento padrão
		if (this.hash !== "") {
		  // Impedir o comportamento padrão do clique na âncora
		  event.preventDefault();
	
		  // Armazenar hash
		  var hash = this.hash;
	
		  // Usando o método animate () do jQuery para adicionar rolagem de página suave
		  // O número opcional (800) especifica o número de milissegundos necessário para rolar para a área especificada
		  $('html, body').animate({
			scrollTop: $(hash).offset().top
		  }, 800, function(){
	   
			// Adicione o hash (#) ao URL ao concluir a rolagem (comportamento padrão do clique)
			window.location.hash = hash;
		  });
		} // Fim se
	  });
	  
});
//vetor das perguntas
var per_tan = [5];
var per_con = [5];
var per_pre = [5];
var per_seg = [5];
var per_emp = [5];
var uni;
/* --------------Inicio mostrar e esconder o a div e pegar um texto para escrever na tela  tang*/
function showEdit001(){
	$("#per_01_tang").hide();
	$('#input_001').show();
	$('#btn-a-001').hide();
	uni = $('#per_01_tang').text;
}
function can_01_tang(){
	$('#input_001').hide();
	$("#per_01_tang").show();
	$('#btn-a-001').show();
}
function per_01_tang(){
	per_tan[1] = document.getElementById('pergunta_001_ID').value;
	$("#per_01_tang").text(per_tan[1]);
	$('#input_001').hide();
	$("#per_01_tang").show();
	$('#btn-a-001').show();
}
function showEdit002(){
	$("#per_02_tang").hide();
	$('#input_002').show();
	$('#btn-a-002').hide();
}
function per_02_tang(){
	per_tan [2] = document.getElementById('pergunta_002_ID').value;
	$("#per_02_tang").text("2- "+per_tan [2]);
	$('#input_002').hide();
	$("#per_02_tang").show();
	$('#btn-a-002').show();
}
function showEdit003(){
	$("#per_03_tang").hide();
	$('#input_003').show();
	$('#btn-a-003').hide()
}
function per_03_tang(){
	per_tan [3]= document.getElementById('pergunta_003_ID').value;
	$("#per_03_tang").text("3- "+per_tan [3]);
	$('#input_003').hide();
	$("#per_03_tang").show();
	$('#btn-a-003').show();
}
function showEdit004(){
	$("#per_04_tang").hide();
	$('#input_004').show();
	$('#btn-a-004').hide()
}
function per_04_tang(){
	per_tan [4] = document.getElementById('pergunta_004_ID').value;
	$("#per_04_tang").text("4- "+per_tan [4]);
	$('#input_004').hide();
	$("#per_04_tang").show();
	$('#btn-a-004').show();
}
function showEdit005(){
	$("#per_05_tang").hide();
	$('#input_005').show();
	$('#btn-a-005').hide()
}
function per_05_tang(){
	per_tan [1] = document.getElementById('pergunta_005_ID').value;
	$("#per_05_tang").text("5- "+per_tan [5]);
	$('#input_005').hide();
	$("#per_05_tang").show();
	$('#btn-a-005').show();
}
/* --------------fim mostrar e esconder o a div e pegar um texto para escrever na tela*/

/* cada 001 é tangibilidade se for 020 ja começa a segunda parte de confiabilidade e se for 030 é a parte
de presteza e por assim em diante a cada casa decimal é a mudança da categoria */
// -----------------------------------bloco 2--------------------------------
function showEdit021(){
	$("#per_01_conf").hide();
	$('#input_021').show();
	$('#btn-a-021').hide()
}
function per_01_conf(){
	per_con[1] = document.getElementById('pergunta_021_ID').value;
	$("#per_01_conf").text("1- "+per_con[1]);
	$('#input_021').hide();
	$("#per_01_conf").show();
	$('#btn-a-021').show();
}
function showEdit022(){
	$("#per_02_conf").hide();
	$('#input_022').show();
	$('#btn-a-022').hide();
}
function per_02_conf(){
	per_con[2] = document.getElementById('pergunta_022_ID').value;
	$("#per_02_conf").text("2- "+per_con[2]);
	$('#input_022').hide();
	$("#per_02_conf").show();
	$('#btn-a-022').show();
}
function showEdit023(){
	$("#per_03_conf").hide();
	$('#input_023').show();
	$('#btn-a-023').hide()
}
function per_03_conf(){
	per_con[3] = document.getElementById('pergunta_023_ID').value;
	$("#per_03_conf").text("3- "+per_con[3]);
	$('#input_023').hide();
	$("#per_03_conf").show();
	$('#btn-a-023').show();
}
function showEdit024(){
	$("#per_04_conf").hide();
	$('#input_024').show();
	$('#btn-a-024').hide()
}
function per_04_conf(){
	per_con[4] = document.getElementById('pergunta_024_ID').value;
	$("#per_04_conf").text("4- "+per_con[4]);
	$('#input_024').hide();
	$("#per_04_conf").show();
	$('#btn-a-024').show();
}
function showEdit025(){
	$("#per_05_conf").hide();
	$('#input_025').show();
	$('#btn-a-025').hide()
}
function per_05_conf(){
	per_con[5] = document.getElementById('pergunta_025_ID').value;
	$("#per_05_conf").text("5- "+per_con[5]);
	$('#input_025').hide();
	$("#per_05_conf").show();
	$('#btn-a-025').show();
}
//---------------------------------fim do bloco 2--------------------------------
//---------------------------------Inicio do bloco 3----------------------------
function showEdit031(){
	$("#per_01_pres").hide();
	$('#input_031').show();
	$('#btn-a-031').hide()
}
function per_01_pres(){
	per_pre[1] = document.getElementById('pergunta_031_ID').value;
	$("#per_01_pres").text("1- "+per_pre[1]);
	$('#input_031').hide();
	$("#per_01_pres").show();
	$('#btn-a-031').show();
}
function showEdit032(){
	$("#per_02_pres").hide();
	$('#input_032').show();
	$('#btn-a-032').hide();
}
function per_02_pres(){
	per_pre[2] = document.getElementById('pergunta_032_ID').value;
	$("#per_02_pres").text("2- "+per_pre[2]);
	$('#input_032').hide();
	$("#per_02_pres").show();
	$('#btn-a-032').show();
}
function showEdit033(){
	$("#per_03_pres").hide();
	$('#input_033').show();
	$('#btn-a-033').hide()
}
function per_03_pres(){
	per_pre[3] = document.getElementById('pergunta_033_ID').value;
	$("#per_03_pres").text("3- "+per_pre[3]);
	$('#input_033').hide();
	$("#per_03_pres").show();
	$('#btn-a-033').show();
}
function showEdit034(){
	$("#per_04_pres").hide();
	$('#input_034').show();
	$('#btn-a-034').hide()
}
function per_04_pres(){
	var per_034 = document.getElementById('pergunta_034_ID').value;
	$("#per_04_pres").text("4- "+per_034);
	$('#input_034').hide();
	$("#per_04_pres").show();
	$('#btn-a-034').show();
}
function showEdit035(){
	$("#per_05_pres").hide();
	$('#input_035').show();
	$('#btn-a-035').hide()
}
function per_05_pres(){
	var per_035 = document.getElementById('pergunta_035_ID').value;
	$("#per_05_pres").text("5- "+per_035);
	$('#input_035').hide();
	$("#per_05_pres").show();
	$('#btn-a-035').show();
}
//---------------------------------fim do bloco 3-------------------------------
//---------------------------------inicio do bloco 4---------------------------
function showEdit041(){
	$("#per_01_seg").hide();
	$('#input_041').show();
	$('#btn-a-041').hide()
}
function per_01_seg(){
	var per_041 = document.getElementById('pergunta_041_ID').value;
	$("#per_01_seg").text("1- "+per_041);
	$('#input_041').hide();
	$("#per_01_seg").show();
	$('#btn-a-041').show();
}
function showEdit042(){
	$("#per_02_seg").hide();
	$('#input_042').show();
	$('#btn-a-042').hide();
}
function per_02_seg(){
	var per_042 = document.getElementById('pergunta_042_ID').value;
	$("#per_02_seg").text("2- "+per_042);
	$('#input_042').hide();
	$("#per_02_seg").show();
	$('#btn-a-042').show();
}
function showEdit043(){
	$("#per_03_seg").hide();
	$('#input_043').show();
	$('#btn-a-043').hide()
}
function per_03_seg(){
	var per_043 = document.getElementById('pergunta_043_ID').value;
	$("#per_03_seg").text("3- "+per_043);
	$('#input_043').hide();
	$("#per_03_seg").show();
	$('#btn-a-043').show();
}
function showEdit044(){
	$("#per_04_seg").hide();
	$('#input_044').show();
	$('#btn-a-044').hide()
}
function per_04_seg(){
	var per_044 = document.getElementById('pergunta_044_ID').value;
	$("#per_04_seg").text("4- "+per_044);
	$('#input_044').hide();
	$("#per_04_seg").show();
	$('#btn-a-044').show();
}
function showEdit045(){
	$("#per_05_seg").hide();
	$('#input_045').show();
	$('#btn-a-045').hide()
}
function per_05_seg(){
	var per_045 = document.getElementById('pergunta_045_ID').value;
	$("#per_05_seg").text("5- "+per_045);
	$('#input_045').hide();
	$("#per_05_seg").show();
	$('#btn-a-045').show();
}
//------------------------------------fim do bloco 4-----------------------
//------------------------------------inico do bloco 5-------------------
function showEdit051(){
	$("#per_01_emp").hide();
	$('#input_051').show();
	$('#btn-a-051').hide()
}
function per_01_emp(){
	var per_051 = document.getElementById('pergunta_051_ID').value;
	$("#per_01_emp").text("1- "+per_051);
	$('#input_051').hide();
	$("#per_01_emp").show();
	$('#btn-a-051').show();
}
function showEdit052(){
	$("#per_02_emp").hide();
	$('#input_052').show();
	$('#btn-a-052').hide();
}
function per_02_emp(){
	var per_052 = document.getElementById('pergunta_052_ID').value;
	$("#per_02_emp").text("2- "+per_052);
	$('#input_052').hide();
	$("#per_02_emp").show();
	$('#btn-a-052').show();
}
function showEdit053(){
	$("#per_03_emp").hide();
	$('#input_053').show();
	$('#btn-a-053').hide()
}
function per_03_emp(){
	var per_053 = document.getElementById('pergunta_053_ID').value;
	$("#per_03_emp").text("3- "+per_053);
	$('#input_053').hide();
	$("#per_03_emp").show();
	$('#btn-a-053').show();
}
function showEdit054(){
	$("#per_04_emp").hide();
	$('#input_054').show();
	$('#btn-a-054').hide()
}
function per_04_emp(){
	var per_054 = document.getElementById('pergunta_054_ID').value;
	$("#per_04_emp").text("4- "+per_054);
	$('#input_054').hide();
	$("#per_04_emp").show();
	$('#btn-a-054').show();
}
function showEdit055(){
	$("#per_05_emp").hide();
	$('#input_055').show();
	$('#btn-a-055').hide()
}
function per_05_emp(){
	var per_055 = document.getElementById('pergunta_055_ID').value;
	$("#per_05_emp").text("5- "+per_055);
	$('#input_055').hide();
	$("#per_05_emp").show();
	$('#btn-a-055').show();
}
//------------------------------------fim do bloco 5---------------------

// checkbox

function checkchange_01(){
	$("#Tangilidade_sec").toggle();
}
function checkchange_02(){
	$("#Confiablidade_sec").toggle();
}
function checkchange_03(){
	$("#Presteza_sec").toggle();
}
function checkchange_04(){
	$("#Seguranca_sec").toggle();
}
function checkchange_05(){
	$("#Empatia_sec").toggle();
}
/* esta função está verificando toda vez que o botão for clicado 
e se o checkbox estiver checado ele ira transformar o bloco senão 
ira ignorar a opção acima e ira alterar o css do outro elemento deixando ele com a largura de 100%.
*/
function graf_01_oc(){
	$("#percepcao").toggle(function(){
	if ($("#check-in1").is(':checked')) {
	$("#percepcao").show();
	$("#expectativa").css("width","790px");

	} 
	else{
	$("#percepcao").hide();
	$("#expectativa").css("width","100%");
}
	});

}
function graf_02_oc(){
	$("#expectativa").toggle(function(){
	if ($("#check-in2").is(':checked')) {
	$("#expectativa").show();
	$("#percepcao").css("width","790px");
	} 
	else{
	$("#expectativa").hide();
	$("#percepcao").css("width","100%");
}
	});

}
function graf_03_oc(){
	if ($("#check-in3").is(':checked')){
	$("#uniao-graf").show();
}else {
	$("#uniao-graf").hide();
}
}

// teste lógico se vai pegar apenas os dados selecionados...
function salvar_dados(){
	var checkout01 = document.getElementById('check01');//Tangibilidade
	var checkout02 = document.getElementById('check02');//Confiabilidade
	var checkout03 = document.getElementById('check03');//Presteza
	var checkout04 = document.getElementById('check04');//Segurança
	var checkout05 = document.getElementById('check05');//Empatia

//Comando de seleção para salvar os dados das categorias---------------------
	if ((checkout01.checked)&&(checkout02.checked)&&(checkout03.checked)&&(checkout04.checked)&&(checkout05.checked)) {
	alert('Os dados de todas as categorias forão salvas')
	}
// -------------------------------checagem quadrupla--------------------------------------
	else if ((checkout01.checked)&&(checkout03.checked)&&(checkout04.checked)&&(checkout05.checked)) {
		alert('Os dados de todas as categorias forão salvas exceto Confiabilidade');
	}
	else if ((checkout01.checked)&&(checkout02.checked)&&(checkout04.checked)&&(checkout05.checked)) {
		alert('Os dados de todas as categorias forão salvas exceto Presteza');
	}
	else if ((checkout01.checked)&&(checkout02.checked)&&(checkout03.checked)&&(checkout05.checked)) {
		alert('Os dados de todas as categorias forão salvas exceto Segurança');
	}
	else if ((checkout01.checked)&&(checkout02.checked)&&(checkout03.checked)&&(checkout02.checked)) {
		alert('Os dados de todas as categorias forão salvas exceto Empatia');
	}
	else if ((checkout02.checked)&&(checkout03.checked)&&(checkout04.checked)&&(checkout05.checked)) {
		alert('Os dados de todas as categorias forão salvas exceto de tangibilidade');
	}
// -------------------------------fim checagem quadrupla --------------------------------------


//------------------------------------ainda falta terminar --------------------------------- mas enquanto é so isso 
// -------------------------------falta definir todas as possibilidades---------------------------------------------------


//-----------------------------checagem tripla----------------------------------------
// foco check 01 e 02
else if ((checkout01.checked)&&(checkout02.checked)&&(checkout03.checked)) {
	alert('Apenas Os dados de Tangibilidade, Confiabilidade e Presteza forão salvas');
}
else if ((checkout01.checked)&&(checkout02.checked)&&(checkout04.checked)) {
	alert('Apenas Os dados de Tangibilidade, Confiabilidade e Segurança forão salvas');
}
else if ((checkout01.checked)&&(checkout02.checked)&&(checkout05.checked)) {
	alert('Apenas Os dados de Tangibilidade, Confiabilidade e empatia forão salvas');
}
// foco check 02
else if ((checkout02.checked)&&(checkout03.checked)&&(checkout04.checked)) {
	alert('Apenas Os dados de Confiabilidade, Presteza e Segurança forão salvas');
}
else if ((checkout02.checked)&&(checkout04.checked)&&(checkout05.checked)) {
	alert('Apenas Os dados de Confiabilidade, Segurança e Empatia forão salvas');
}
else if ((checkout02.checked)&&(checkout03.checked)&&(checkout05.checked)){
	alert('Apenas Os dados de Confiabilidade, Presteza e Empatia forão salvas');
}
// foco check 03
else if ((checkout03.checked)&&(checkout04.checked)&&(checkout05.checked)) {
	alert('Apenas Os dados de presteza, segurança e empatia forão salvas');
}
//-----------------------------fim checagem tripla----------------------------------------


//------------------------checagem em dupla de tangibildade-------------------------------
	else if ((checkout01.checked)&&(checkout02.checked)){
		alert('Apenas Os dados de Tangibilidade e Confiabilidade forão salvas');
	}
	else if ((checkout01.checked)&&(checkout03.checked)){
		alert('Apenas Os dados de Tangibilidade e Presteza forão salvas');
	}
	else if ((checkout01.checked)&&(checkout04.checked)){
		alert('Apenas Os dados de Tangibilidade e Segurança forão salvas');
	}
	else if ((checkout01.checked)&&(checkout05.checked)){
		alert('Apenas Os dados de Tangibilidade e Empatia forão salvas');
	}
//------------------------fim checagem em dupla de tangibildade-------------------------------

//------------------------checagem em dupla de Confiabilidade-------------------------------
else if ((checkout02.checked)&&(checkout03.checked)){
	alert('Apenas Os dados de Confiabilidade e Presteza forão salvas');
}
else if ((checkout02.checked)&&(checkout04.checked)){
	alert('Apenas Os dados de Confiabilidade e Segurança forão salvas');
}
else if ((checkout02.checked)&&(checkout05.checked)){
	alert('Apenas Os dados de Confiabilidade e Empatia forão salvas');
}
//------------------------fim checagem em dupla de Confiabilidade-------------------------------


//------------------------checagem em dupla de Presteza-------------------------------
else if ((checkout03.checked)&&(checkout04.checked)){
	alert('Apenas Os dados de Presteza e Segurança forão salvas');
}
else if ((checkout03.checked)&&(checkout05.checked)){
	alert('Apenas Os dados de Presteza e Empatia forão salvas');
}
else if ((checkout04.checked)&&(checkout05.checked)) {
	alert('Apenas Os dados de segurança e empatia forão salvas');
}
//------------------------fim checagem em dupla de Presteza-------------------------------

//------------------------------checagem particular------------------
else if ((checkout01.checked)){
	alert('Apenas Os dados de Tangibilidade forão salvas');
}
else if ((checkout02.checked)){
	alert('Apenas Os dados de Segurança forão salvas');
}
else if ((checkout03.checked)){
	alert('Apenas Os dados de Presteza forão salvas');
}
else if ((checkout04.checked)){
	alert('Apenas Os dados de Segurança forão salvas');
}
else if ((checkout05.checked)) {
	alert('Apenas Os dados de empatia forão salvas');
}
else{
	alert('Selecione alguma opção');
}
//-------------------------------fim da checagem particular----------------

	/*
	var abrir_janela = window.open('checar_perguntas.html', 'popup', "width=1300, height=500, top=50, left=50, scrollbars=no ");
function close(){
		window.close('checar_perguntas.html', 'popup');
	}
*/	
}
//--------------------função para quando o usuario clicar no botao salvar fechar a janela
//-----------------------fim da função de fechar a janela
function show_menu_lat(){
	$('#menulateral').toggle();
}
// animação da tela deslizando 
// ---------------teste de mudanca--------------------------------


// estrutura de seleção para a rolagem-------------------------------
window.onscroll = function(){
	var checkout01 = document.getElementById('check01');//Tangibilidade
	var checkout02 = document.getElementById('check02');//Confiabilidade
	var checkout03 = document.getElementById('check03');//Presteza
	var checkout04 = document.getElementById('check04');//Segurança
	var checkout05 = document.getElementById('check05');//Empatia
	var top = window.pageYOffset || document.documentElement.scrollTop
	if( top == 0 ) {
		$('#texto-titulo').text('Expectativa');
		$('.expec_header').css('background', '#4e73df');
		$('#texto-titulo').css('color', 'white');
		
	}if ((top > 280)&&(checkout01.checked)) {
		$('#texto-titulo').text('Tangibilidade');
		$('.expec_header').css('background', 'orange');
		$('#texto-titulo').css('color', 'black');
	if ((top > 1460)&&(checkout02.checked)){
		$('#texto-titulo').text('Confiabilidade');
		$('.expec_header').css('background', 'yellow');
		$('#texto-titulo').css('color', 'black');
	}if ((top > 2640)&&(checkout03.checked)){
		$('#texto-titulo').text('Presteza');
		$('.expec_header').css('background', '#2E9AFE');
		$('#texto-titulo').css('color', 'black');
	}if ((top > 3840)&&(checkout04.checked)){
		$('#texto-titulo').text('Segurança');
		$('.expec_header').css('background', '#0040FF');
		$('#texto-titulo').css('color', 'black');
	}if ((top > 5040)&&(checkout05.checked)){
		$('#texto-titulo').text('Empatia');
		$('.expec_header').css('background', '#FAAC58');
		$('#texto-titulo').css('color', 'black');
	}
	}else if ((top > 280)&&(checkout02.checked)) {
		$('#texto-titulo').text('Confiabilidade');
		$('.expec_header').css('background', 'yellow');
		$('#texto-titulo').css('color', 'black');
	if ((top > 1460)&&(checkout03.checked)){
		$('#texto-titulo').text('Presteza');
		$('.expec_header').css('background', '#2E9AFE');
		$('#texto-titulo').css('color', 'black');
	}if ((top > 2640)&&(checkout04.checked)){
		$('#texto-titulo').text('Segurança');
		$('.expec_header').css('background', '#0040FF');
		$('#texto-titulo').css('color', 'black');
	}if ((top > 3840)&&(checkout05.checked)){
		$('#texto-titulo').text('Empatia');
		$('.expec_header').css('background', '#FAAC58');
		$('#texto-titulo').css('color', 'black');
	}
	}else if ((top > 280)&&(checkout03.checked)) {
		$('#texto-titulo').text('Presteza');
		$('.expec_header').css('background', '#2E9AFE');
		$('#texto-titulo').css('color', 'black');
	if ((top > 1460 )&&(checkout04.checked)){
		$('#texto-titulo').text('Segurança');
		$('.expec_header').css('background', '#0040FF');
		$('#texto-titulo').css('color', 'black');
	}if ((top > 2640)&&(checkout05.checked)){
		$('#texto-titulo').text('Empatia');
		$('.expec_header').css('background', '#FAAC58');
		$('#texto-titulo').css('color', 'black');
	}	
	}else if ((top > 280)&&(checkout04.checked)) {
		$('#texto-titulo').text('Segurança');
		$('.expec_header').css('background', '#0040FF');
		$('#texto-titulo').css('color', 'black');
	if ((top > 1460 )&&(checkout05.checked)){
		$('#texto-titulo').text('Empatia');
		$('.expec_header').css('background', '#FAAC58');
		$('#texto-titulo').css('color', 'black');
	}	
	}else if ((top > 280)&&(checkout05.checked)) {
		$('#texto-titulo').text('Empatia');
		$('.expec_header').css('background', '#FAAC58');
		$('#texto-titulo').css('color', 'black');
	}else{
		$('#texto-titulo').text('Expectativa');
		$('.expec_header').css('background', '#4e73df');
		$('#texto-titulo').css('color', 'white');
	}
	// seleção para mostrar o botão para voltar ao topo
	if (top > 280){
		$('#voltar_ao_topo').show();
	}
	if (top < 280){
		$('#voltar_ao_topo').hide();
	}
	
	
}
//-------------------------------------------tela de checagem 

