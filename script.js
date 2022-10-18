
var dadosRequisitados = (dados) =>{
    localStorage.setItem("Dados Pesquisados", JSON.stringify(dados));
}

var getRequisitados = function() {

    return JSON.parse(localStorage.getItem("Dados Pesquisados"));

  
}


var pesquisa1 = function(url){
    return new Promise(function(resolve, reject){
        setTimeout(()=>{
            let ajax = new XMLHttpRequest();
            ajax.open('GET', url);
            ajax.send(null);
    
            ajax.onreadystatechange = function(){
                if(ajax.readyState === 4){
                    if(ajax.status === 200){
                        resolve(JSON.parse(ajax.responseText));
                    }else{
                        reject('Não foi encontrato nenhum usuário com este nome.')
                    }
                }
            }

        },1000);;//timeout
    });
}


var pesquisa2 = function(url){
    return new Promise(function(resolve, reject){
        setTimeout(()=>{
            let ajax = new XMLHttpRequest();
            ajax.open('GET', url);
            ajax.send(null);
    
            ajax.onreadystatechange = function(){
                if(ajax.readyState === 4){
                    if(ajax.status === 200){
                        resolve(JSON.parse(ajax.responseText));
                    }else{
                        reject('Não foi encontrato nenhum usuário com este nome.')
                    }
                }
            }

        },500);;//timeout
    });
}

$(".informacao").css("height", "100px");
$(".finalidade").fadeToggle();

$("#info").click(function(){
    $(".finalidade").slideToggle(2000,function(){
            $(".informacao").animate({"height": "200px"},2000);     
    });
   $("#info").toggleClass("rodar");
});

$("[type=button]").click(function(){
    
    var nome =  $("[name=nome]").val();
  
    if(nome.length == 0){
        $("[name=nome]").css({"border": "solid #B40404 2px"})
       
    }else{
        $("[name=nome]").css({"border": "solid #001907 1px"})
    let uniaofederativa = $("[name=uf]").val();
   
    pesquisa1(`https://dadosabertos.camara.leg.br/api/v2/deputados?nome=${nome}&siglaUf=${uniaofederativa}&siglaUf=&ordem=ASC`).
    then(function(response){ 
        
            var promessa1 = response['dados']['0']['uri'];
            pesquisa2(promessa1).
            then(function(respo){
                
                 
                 
                var listaConteudo =[respo.dados.nomeCivil, respo.dados.cpf, respo.dados.dataNascimento,
                    respo.dados.municipioNascimento, respo.dados.sexo, respo.dados.ultimoStatus.condicaoEleitoral,
                    respo.dados.ultimoStatus.siglaPartido, respo.dados.ultimoStatus.siglaUf, respo.dados.escolaridade,
                    respo.dados.ultimoStatus.gabinete.nome, respo.dados.ultimoStatus.gabinete.predio, respo.dados.ultimoStatus.gabinete.sala,
                    respo.dados.ultimoStatus.gabinete.andar, respo.dados.ultimoStatus.gabinete.email,
                    respo.dados.ultimoStatus.gabinete.telefone, respo.dados.ultimoStatus.urlFoto
                    
                ];
              
             
                dadosRequisitados(listaConteudo);
               
            });
    });
   
    var s = document.createElement('a');
    s.setAttribute('id','resposta');
    s.setAttribute('href','resultado.html')
    s.setAttribute("target","_blank");

    document.querySelector(".resposta_pesquisar").appendChild(s);
    
  $("#resposta").text("Dados disponiveis")
    
 

   
}

document.querySelector('input[name=nome]').value = ''
document.querySelector('input[name=uf]').value = ''
});


