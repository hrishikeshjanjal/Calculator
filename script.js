var result = '';
function insert(num){
    result+=num;
    document.getElementById("disp").value = result;    
}

function equal(){
    document.getElementById("disp").value = eval(result);
    result=eval(result);
}

function clean(){
    result='';
    document.getElementById("disp").value = result;
}

function backspace(){
    result = result.substring(0,result.length-1);
    document.getElementById("disp").value = result;
}
