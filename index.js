var string=""; 
const inputBox=document.getElementById("inputBox");
const buttons=document.querySelectorAll(".buttons");
buttons.forEach(function(e){
e.addEventListener("click",(f)=>{
    if(f.target.innerHTML=="Ac"){
        string=" ";
        inputBox.value=string;
    }
    else if(f.target.innerHTML=="Del"){
     string=string.substring(0,string.length-1);
     inputBox.value=string;
    }
   else if(f.target.innerHTML=="="){
    string=eval(string);
    inputBox.value=string;
   }
   else{
    string=string+f.target.innerHTML;
    inputBox.value=string;
   }
})
})
