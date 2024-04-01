
//unpacking of object properties
var myfun=()=>
{
    var u={
        a:10,
        b:120,
    };
    var {a}=u;
    console.log(u.a);
    console.log(a);
};
myfun();
//unpacking from arrays
var usernames=[1,2,3,4,5,6];
console.log(usernames[2]);
console.log(usernames[2]);
console.log(usernames[2]);
//sequence matters.

var [x,y,z]=usernames;
console.log(z);
var s={
    a:"VAISH",
}
console.log(s.a);
var {a}=s;
console.log(a);

