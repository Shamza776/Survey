/*let fname = document.getElementById('Fname').addEventListener('change', upperCase);
function upperCase(){
    if (fname.value === true){
        console.log(fname.value.toUpperCase());
    };
};*/

function upperCase(){
    let fname = document.getElementById('Fname');
    fname.value =  fname.value.toUpperCase();

    console.log(fname);
};

function date() {
    let date = document.getElementById('date');

}