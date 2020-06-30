function getNumber(num){
    var textarea = document.getElementById("textarea");
    textarea.value += num;
}

function cleartextarea(){
    var textarea = document.getElementById("textarea");
    textarea.value = "";
}

function getresult (){
    var textarea = document.getElementById("textarea");
    textarea.value = eval(textarea.value)
}