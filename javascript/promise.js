//location finder Example
/*function locationFinder(){
    //train=7
    train=8
    return new Promise((resolve,reject)=>{
       
        
        if(train==7){
            resolve("Train has arrived")
        }
        else{
            reject("Train has not arrived")
        }
    })
}
//locationFinder()-> no output
//console.log(locationFinder())//Promise { 'Train has arrived' } -> for train =7
//console.log(locationFinder())//[UnhandledPromiseRejection -> for train =8

//to remove the error and only printing the reject message and also promise (use then and catch)
locationFinder().then((resolvedMsg)=>{
    console.log(resolvedMsg)
}).catch(function (rejectedMsg){
    console.log(rejectedMsg);
})
*/
function isTimeConsumption(t){
    time=999
    return time<=t
}
function isValidLocation(loc){
    location="Ooty"
    return loc==location
}
function locationFinder(){
    loc="Ooty"
    time=1000
    return new Promise((locFound,locNotFound)=>{
        setTimeout(()=>
        {
            if(isValidLocation(loc) && isTimeConsumption(time)){
                locFound("location Found")
            }
            else{
                locNotFound("Location not found")
            }
        }),time
    })
}
locationFinder().then((resolvedMsg)=>{
    console.log(resolvedMsg)
}).catch(function (rejectedMsg){
    console.log(rejectedMsg);
})