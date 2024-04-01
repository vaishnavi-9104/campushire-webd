// function printHello()
// {
//     console.log("Hello");
// }
// for(var i=0;i<5;i++)
// {
//     printHello();
// }
// /*paramters are like varibales with out any scope statements(var,let).We define in the function definition*/
// function add(a,b)
// {
//     console.log(a+b);
// }
// add(4,5);
// add(4,7);
// add(4,6);


function name(a){
    console.log("Hello "+a);
}
name("Vasihnavi");
name("Priya");
name("Suraj");


function returna(a,b)
{
 return a+b;
}
var c=returna(4.903,20);
console.log(c);


function f(fn)
{
    fn();
    fn();
}
f(function (){console.log("hi");});//call back function/anonymous function without any name of the function



function f1()
{
    function f2()
    {

    }
    f2();
}
//we cannot call f2 outside the f1 function
//f2();

