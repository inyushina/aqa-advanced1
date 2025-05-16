
// function numberCounter(num,callback){
//   if  (num <= 0){
//     callback(num)
//     console.log("Entered number -- " + num)
//     }
// }

// function revCountdown(num){
// for (let i = num; i >= 0; i--) {
//  console.log(i)
// }
// }
// numberCounter(5,revCountdown)


function numberCounter(num){
    if (num <=0){
       // console.log(numberCounter)
        return
    }
    console.log(num)
 numberCounter(num-1)
 
}
numberCounter(5)