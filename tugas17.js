function latihan1() {
  var kalimat = "Saya beLajar bahaSa peMrograman deNgan khUsuk";
  var kalimat2 = "Allen SedAng MemAncinG IkaN di SuNgai, DIA MEndapat IkAN GaBuS 3 Ekor dan LanGsuNg Dijual";
  console.log(kalimat.toLowerCase());
  console.log(kalimat.toUpperCase());
  console.log(kalimat2.toLowerCase());
  console.log(kalimat2.toUpperCase());
}
latihan1()

function latihan2() {
  var kalimat = "Lorem Ipsum";
  var hasil = kalimat.substr(0,7);
  for (var i = 0; i < 6; i++) {
    console.log(hasil[i].charCodeAt());
  }
}
latihan2()
