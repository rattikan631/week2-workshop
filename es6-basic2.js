// keyword let ==> block code
// keyword var ==> function code
// keyword const ==> block code
const orange = 12;
let apple = 15;
var banana = 10;
var banana = 10;
{
    var banana = 5; //replace => banana 10
    console.log(banana + 5); //10
}
orange = 10;
console.log(orange); //?
console.log(banana + 10); //20
console.log(apple); //15