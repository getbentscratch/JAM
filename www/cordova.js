          function encode() {
  console.log("encode: " + document.getElementById("put").value);
  document.getElementById("output").innerHTML = "";
  var chars = ["", 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', "", 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', "", 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '1', "", '2', '3', '4', '5', '6', '7', '8', '9', '0', "", '!', ',', '.', ' ', '?'];
  var i = 0;
  var chc = "";
  var inp = document.getElementById("put").value.length;
  var inlet = document.getElementById("put").value;
  var newchars = "";
  while (i < inp) {
    chc = inlet.substring(i, i + 1);
    newchars = chars.indexOf(chc);
    document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + newchars + 0;
    i++;
  }
  document.getElementById("put").value = document.getElementById("output").innerHTML;
  document.getElementById("output").innerHTML = "";
  i = 0;
  chc = "";
  inp = document.getElementById("put").value.length;
  inlet = document.getElementById("put").value;
  newchars = "";
  while (i < inp) {
    chc = inlet.substring(i, i + 1);
    newchars = chars.indexOf(chc);
    document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + newchars + 0;
    i++;
  }
  document.getElementById("command").reset();
  var rev = document.getElementById("output").innerHTML.length;
  var poot = "";
  while (rev > -1) {
    poot = poot + document.getElementById("output").innerHTML.substring(rev, rev + 1);
    rev--;
  }
  var shift = poot.substring(poot.length - 1, poot.length);
  poot = poot.substring(0, poot.length - 1);
  poot = shift + poot;
  document.getElementById("output").innerHTML = poot;
}


function decode() {
  console.log("decode: " + document.getElementById("put2").value);
  var rev2 = document.getElementById("put2").value.length;
  var poot2 = "";
  var decin = document.getElementById("put2").value;
  var shift2 = decin.substring(0, 1);
  decin = decin.substring(1, decin.length);
  decin = decin + shift2;
  while (rev2 > -1) {
    poot2 = poot2 + decin.substring(rev2, rev2 + 1);
    rev2--;
  }
  document.getElementById("put2").value = poot2;
  document.getElementById("output").innerHTML = "";
  var chars2 = ["", 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', "", 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', "", 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '1', "", '2', '3', '4', '5', '6', '7', '8', '9', '0', "", '!', ',', '.', ' ', '?'];
  var declel = document.getElementById("put2").value.length;
  var decin = document.getElementById("put2").value;
  var i2 = 0;
  var deh = "";
  var out = "";
  while (i2 < declel) {
    deh = decin.substring(i2, i2 + 1);
    if (deh != 0) {
      if (decin.substring(i2 + 1, i2 + 2) != 0) {
        deh = decin.substring(i2, i2 + 2);
        i2++;
      }
      out = chars2[deh];
      document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + out;
    }
    i2++;
  }
  document.getElementById("put2").value = document.getElementById("output").innerHTML;
  document.getElementById("output").innerHTML = "";
  declel = document.getElementById("put2").value.length;
  decin = document.getElementById("put2").value;
  i2 = 0;
  deh = "";
  out = "";
  while (i2 < declel) {
    deh = decin.substring(i2, i2 + 1);
    if (deh != 0) {
      if (decin.substring(i2 + 1, i2 + 2) != 0) {
        deh = decin.substring(i2, i2 + 2);
        i2++;
      }
      out = chars2[deh];
      document.getElementById("output").innerHTML = document.getElementById("output").innerHTML + out;
    }
    i2++;
  }
  document.getElementById("put2").value = "";
}