var person={name:"Sukumar",age:25,place:"tvm",
display:function(){
    console.log(this.name)
}}



console.log(person.name)
console.log(person['age'])
for(x in person)
{
    console.log(person['age'])
}
person.dob="20-10-2020"
console.log(person)
person.displayage=function(){
    console.log(this.age)
}