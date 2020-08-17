function gethistory() {
    return document.getElementById("historyvalue").innerText;
}

function printhistory(num) {
     document.getElementById("historyvalue").innerText=num;
}
function getoutput() {
    return document.getElementById("outputvalue").innerText;
}

function printoutput(num) {
    if(num=="")
    {
        document.getElementById("outputvalue").innerText=num;
    }
    else{
        document.getElementById("outputvalue").innerText=getformattednumber(num);
    }
     
}

// for comma seperated values
function getformattednumber(num){
    if(num=="-"){
        return "";
    }
    var n = Number(num);
    var value=n.toLocaleString("en");
    return value;

}

// convert number without coma ie to the original no.
function reversenumberformat(num){
    return Number(num.replace(/,/g,""));
}



// // logic
var operator=document.getElementsByClassName("operator");
for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click',function(){
        if(this.id=="clear"){
            printhistory("");
            printoutput("");
        }
        else if(this.id=="backspace"){
            var output=reversenumberformat(getoutput()).toString();
            if(output){
                output=output.substr(0,output.length-1);
                printoutput(output);
            }

        }
        else{
            var output=getoutput();
            var history=gethistory();
            if(output==""&&history!=""){
				if(isNaN(history[history.length-1])){
					history= history.substr(0,history.length-1);
				}
			}
            if(output!="" || history!=""){
                output= output==""?output:reversenumberformat(output);
                history=history+output;
                if(this.id=="="){
                    var result=eval(history);
                    printoutput(result);
                    printhistory("");
                }
            
                else{
                    history=history+this.id;
                    printhistory(history);
                    printoutput("");
                }
            }

        }
        
    })
    
}
var numbers=document.getElementsByClassName("number");
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click',function(){
        var output=reversenumberformat(getoutput());
        if(output!=NaN){
            output=output+this.id;
            printoutput(output);
        }
    })
    
}

