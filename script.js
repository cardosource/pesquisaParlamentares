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



$(".informacao").css("height", "100px");
$(".finalidade").fadeToggle();

$("#info").click(function(){
    $(".finalidade").slideToggle(2000,function(){
            $(".informacao").animate({"height": "200px"},2000);     
    });
   $("#info").toggleClass("rodar");
});

$("[type=button]").click(function(){
    let nome =  parent(($("[name=nome]").val()));
    let uniaofederativa = $("[name=uf]").val();
    
    console.log(nome )

    
   
});
