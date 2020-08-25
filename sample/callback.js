var dt=new Date()
console.log('hello')
for(i=0;i<1000;i++)
{
    console.log('loop')
}
console.log('end')
var diff=new Date()-dt
console.log(diff)
function longtask(milliS)
{dt=new Date()
    while((new Date-dt)<=milliS)
    {

    }
}

function showend()
{
 console.log('end')   
}
console.log('started')
setTimeout(showend,2000)




console.log('started')
setTimeout(showend,2000)




console.log('started')
setTimeout(showend,2000)


