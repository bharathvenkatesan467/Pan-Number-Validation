function sub(){
    let task=document.getElementById("no").value;
    let check=/^([A-Z]){5}([0-9]){4}([A-Z]){1}$/;

     if (check.test(task)) {
        document.getElementById('no2').innerHTML = 'Valid PAN';
    } else {
        document.getElementById('no2').innerHTML = 'Invalid PAN';
    }
}
