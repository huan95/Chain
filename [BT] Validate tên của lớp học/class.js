function checkClassName(str) {

    var str = prompt("enter the class");

    regexp = /^[C,A,P][0-9]{4}[G,H,I,K,L,M]$/;

    if(regexp.test(str)){
        alert("valid class");
    } else {
        alert("invalid class");
    }


}