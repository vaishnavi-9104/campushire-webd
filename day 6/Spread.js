//to copy properties from one object to another object is using SPREAD operator(...)
//it allows us to take all the enumerable property of an object and add them to a new object.
var a=[10,20,30,40];
var b=[...a];
console.log(b);//its foe arrays
//for objects we use spread operator as 
var x={
    a:10,
    b:20,
    c:30,
    d:40,
}
var y={...x};
console.log(y)
function my(x,y)
{
    console.log(x,y);
}
my(10)
//my(10,20,30,40)
//rest parameter 1)...<parameter name>
//            2).... means it will hold all the remaining values of callingfunction
 //it collects elements  of arguments in array format.
function my(x,y,...args)
{
    console.log(args);
}
my(10,20,30,40,50)
my(10,20,30)


function sum(...args)
{
    var sum1=0;
    args.forEach(function(e,i)
    {
        sum1+=e;
        
    } )
    console.log(sum1)
}
sum(10,20,30,10);
sum();
sum(10);
//Arrowfunction
var add=()=>
{
    console.log("This is vaishnavi's arrow function");
}
add();