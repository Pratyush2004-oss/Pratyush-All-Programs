function prom(complete){
        return new Promise(function(resolve,reject){
    if (complete){
        onfulfilment();
        console.log("I am Successful");
    }
    else{
        onrejection();
        console.log("Failure")
    }
});
}
let onfulfilment=(result)=>{
    console.log("Successful")
};
let onrejection = (result)=>{
    console.log("error")
}

prom(false).then(onfulfilment).catch(onrejection);

console.log(prom);