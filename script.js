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