var last_number = 0;
var this_number = 0;
var aux = 0;
var linha = "";
var fibonacci = function fibonacci (number){
    for (var index = 0; index < number; index++) {
        if(index == 1){
            last_number = this_number;
            this_number++;
        }
        else{
            aux = last_number;
            last_number = this_number;
            this_number += aux;
        }
        if(this_number > number)
            break;
        if(linha != "")
            linha += ", ";
        linha += this_number;
    }
    console.log(linha);
};  
module.exports = fibonacci;