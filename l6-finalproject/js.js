function clearscreen(){
    document.getElementById("output-value").textContent="";
    document.getElementById("history-value").textContent="";
}
function backspace(){
    const output=document.getElementById("output-value");
    output.textContent=output.textContent.slice(0,-1);
}
function setscreenvalue(value){
    const output=document.getElementById("output-value");
    const currentvalue=output.textContent;
    if (

        (["+", "-", "*", "/"].includes(value) && currentvalue === "") ||
        
        (["+", "-", "*", "/"].includes(value) && ["+", "-", "*", "/"].includes(currentvalue.slice(-1)))
        
        ) {
        
        return;
        
        }
        output.textContent+=value;
}
function calculateresult(){
    const output=document.getElementById("output-value");
    const history=document.getElementById("history-value");
    const expression=output.textContent.trim();
    if(expression===""){
        output.textContent="please enter expression";

        return;
    }
    else {
        const result=eval(expression);
        history.textcontent=expression;
        output.textContent=result;
    }
}