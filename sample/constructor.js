function person(name,age,place)
{
    this.name=name
    this.age=age
    this.place=place
    this.display=function()
    {
        console.log("Name"+this.name+"Age"+this.age)
    }
}


var abinshah=new person("Abinshah",20,"Calicut")
var Abinsha=new person("abhi",20,"Kunnamangalam")

abinshah.display()