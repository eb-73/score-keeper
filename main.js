
let conter1=0;
let conter2=0;
let flag=true;
const btn1=document.querySelector(".btn1");
const btn2=document.querySelector(".btn2");
const reset=document.querySelector(".btn3");
let val=document.querySelector("#game").value;

document.querySelector("#game").addEventListener("change",function(){
    document.querySelector("#one").innerHTML=0;
    document.querySelector("#tow").innerHTML=0;
    document.querySelector("#one").style.color="black";
    document.querySelector("#tow").style.color="black";
    conter1=0;
    conter2=0;
    flag=true;
    val=document.querySelector("#game").value;

});



const func1=function(){
    if(conter1<parseInt(val)&&flag){
        conter1++;
        const content=document.querySelector("#one");
        content.innerHTML=conter1;
        if(conter1==parseInt(val)){
            flag=false;
            document.querySelector("#one").style.color="green";
            document.querySelector("#tow").style.color="red";
        }
    }
    
   
    
    
}
const func2=function(){
    if(conter2<parseInt(val)&&flag){
        conter2++;
        const content=document.querySelector("#tow");
        content.innerHTML=conter2;
        if(conter2==parseInt(val)){
            flag=false;
            document.querySelector("#tow").style.color="green";
            document.querySelector("#one").style.color="red";
        }
    }
    
    
    
}

const func3=function(){
    
    document.querySelector("#one").innerHTML=0;
    document.querySelector("#tow").innerHTML=0;
    document.querySelector("#one").style.color="black";
    document.querySelector("#tow").style.color="black";
    conter1=0;
    conter2=0;
    flag=true;
    val=document.querySelector("#game").value;
        
    
    
    
    
}

btn1.addEventListener("click",func1);
btn2.addEventListener("click",func2);
reset.addEventListener("click",func3);





