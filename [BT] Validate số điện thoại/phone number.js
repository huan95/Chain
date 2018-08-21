function phoneNumber(str) {

    var str = prompt("enter the phone number");

    regexp = /^[(][0-9]{2}[)]-[(][0][0-9]{9}[)]$/;

    if(regexp.test(str)){
        alert("a valid phone number");
    } else {
        alert("invalid phone number");
    }
    
}