<?php
	// cabeçalho
	include_once('layout/header.php');
	$sobre_cards = array(
		'Tangibilidade' 	=> ['O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500,',	'primary'],
		'Confiabilidade'	=> ['O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500,',	'secondary'],
		'Presteaza'			=> ['O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500,',	'success'],
		'Segurança'			=> ['O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500,',	'danger'],
		'Empatia'			=> ['O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500,',	'warning']

	);
	$carrossel = array(
		'First slide label' 	=> ['Nulla vitae elit libero, a pharetra augue mollis interdum.', 		'slide5', 'active'],
		'Second slide label' 	=> ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 		'slide2', ''],
		'Third slide label'		=> ['Praesent commodo cursus magna, vel scelerisque nisl consectetur.', 'slide3', '']

	);
?>
<title>Inicio - ServQual</title>
<div class="all-content">
	<div class="row-fluid">
		<div id="carouselExampleCaptions" class="carousel slide col-md-10 offset-1" data-ride="carousel">
			<ol class="carousel-indicators">
				<li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
				<li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
				<li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
			</ol>
			<div class="carousel-inner">
				<?php
				// carrossel
					foreach($carrossel as $titulo_carr => $dados_carr){
						echo'
							<div class="carousel-item '.$dados_carr[2].'">
								<img src="img/'.$dados_carr[1].'.jpg" class="d-block w-100" alt="1">
								<div class="carousel-caption d-none d-md-block">
									<h5>'.$titulo_carr.'</h5>
									<p>'.$dados_carr[0].'</p>
								</div>
							</div>
						';
					}
				?>
			</div>
			<script>
				<?php
					
				?>
			</script>
			<a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
				<span class="carousel-control-prev-icon" aria-hidden="true"></span>
				<span class="sr-only">Previous</span>
			</a>
			<a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
				<span class="carousel-control-next-icon" aria-hidden="true"></span>
				<span class="sr-only">Next</span>
			</a>
		</div>

		<div class="row-fluid cards_content card-deck col-md-12">
			<?php
				foreach($sobre_cards as $title_card => $content_card){
					echo '
					<div class="card text-white bg-'.$content_card[1].' mb-3 col-md-12" style="max-width: 18rem;">
						<div class="card-body">
							<h5 class="card-title">'.$title_card.'</h5>
							<p class="card-text">
								'.$content_card[0].'
							</p>
						</div>
					</div>
					';
				}
			?>
		</div>
		
	</div>
	<div class="row-fluid">
		<div class="card mb-3">
			<div class="card-body">
				<h5 class="card-title">Saiba mais</h5>
				<p class="card-text">O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro. Este texto não só sobreviveu 5 séculos, mas também o salto para a tipografia electrónica, mantendo-se essencialmente inalterada. Foi popularizada nos anos 60 com a disponibilização das folhas de Letraset, que continham passagens com Lorem Ipsum, e mais recentemente com os programas de publicação como o Aldus PageMaker que incluem versões do Lorem Ipsum.</p>
			</div>
		</div>
	</div>
</div>

<?php
	include_once('layout/footer.php');
?>