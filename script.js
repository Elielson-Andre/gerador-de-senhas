
let nivel_selecionado = "";

function nivel(nivel_value){
    if(nivel_value == "facil"){
        nivel_selecionado = 'easy';
    }else if(nivel_value == "medio"){
        nivel_selecionado = 'medium';
    }else if(nivel_value == 'max'){
        nivel_selecionado = 'hard';
    }
}

function gerando(){   //main
    if(nivel_selecionado == "easy"){
        easy();
    }else if(nivel_selecionado  == "medium"){
        medio();
    }else if(nivel_selecionado  == "hard"){
        hard();
    }else{
    alert("Por favor, selecione o nível de segurança da sua senha");
    }

    if(nivel_selecionado == "easy" || nivel_selecionado  == "medium" || nivel_selecionado  == "hard"){
        document.getElementById("gerar").innerHTML = "GERAR NOVA SENHA";
        document.getElementById("gerar").style = "width: 250px;";
    }
    
}

function easy(){
    document.getElementById("aviso").style ="display:block;";

    let texto_usuario = document.getElementById("txt_aux").value;
    
    let letras = ["Ab","sf","pÇ","dsA","kjh","Hw","djr"];
    let caracteres = ["$&","_","@","!","*"];

    let indice = Math.floor(Math.random()*letras.length);
    let indice_carac = Math.floor(Math.random()*caracteres.length);
    let numeros = Math.floor(Math.random()*100);
    
    let res1 = numeros+caracteres[indice_carac]+letras[indice];

    let res_final = texto_usuario+res1;
    document.getElementById("senha").innerHTML = res_final;
}

function medio(){
    document.getElementById("aviso").style ="display:block;";

    let texto_usuario = document.getElementById("txt_aux").value;
    
    let letras = ["A","sf","pÇ","dsR","kjh","Hw","djr"];
    let letras2 = ["As","sdf","pÇ","msr","rjh","eryw","dgsr"];
    let caracteres = ["%","$&","_","@","!","*"];
    let caracteres2 = ["%","$&","_","@","!","*"]

    let indice = Math.floor(Math.random()*letras.length);
    let indice2 = Math.floor(Math.random()*letras2.length);
    let indice_carac = Math.floor(Math.random()*caracteres.length);
    let indice_carac2 = Math.floor(Math.random()*caracteres2.length);
    let numeros = Math.floor(Math.random()*100);
    
    let res1 = letras[indice]+numeros+caracteres[indice_carac];
    let res2 = caracteres2[indice_carac2]+letras2[indice2];

    let res_final = texto_usuario+res1+res2;
    document.getElementById("senha").innerHTML = res_final;
}

function hard(){
    document.getElementById("aviso").style ="display:block;";

    let texto_usuario = document.getElementById("txt_aux").value;
    let letras = ["A","sf","pÇ","dsW","kjh","Hw","djr"];
    let letras2 = ["As","sdf","pÇ","ht","rjh","eryw","dgsr"];

    let caracteres = ["%","$&","_","@","!","*"];
    let caracteres2 = ["%","$&","_","@","!","*"]

    let indice = Math.floor(Math.random()*letras.length);
    let indice2 = Math.floor(Math.random()*letras2.length);
    let indice_carac = Math.floor(Math.random()*caracteres.length);
    let indice_carac2 = Math.floor(Math.random()*caracteres2.length);
    let numeros = Math.floor(Math.random()*100);
    let numeros2 = Math.floor(Math.random()*2000);
    
    let res1 = letras[indice]+numeros+caracteres[indice_carac];
    let res2 = numeros2+letras2[indice2]+caracteres2[indice_carac2];

    let res_final = texto_usuario+res1+res2;
    document.getElementById("senha").innerHTML = res_final;
}