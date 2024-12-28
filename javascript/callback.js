
databasesharing=()=>{ //using arrow func
    console.log("Data stored successfully");
}
function submitForm(formMsg,dbs){
       // dbs means databasesharing or we can give any name    //using function
    setTimeout(()=>{   
    dbs()
    console.log(formMsg)
},2000) //give output after 2s
}
submitForm("form submitted successfully",databasesharing)