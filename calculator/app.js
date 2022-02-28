
//Toplama Fonrksiyonu
const add = (a, b) => a+b;

//Cikarma islemi
const sub = (a, b) => a-b;

//Carpma islemi
const multiply = (a, b) => a*b;

//Bolme islemi
const divide = (a, b) => a/b;

//Fonksionlari export ediyoruz
module.exports = {
    add : add,
    sub : sub,
    multiply : multiply,
    divide : divide
}