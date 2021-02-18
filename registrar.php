<?php include_once('layout/header.php'); ?>
<title>Registrar</title>
<div class="all-content">
    <div class="row-fluid">
        <div class="col-md-10 offset-1">
            <div class="col-md-12">
                <form action="" method="post">
                    <div class="form-group">
                        <!--  -->
                        <div class="card o-hidden border-0 shadow-lg my-5">
                            <div class="card-body p-0">
                                <!-- Nested Row within Card Body -->
                                <!-- teste git -->
                                <div class="col-lg-12 col-md-12">
                                    <div class="p-5">
                                    <div class="text-center">
                                        <h1 class="h4 text-gray-900 mb-4">Cadastrar</h1>
                                    </div>
                                    <form class="user" action="php/cadastro.php">
                                        <div class="form-group row">
                                            
                                            <div class="col-sm-6">
                                                <input type="text" name="empres" class="form-control form-control-user" id="empresa" placeholder="Nome da Empresa" >
                                            </div>
                                            <div class="col-sm-6">
                                                <input type="text" name="cnpf" class="form-control form-control-user" id="cnpj" placeholder="CNPJ"><br>
                                            </div>

                                            <div class="col-sm-6 mb-3 mb-sm-0">
                                                <input type="text" name="nome" class="form-control form-control-user" id="nome" placeholder=" Nome">
                                            </div>
                                            
                                            <div class="col-sm-6 mb-3 mb-sm-0">
                                                <input type="text" name="sobrenome" class="form-control form-control-user" id="sobrenome" placeholder="Sobrenome">
                                            </div>
                                        
                                        </div>
                                        <div class="form-group">
                                            <input type="email" name="email" class="form-control form-control-user" id="email" placeholder="E-mail">
                                        </div>

                                        <div class="form-group">
                                            <input type="email" name="email" class="form-control form-control-user" id="email-confirm" placeholder="Confirmar E-mail">
                                        </div>
                                        <div class="form-group row">
                                            <div class="col-sm-6 mb-3 mb-sm-0">
                                                <input type="text" name="nome" class="form-control form-control-user" id="telefone" placeholder="Telefone">
                                            </div>
                                            <div class="col-sm-6 mb-3 mb-sm-0">
                                                <input type="text" name="sobrenome" class="form-control form-control-user" id="telefone-empresa" placeholder="Telefone da Empresa">
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                        <div class="col-sm-6 mb-3 mb-sm-0">
                                            <input type="password" name="senha" class="form-control form-control-user" id="senha" placeholder="Crie uma senha">
                                        </div>
                                        <div class="col-sm-6">
                                            <input type="password" name="confirmarsenha" class="form-control form-control-user" id="confirmarsenha" placeholder="Confirme a senha">
                                        </div>
                                        </div>
                                        <a href="login.html" class="btn btn-primary btn-user btn-block" >
                                            Cadastrar conta
                                        </a>
                                    </form>
                                    <hr>
                                    </div>
                                </div>
                            </div>
                            </div>
                        <!--  -->
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

<?php
 include_once('layout/footer.php');

?>