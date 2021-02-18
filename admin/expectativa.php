<?php 
    // Cabeçalho
    include_once('layout/header.php');
    // Vetores para criar documentos html
    $categorias = array(
        // categoria        cor de fundo    cor da fonte
        'Tangibilidade'     => ['orange',       ''],
        'Confiabilidade'    => ['white',        ''],
        'Presteza'          => ['red',          ''],
        'Segurança'         => ['blue',         ''],
        'Empatia'           => ['black',        '']
    );
    // vetor de dados para as perguntas / titulos e ids/names
    $id = array(
        //     ids das divs
        //tangibilidade 
        0  => ['tang-1', 'tang-2', 'tang-3', 'tang-4', 'tang-5'],
        // confiabiidade
        1  => ['conf-1', 'conf-2', 'conf-3', 'conf-4', 'conf-5'],
        // presterza
        2  => ['pres-1', 'pres-2', 'pres-3', 'pres-4', 'pres-5'],
        // segurança
        3  => ['seg-1', 'seg-2', 'seg-3', 'seg-4', 'seg-5'],
        // empatia
        4  => ['emp-1', 'emp-2', 'emp-3', 'emp-4', 'emp-5']
    );
    $conteudo_txt = array(
        'Tangibilidade' => ['01 t Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type',
                            '02 t Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type', 
                            '03 t Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type', 
                            '04 t Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type', 
                            '05 t Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type'],
        //
        'Confiabilidade' =>['01 c Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type',
                            '02 c Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type', 
                            '03 c Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type', 
                            '04 c Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type', 
                            '05 c Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type'],
        //
        'Presteza'      => ['01 p Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type',
                            '02 p Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type',
                            '03 p Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type',
                            '04 p Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type',
                            '05 p Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type'],
        //
        'Segurança'     => ['01 s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type',
                            '02 s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type', 
                            '03 s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type', 
                            '04 s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type', 
                            '05 s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type'],
        //
        'Empatia'       => ['01 e Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type',
                            '02 e Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type', 
                            '03 e Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type', 
                            '04 e Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type', 
                            '05 e Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type']
    );
    $id_cont = 0;
?>

<title>Expectativa</title>

<div class="all-content">
    <div class="row col-md-12">
    <!-- criação dos botoes para adicionar o conteudo -->
    <!-- formulário para mandar para o mesmo site, e adiocionar o conteudo  -->
    <form action="expectativa.php" method="POST" class="col-md-12">
        <div class="offset-1 col-md-11">
            <?php
                // foreache para pegar o vetor e dividir em variáveis e criar botôes respectivos ao titulo
                foreach($categorias as $categoria => $param){
                ?>
                <!-- div para criar o tamanho exato -->
                <div class="mb-3 col-md-2 float mr-4">
                    <!-- label para selecionar o input type check-box com seu titulo -->
                    <label for="check-<?php echo $categoria; ?>" class="col-md-12 btn py-3 px-3 btn-outline-primary">
                        <div class="input-categoria custom-control custom-checkbox">
                            <!-- input para controle do formulário/ não visivel/ se um valor já tiver sido enviado com o nome do input deixar como checado -->
                            <input type="checkbox" name="<?php echo $categoria.'"';if(isset($_POST[$categoria]) == true){echo 'checked="true"';} ?>"  id="check-<?php echo $categoria; ?>" value="<?php echo $categoria; ?>" class="custom-control-input">
                            <!-- label para criar um input vísivel ao lado -->
                            <label class="custom-control-label" for="check-<?php echo $categoria; ?>">
                                <?php echo $categoria; ?>
                            </label>
                        </div>
                    </label>
                </div>
                <?php
                }
            ?>
            
        </div>
        <!-- botão para enviar para adicionar os formulários -->
        <input type="submit" value="Adicionar"  class="btn col-md-1 offset-11 btn-dark">
    </form>
    
    </div>

    <div class="row col-md-12 p-0 mx-0">
    <form action="confirmation.php" method="post" class="col-md-12 mx-0 px-0">
        <!-- foreach a parti daqui -->
        <?php foreach($conteudo_txt as $title => $textos){ $cont_id = 0; if(isset($_POST[$title]) == true){?>
            <div class="col-md-12"> <div class="col-md-12 mb-5 px-0 ">
                <nav class="navbar py-3 px-0" >
                    <h1 class="mx-auto"> <?php echo $title;?> </h1>
                </nav>
                </div>
                <div class="col-md-10 offset-1 p-1 mb-5 border rounded">
                    <?php foreach($textos as $textos){?>
                        <!-- texto padrão -->
                        <div class="col-md-12 border p-2 rounded my-1 " id="<?php echo $id[$id_cont][$cont_id];?>">
                            <p class="texto_pergunta" id="<?php echo $id[$id_cont][$cont_id].'-texto';?>">
                                <?php echo $textos; ?>
                            </p>
                            <button class="btn btn-dark offset-12 btn_123" type="button" title="Editar" onclick="editar('<?php echo $id[$id_cont][$cont_id];?>')">Editar</button>
                        </div>
                        <!-- text-box para inserir o texto -->
                        <div class="col-md-12 border hidden_input_pergunta p-2 rounded text-editor" id="<?php echo $id[$id_cont][$cont_id]."-div-text";?>"> <!--text-editor-->
                            <div class="input-group mb-2">
                                <textarea class="form-control col-md-12" aria-label="With textarea" name="name-<?php echo $id[$id_cont][$cont_id]; ?>" id="<?php echo $id[$id_cont][$cont_id]; ?>-text-edited" placeholder="Insira sua Pergunta"></textarea>
                            </div>
                            <button class="btn btn-dark" title="Editar" type="button" onclick="salvar('<?php echo $id[$id_cont][$cont_id]; ?>')">Salvar</button>
                            <button class="btn btn-dark" title="Editar" type="button" onclick="cancelar('<?php echo $id[$id_cont][$cont_id];?>')">Cancelar</button>
                        </div>
                        <?php $cont_id ++;
                        }
                        echo '</div></div>';}$id_cont ++;}
            foreach($conteudo_txt as $title => $value){
                if(isset($_POST[$title]) == true){ 
                    ?>
                        <input type="submit" value="Enviar"  class="btn col-md-1 offset-10 btn-dark">
                    <?php
                    break;
                }
            }
        ?>

        </form>
    </div>
</div>



<?php
    // Rodapé
    include_once('layout/footer.php');
?>