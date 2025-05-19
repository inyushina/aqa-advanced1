
function handleNum (number, callback1, callback2){
   
if (number % 2 === 0){
    callback1(number)
}
 else 
    {callback2(number)
    }
}
    function handleEven(number){
    console.log(number +  ' - number is even')
}
function handleOdd(number){
    console.log(number +  ' - number is odd')
}
handleNum(8, handleEven, handleOdd);