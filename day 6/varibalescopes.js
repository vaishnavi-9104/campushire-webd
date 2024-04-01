function scope()
{
    var a=10;
    let b=20;
    if(true)
    {
        let c=30;
        var d=40;
        console.log("Inside If Block");
        console.log(a);    
        console.log(b);    
        console.log(c);    
        console.log(d);    
    }
    console.log(a);    
        console.log(b);    
        console.log(c);    
        console.log(d);    
}