function delayRequest(input1, input2) {
console.log(`Hi! =^_^= ${input1} and ${input2}!!!`);
}

setTimeout(delayRequest, 2000, 'Hey','You');


function delayText (text,delay){
    setTimeout(() => {
        console.log(text);
    }, delay);
    }
delayText('=^_^=', 2000);
