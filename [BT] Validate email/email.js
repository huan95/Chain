function email(str) {
    var str = prompt("enter the email");

    regexp = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(.[A-Za-z0-9]+)$/;

    if (regexp.test(str)) {
        alert("valid");
    } else {
        alert("invalid");
    }

}