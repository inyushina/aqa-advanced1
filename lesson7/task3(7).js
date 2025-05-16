function divide(numenator, denominator){
    if (denominator === 0){
        throw new Error("Denominator shouldn`t be equal 0");
    }
     if(
        typeof denominator !=="number" || typeof numenator !=="number" || isNaN(denominator) || isNaN(numenator)){
        throw new Error("Entered argument is not a number")
     }
    
return numenator / denominator;
}
try{
    console.log (divide(4,2));}
    catch (error){
        console.log(error.message)
    }
finally{
    console.log("Робота завершена")
}

try{
    console.log (divide("4",2));}
    catch (error){
        console.log(error.message)
    }
finally{
    console.log("Робота завершена")
}
try{
    console.log (divide(50,0));}
    catch (error){
        console.log(error.message)
    }
finally{
    console.log("Робота завершена")
}
