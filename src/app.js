// variable sample
let dolarDun = 9.20
let dolarBugun = 9.50
let dolarFark = dolarDun - dolarBugun
{
    let dolarDun = 9.10
}

//constant variable sample
const euroDun = 11.10


// birden fazla veriyi bir değişkene tanımlama
let arabaMarkalari = ["BMW", "TOGG", "VW", "Toyota", "Mazda", "Fiat"]

console.log("<ul>")
for (let i = 0; i < arabaMarkalari.length; i++) {
    console.log("<li>"+arabaMarkalari[i]+"</li>")
    
}
console.log("</ul>")

console.log("Merhaba Halil!")
console.log(dolarFark)
console.log(euroDun)
console.log(arabaMarkalari)