// function checkOrder(available, ordered){
//     if (ordered ===0)
//        {return "Your order is empty"} 
//     else if (ordered > available)
//     {return "Your order is too large, we don’t have enough goods"}
//     else{return "Your order is accepted"}
// }
// console.log(checkOrder(300,0))
// console.log(checkOrder(300,5))
// console.log(checkOrder(5, 15))

//Патерн «Раннього повернення»
function checkOrder(available, ordered){
    if(ordered===0){
        console.log("Your order is empty");
        return;
    }
    if (ordered > available){
        console.log("Your order is too large, we don’t have enough goods")
        return;
    }
    
   console.log("Your order is accepted");
}
checkOrder(23,0)
checkOrder(10,3)
checkOrder(10,20)