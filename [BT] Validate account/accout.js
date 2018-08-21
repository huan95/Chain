function accout(str) {

    var str = prompt("enter the accout");

    regexp = /^[_a-z0-9]{6,}$/;

    if(regexp.test(str)){
        alert("a valid accout");
    } else {
        alert("invalid accout");
    }

}