function upperCase(str) {
    var str1 = "Nguyen van Nam";
    var str2 = "NGUYEN VAN NAM";
    var str3 = "nguyen van Nam";

     regexp = /^[A-Z]/;

    if(regexp.test(str1)){
        console.log("the first letter is uppercase");
        alert("the first letter is uppercase");
    } else {
        console.log("the first letter is not uppercase");
        alert("the first letter is not uppercase");
    }

    if(regexp.test(str2)){
        console.log("the first letter is uppercase");
        alert("the first letter is uppercase");
    } else {
        console.log("the first letter is not uppercase");
        alert("the first letter is not uppercase");
    }

    if(regexp.test(str3)){
        console.log("the first letter is uppercase");
        alert("the first letter is uppercase");
    } else {
        console.log("the first letter is not uppercase");
        alert("the first letter is not uppercase");
    }

}

