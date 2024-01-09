

let meva = []

while (true){
    let javob = prompt("Meva nomini kiriting")
    if (javob == 'stop'){
        break
    }else{
        meva.push(javob)
    }
}
console.log(meva)



for (let i = 0; i < Infinity; i++) {
    let javob = prompt("meva nomini kiriting")
    if (javob == 'stop'){
        break
    }else{
        meva.push(javob)
        console.log(meva);
    }
}