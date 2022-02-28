/*** 4 islemi barindiran bir ek modul yazilacak.

 Adimlar
 -istenen fonsiyonlari olustur.
 -fonksiyonlari export et fonk dan.
 -fonksiyonlari import et index e.
 */

const arthmtkOperations = require("./app");

arthmtkOperations.add(5,5);
arthmtkOperations.sub(5,5);
arthmtkOperations.multiply(5,5);
arthmtkOperations.divide(5,5);

// console.log(arthmtkOperations.add(5,5))
// console.log(arthmtkOperations.sub(5,5))
// console.log(arthmtkOperations.multiply(5,5))
// console.log(arthmtkOperations.divide(5,5))