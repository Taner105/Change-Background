const body = document.querySelector("body");
const button1 = document.querySelector("button");
const colors = [
"black", 
"yellow",
"red", 
"green", 
"blue", 
"gray", 
"orange", 
"purple"];

// button1.addEventListener("click" , arkaplan);

// function arkaplan(){
//     const ratgeleSayı = Math.floor(Math.random() * colors.length);
//     const secılenRenk = colors[ratgeleSayı];
//     body.style.backgroundColor = secılenRenk;
    
// }


// ----------ARROW FUNCTİON----------


button1.addEventListener("click", () => {
    const ratgeleSayı = Math.floor(Math.random() * colors.length);
    const secılenRenk = colors[ratgeleSayı];
    body.style.backgroundColor = secılenRenk;
});


// -----------SIRALI OLUŞTURMA-------------

button1.addEventListener("click" , arkaplan);
let sıra = 0;
function arkaplan(){
    if (sıra == 8) sıra = 0
    const secılenRenk = colors[sıra];
    sıra++;
    body.style.backgroundColor = secılenRenk;
    
}

