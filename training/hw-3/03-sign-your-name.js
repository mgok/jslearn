const obj = {yourSignature: ""}

function signYourName(obj){
    Object.defineProperty(obj,'spouseSignature',{
        writable: false
    })
    obj.yourSignature = "Whatever";
    obj.spouseSignature = "Nice Try";
    return obj;
}

console.log(signYourName(obj));