// console.log("hello from JS file");

// const halo = "hallo";
// console.log(halo);

// halo = "punten";
// console.log(halo);

// let halo = "hello";
// console.log(halo);

// halo = "punten";
// console.log(halo);

const title = document.getElementById("title");
const teks = document.createElement("h1");
teks.innerHTML = "Kalkulator";
title.appendChild(teks);

// function showTeks(teks) {
//   console.log(teks);
// }

// showTeks("hello from function berhasil");

// const Testing = (data) => {
//   console.log(data);
// };

// Testing("hallo from arrow function");

// const angkaPertama = 10;
// const angkaKedua = 20;

// const hasil = angkaPertama % angkaKedua;
// console.log(hasil);

const kalkulator = () => {
  const dataTeks1 = document.getElementById("userInput1");
  const dataTeks2 = document.getElementById("userInput2");
  const operator = document.getElementById("operator");
  const dataValue1 = parseInt(dataTeks1.value);
  const dataValue2 = parseInt(dataTeks2.value);
  const operatorData = operator.value;

  let jumlah = 0;
  if (operatorData == "+") {
    const hasil = dataValue1 + dataValue2;
    jumlah = hasil;
  } else if (operatorData == "-") {
    const hasil = dataValue1 - dataValue2;
    jumlah = hasil;
  } else if (operatorData == "*") {
    const hasil = dataValue1 * dataValue2;
    jumlah = hasil;
  } else if (operatorData == "/") {
    const hasil = dataValue1 / dataValue2;
    jumlah = hasil;
  } else {
    alert("tolong pilih operator");
  }

  alert("hasilnya adalah = " + jumlah);
};
