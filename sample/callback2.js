var hello=(data)=>{
    console.log('data'+data)
}
var hey=function(callback){
    console.log('hey workon')
    callback('crossroads')
}
hey(hello)