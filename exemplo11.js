var n1 = 20;
var n2 = 20;
var n3 = 10;

var maior;

if ( n1 >= n2 && n1 >= n3){
    maior = n1;    

} else if ( n2 >= n1 && n2 >= n3 ){
    maior = n2;    

} else if ( n3 >= n1 && n3 >= n2 ){
    maior = n3;    
    
}

console.log(`O maior número é ${maior}`)