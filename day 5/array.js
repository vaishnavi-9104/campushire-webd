var info=["vaishnavi",9104,9,1,2004,"priya"];
//length
length=info.length;
console.log(length);
//to add element
console.log(info);
info.push(10);
console.log(info);
//to add element at first
info.unshift(10)
console.log(info);
//to remove last element
info.pop();
console.log(info);
//to remove first element
info.shift();
console.log(info);
//to remove/manipulate any element of array
info.splice(2,1,'a');
console.log(info);
//how to slice the array
console.log(info.slice(2,length));
//foreach ...THERE IS NO NEDD TO RETURN ANYTHING
info.forEach(function(ele,index)
{
    console.log(ele,index);
});
//to print 110,210,310,410
data=[100,200,300,400]
var foreach=data.forEach(function(element)
{
    console.log(element+10);
})
console.log("variable for for each",foreach)
//print less than 300
data.forEach(function(element,index)
{
    if(element<=300)
    {
        console.log(element);
    }
})
//without for each
data[0]=data[0]+10;
data[1]=data[1]+10;
data[2]=data[2]+10;
data[3]=data[3]+10;
console.log(data[0],data[1],data[2],data[3]);
//

//map function is same as forEach but we need  to return something from it as the return type will be array

var arr=data.map(function(element,index)
{
    return element+20;
})
console.log(arr);