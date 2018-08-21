function usZipCode(zipcode) {

    var zipcode2 = "03201-2150";
    var zipcode1 = '7892';


    regexp = /^[0-9]{5}(?:-[0-9]{4})?$/;

    if(regexp.test(zipcode2)){
        alert("true");
    } else {
        alert("false");
    }

}