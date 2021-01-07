//Arjeqneri @ndunum==================================================
function insert(num){
    document.form.textview.value = 
    document.form.textview.value + num;
}

//Maqruma, jnjuma nermucac arjeqner@

function clean(){
    document.form.textview.value = "";
}
 //jnjum verji nermucac arjeq@
function back(){
let exp = document.form.textview.value;
document.form.textview.value = exp.substring(0, exp.length -1);
}

//=
function equal(){
    let exp = document.form.textview.value;
    if(exp){
        document.form.textview.value = eval(exp);
    }
}