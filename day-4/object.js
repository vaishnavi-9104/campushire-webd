//object is a data structure and collection of properties
//it can hold key value pairs, where the property
//is known as a field or attribute.
// let phone = {
//     Name: "iPhone",
//     Version: 15,
//     Price:120000,
//     RAM:"8GB",
//     ROM:"512GB",
//     Color:" Black"
// }

// /*Accessing Property in JavaScript Objects*/

// console.log(phone.Name);
//

//object with in object is nested object
var user=
{
    name :"vaishnavi",
    number : 8387223221,
    address: {
        city:"hyd",
        pin_no:"502319",
        colony:"sairam colony",
    },
};
console.log(user);
console.log(user.address);
console.log(user.address["city"])

///insert new property in the object;
//<object-name>.<KeyName>="Value";
user.address.city="Hyderabad";
console.log(user.address["city"]);
user.rating=4.5;
delete user.address.colony;
console.log(user);
// . is used for static object accessing and [] is used for dynamic object accessing
