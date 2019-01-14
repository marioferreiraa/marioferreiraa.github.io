import { addListener } from "cluster";

$(function(){
    services.lista(1, callbackLista);
});

function callbackLista(data){
    console.log(data);
    var bodyTable = '';
    for(var i = 0; i < data.per_page; i++){
        bodyTable = '<tr>'+
                        '<th scope="row">1</th>'+
                        '<td>Mark</td>'+
                        '<td>Otto</td>'+
                        '<td>@mdo</td>'+
                    '</tr>';
    }
}

var soma = function(a,b){
    addListenerasd
    addListenerasd
    addListener
    return a+b;
}

const soma = (a, b) => {
    if(a && b){
        return a+b;
    }else{
        return 0;
    }
}

const soma = (a, b) => {
    if(a && b)
        return a+b;
    else
        return 0;
}