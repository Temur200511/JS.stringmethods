

// function engUzunVaEngQisqaSoz(gap) {
//     const sozlar = gap.split(" ");
//     let engUzun = "";
//     let engQisqa = sozlar[0] || "";

//     for (let soz of sozlar) {
//         if (soz.length > engUzun.length) engUzun = soz;
//         if (soz.length < engQisqa.length) engQisqa = soz;
//     }

//     return { engUzun, engQisqa };
// }

// console.log(engUzunVaEngQisqaSoz("Salom dunyo bu juda ajoyib test"));







// function sozniTeskariQil(soz) {
//     return soz.split("").reverse().join("");
// }

// console.log(sozniTeskariQil("Salom")); // molas






// function gapdagiSozlarniTeskariQil(gap) {
//     return gap.split(" ").map(soz => soz.split("").reverse().join("")).join(" ");
// }

// console.log(gapdagiSozlarniTeskariQil("Salom dunyo bu test")); // "molaS oynud ub tset"





// function oxirgiSozUzunligi(gap) {
//     const sozlar = gap.trim().split(" ");
//     const oxirgiSoz = sozlar[sozlar.length - 1];
//     return oxirgiSoz.length;
// }

// console.log(oxirgiSozUzunligi("Salom dunyo bu test")); // 4






// function takrorlanganElementlar(array) {
//     const takrorlanganlar = [];
//     const uchraganlar = new Set();

//     for (let element of array) {
//         if (uchraganlar.has(element) && !takrorlanganlar.includes(element)) {
//             takrorlanganlar.push(element);
//         } else {
//             uchraganlar.add(element);
//         }
//     }

//     return takrorlanganlar;
// }

// console.log(takrorlanganElementlar([1, 2, 3, 2, 4, 5, 6, 1])); // [2, 1]

