// dictionary encryption only alpha numeric
var dictionaryMethod = {
  ea: "h", eb: "k", ec: "n", ed: "f", ee: "o", ef: "y", eg: "j", eh: "x", ei: "p", ej: "r", ek: "t", el: "d", em: "z",
  en: "l", eo: "i", ep: "b", eq: "g", er: "m", es: "u", et: "v", eu: "w", ev: "s", ew: "e", ex: "a", ey: "q", ez: "c",
  e: "_", e_: " ", e0: "7", e1: "4", e2: "8", e3: "6", e4: "3", e5: "1", e6: "0", e7: "2", e8: "9", e9: "5",

  da: "x", db: "p", dc: "z", dd: "l", de: "w", df: "d", dg: "q", dh: "a", di: "o", dj: "g", dk: "b", dl: "n", dm: "r",
  dn: "c", do: "e", dp: "i", dq: "y", dr: "j", ds: "v", dt: "k", du: "s", dv: "t", dw: "u", dx: "h", dy: "f", dz: "m",
  d: "_", d_: " ", d0: "6", d1: "5", d2: "7", d3: "4", d4: "1", d5: "9", d6: "3", d7: "0", d8: "2", d9: "8",

  // encryption by replacing each alphabet with its selected replacment character from encryption properties
  dictEncrypt: function (inputstr) {
    var tempstr = [];
    inputstr = inputstr.toLowerCase();
    for (var i = 0; i < inputstr.length; i++) {
      if ("e" + inputstr[i].replace(' ', '') in dictionaryMethod) {
        tempstr.push(dictionaryMethod["e" + inputstr[i].replace(' ', '')]);
      }
    }
    return tempstr.join("");
  },
  // decryption by replacing each alphabet with its selected replacment character from decryption properties 
  dictDecrypt: function (inputstr) {
    var tempstr = [];
    inputstr = inputstr.toLowerCase();
    for (var i = 0; i < inputstr.length; i++) {
      if ("d" + inputstr[i].replace(' ', '') in dictionaryMethod) {
        tempstr.push(dictionaryMethod["d" + inputstr[i].replace(' ', '')]);
      }
    }
    return tempstr.join("");
  }
};


// custom made simple encryption by swapping each two characters starting from index 0
var CustomMethod = {
  cusEncrypt: function (inputstr) {
    var tempstr = inputstr.split("");
    var temp
    // this loop will swap every two characters e.g input : "test" >>
    //1st Itration  >> first two char: "etst"
    //2nd Iteration >> second two char : "etts"
    for (var i = 0; i < inputstr.length - 1; i += 2) {
      temp = tempstr[i];
      tempstr[i] = tempstr[i + 1];
      tempstr[i + 1] = temp;
    }
    // this will take the resulting string from loop above and swap first character with last one 
    // e.g  string from loop >>  "etts"    
    temp = tempstr[0];
    tempstr[0] = tempstr[tempstr.length - 1];
    tempstr[tempstr.length - 1] = temp;
    // after swaping >>  "stte"
    return tempstr.join(""); // return the final array as string
  },
  // reverse the encryption process to decrypt
  cusDecrypt: function (inputstr) {
    var tempstr = inputstr.split("");
    var temp
    // swap first and last character of input string e.g "stte"
    temp = tempstr[0];
    tempstr[0] = tempstr[tempstr.length - 1];
    tempstr[tempstr.length - 1] = temp;
    // after swaping >> "etts"

    //this loop will swap every two characters e.g input : "etts" >>
    //1st Itration  >> first two char: "tets"
    //2nd Iteration >> second two char : "test"
    for (var i = 0; i < inputstr.length - 1; i += 2) {
      temp = tempstr[i];
      tempstr[i] = tempstr[i + 1];
      tempstr[i + 1] = temp;
    }
    return tempstr.join(""); // return the final array as string
  }
};

//  calling functions from button onclick
var callEncrypt = function (inputid, outputid, Encryptype, btnid) {
  if (btnid === "btnEn") {  // check if correct button is clicked
    if (Encryptype === "1") {
      // call dictionary encryption and assign return string to html output tag value
      document.getElementById(outputid).value = dictionaryMethod.dictEncrypt(document.getElementById(inputid).value);
    }
    else if (Encryptype === "2") {
      // call custom encryption  and assign return string to html output tag value
      document.getElementById(outputid).value = CustomMethod.cusEncrypt(document.getElementById(inputid).value);
    }
  }
  if (btnid === "btnDe") {
    if (Encryptype === "1") {
      // call dictionary decryption  and assign return string to html output tag value
      document.getElementById(outputid).value = dictionaryMethod.dictDecrypt(document.getElementById(inputid).value);
    }
    else if (Encryptype === "2") {
      // call custom decryption  and assign return string to html output tag value
      document.getElementById(outputid).value = CustomMethod.cusDecrypt(document.getElementById(inputid).value);
    }
  }
}

// clear text boxes
var clearFields = function (aryOfFields) {
  for (var i = 0; i < aryOfFields.length; i++) {
    document.getElementById(aryOfFields[i]).value = "";
  }
}




