var one=document.querySelector("#one");
var two=document.querySelector("#two");
var three=document.querySelector("#three");
var four=document.querySelector("#four");
var five=document.querySelector("#five");
var six=document.querySelector("#six");
var seven=document.querySelector("#seven");
var eight=document.querySelector("#eight");
var nine=document.querySelector("#nine");
var ac=document.querySelector("#ac");
var sign=document.querySelector("#sign");
var rem=document.querySelector("#rem");
var divide=document.querySelector("#divide");
var mul=document.querySelector("#mul");
var sub=document.querySelector("#sub");
var add=document.querySelector("#add");
var result=document.querySelector("#result");
var zero=document.querySelector("#zero");
var dot=document.querySelector("#dot");
var screen=document.querySelector("#screen");
var exp="",prev="",pos=0;
one.addEventListener('click',function(){
    exp+="1";
    screen.textContent=exp;
});
two.addEventListener('click',function(){
    exp+="2";
    screen.textContent=exp;
});
three.addEventListener('click',function(){
    exp+="3";
    screen.textContent=exp;
});
four.addEventListener('click',function(){
    exp+="4";
    screen.textContent=exp;
});
five.addEventListener('click',function(){
    exp+="5";
    screen.textContent=exp;
});
six.addEventListener('click',function(){
    exp+="6";
    screen.textContent=exp;
});
seven.addEventListener('click',function(){
    exp+="7";
    screen.textContent=exp;
});
eight.addEventListener('click',function(){
    exp+="8";
    screen.textContent=exp;
});
nine.addEventListener('click',function(){
    exp+="9";
    screen.textContent=exp;
});
zero.addEventListener('click',function(){
    if(exp!=="")
    {
    exp+="0";
    screen.textContent=exp;
    }
});
ac.addEventListener('click',function(){
    exp="";
    prev="";
    pos=0;
    screen.textContent="0";
});
add.addEventListener('click',function(){
    if(exp[exp.length-1]!=="+" && exp[exp.length-1]!=="-" && exp[exp.length-1]!=="*" && exp[exp.length-1]!=="/" && exp[exp.length-1]!=="%")
    {
    exp+="+";
    prev="+";
    pos=exp.length-1;
    screen.textContent=exp;
    }
    else{
        var s=exp.substring(0,exp.length-1);
        exp=s+"+";
        prev="+";
        pos=exp.length-1;
        screen.textContent=exp;
    }
});
sub.addEventListener('click',function(){
    if(exp[exp.length-1]!=="+" && exp[exp.length-1]!=="-" && exp[exp.length-1]!=="*" && exp[exp.length-1]!=="/" && exp[exp.length-1]!=="%")
    {
    exp+="-";
    prev="+";
    pos=exp.length-1;
    screen.textContent=exp;
    }
    else{
        var s=exp.substring(0,exp.length-1);
        exp=s+"-";
        prev="-";
        pos=exp.length-1;
        screen.textContent=exp;
    }
});
mul.addEventListener('click',function(){
    if(exp[exp.length-1]!=="+" && exp[exp.length-1]!=="-" && exp[exp.length-1]!=="*" && exp[exp.length-1]!=="/" && exp[exp.length-1]!=="%")
    {
    exp+="*";
    prev="*";
    pos=exp.length-1;
    screen.textContent=exp;
    }
    else{
        var s=exp.substring(0,exp.length-1);
        exp=s+"*";
        prev="*";
        pos=exp.length-1;
        screen.textContent=exp;
    }
});
divide.addEventListener('click',function(){
    if(exp[exp.length-1]!=="+" && exp[exp.length-1]!=="-" && exp[exp.length-1]!=="*" && exp[exp.length-1]!=="/" && exp[exp.length-1]!=="%")
    {
    exp+="/";
    prev="/";
    pos=exp.length-1;
    screen.textContent=exp;
    }
    else{
        var s=exp.substring(0,exp.length-1);
        exp=s+"/";
        prev="/";
        pos=exp.length-1;
        screen.textContent=exp;
    }
});
rem.addEventListener('click',function(){
    if(exp[exp.length-1]!=="+" && exp[exp.length-1]!=="-" && exp[exp.length-1]!=="*" && exp[exp.length-1]!=="/" && exp[exp.length-1]!=="%")
    {
    exp+="%";
    prev="%";
    pos=exp.length-1;
    screen.textContent=exp;
    }
    else{
        var s=exp.substring(0,exp.length-1);
        exp=s+"%";
        prev="%";
        pos=exp.length-1;
        screen.textContent=exp;
    }
});
dot.addEventListener('click',function(){
    exp+=".";
    screen.textContent=exp;
});
sign.addEventListener('click',function(){
    var z=exp.substring(0,pos);
    var y=exp.substring(pos+1,exp.length);
    if(prev==="+")
    {
     exp=z+"-"+y;  
     prev="-";
    }
    else if(prev==="-")
    {
    exp=z+"+"+y;
    prev="+"; 
    }
    else if(prev==="*")
    {
    if(parseFloat(y)>0)
    {
        exp=z+"*-"+y;
    }
    else{
        exp=z+"*"+y.substring(1,y.length);
    }
    }
    else if(prev==="/")
    {
        if(parseFloat(y)>0)
        {
            exp=z+"/-"+y;
        }
        else{
            exp=z+"/"+y.substring(1,y.length);
        }
    }
    else if(prev==="%")
    {
        if(parseFloat(y)>0)
        {
            exp=z+"%-"+y;
        }
        else{
            exp=z+"%"+y.substring(1,y.length);
        }
    }
    else{
        if(parseFloat(exp)>0)
        {
            exp="-"+exp;
        }
        else{
            exp=y;
        }
    }
    screen.textContent=exp;
    
});
result.addEventListener('click',function(){
    var sum=eval(exp);
    screen.textContent=sum;
    exp=sum;
    prev="";
    pos=0;
});