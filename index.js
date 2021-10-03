function getHistory(){
    return document.getElementById("history-value").innerText;
}
function printHistory(num){
    document.getElementById("history-value").innerText = num;
}
function getOutput(){
    return document.getElementById("output-value").innerText;
}
function printOutput(num){
    document.getElementById("output-value").innerText = num;
}

var number = document.getElementsByClassName("number");
for(i=0; i<number.length; i++){
    number[i].addEventListener('click', function(){
        var output = getOutput();
        output = output + this.id;
        printOutput(output);
    })
}

var operator = document.getElementsByClassName("operator");
for(i=0; i<operator.length; i++){
    operator[i].addEventListener('click', function(){
        if(this.id=='clear'){
            printHistory("");
            printOutput("");
        }
        else if(this.id == "backspace"){
            var output = getOutput();
            output = output.substr(0, output.length-1);
            printOutput(output);
        }
        else{
            var history = getHistory();
            var output = getOutput();
            
            if(output==""&&history!=""){
                if(isNaN(history[history.length-1])){
                    history=history.substr(0,history.length-1)
                }
            }
            
                output = output;
                history  = history + output;
                if(this.id == "="){
                    var result = eval(history);
                    printOutput(result);
                    printHistory("");
                    
                }
                else{
                    history = history + this.id;
                    printHistory(history);
                    printOutput("");
                }
           
        }
    })
}