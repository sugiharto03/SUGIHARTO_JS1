const buttonOne = document.querySelector(".one");
buttonOne.addEventListener("click", function () {
  let num = prompt("Masukkan bilangan (1-10)");

  if (num == null || num == "") {
    alert("isi bilangan terlebih dahulu");
  } else {
    if (num >= 10 || num <= 1) {
      alert("masukkan inputan yang tepat!");
    } else if (num % 2 == 0) {
      alert("inputan merupakan bilangan genap!");
    } else {
      alert("inputan merupakan bilangan ganjil!");
    }
  }
});

const buttonTwo = document.querySelector(".two");
buttonTwo.addEventListener("click", function () {
  let numStr = prompt("masukkan hari dalam seminggu (1-7)");
  let num = parseInt(numStr);

  switch (num) {
    case 1:
      alert("Ini hari Senin!");
      break;
    case 2:
      alert("Ini hari Selasa!");
      break;
    case 3:
      alert("Ini hari Rabu!");
      break;
    case 4:
      alert("Ini hari Kamis!");
      break;
    case 5:
      alert("Ini hari Jumat!");
      break;
    case 6:
      alert("Ini hari Sabtu!");
      break;
    case 7:
      alert("Ini hari Minggu!");
      break;
    default:
      alert("hari tidak sesuai");
  }
});

const buttonThree = document.querySelector(".three");
buttonThree.addEventListener("click", function () {
  let numStr = prompt("masukkan jumlah angka");
  let num = parseInt(numStr);

  for (let i = 0; i <= num; i++) {
    console.log(i);
  }
  alert("lihat di console, ya!");
});

const buttonFour = document.querySelector(".four");
buttonFour.addEventListener("click", function () {
  let numStr = prompt("masukkan angka (1-10)");
  let num = parseInt(numStr);
  let counter = 1;

  while (counter <= num) {
    console.log(counter);
    counter++;
  }
  console.log("perhitungan do while");

  let anotherCounter = 1;

  do {
    console.log(anotherCounter);
    anotherCounter++;
  } while (anotherCounter <= num);
  alert("lihat di console, ya!");
});

const buttonFive = document.querySelector(".five");
buttonFive.addEventListener("click", function () {
  let a = prompt("masukkan angka pertama");
  let numA = parseInt(a);

  let b = prompt("masukkan angka kedua");
  let numB = parseInt(b);

  function scale(numA, numB) {
    return numA + numB;
  }
  alert(scale(numA, numB));
});
