
document.addEventListener("DOMContentLoaded",()=>{
    let countDisplay=document.querySelector(".para-1-1");
    let incBtn=document.querySelector(".inc-btn");
    let decBtn=document.querySelector(".dec-btn");
    let clearBtn=document.querySelector(".clear-btn");
    let errorMsg=document.querySelector(".para-2");
   let count=0;
   function displayContent(){
    countDisplay.textContent=count;
    if(count===0){
        clearBtn.style.display="none";
        errorMsg.style.display="none"
    }
    else{
        clearBtn.style.display="block"
    }
   }
   displayContent();
   incBtn.addEventListener("click",()=>{
    count++;
    if(count>0){
        errorMsg.style.display="none";
    }
    displayContent();
   })
   decBtn.addEventListener("click",()=>{
    if(count>0){
        count--;
        displayContent();
    }
    else{
        errorMsg.style.display="block";
    }
   })
   clearBtn.addEventListener("click",()=>{
    count=0;
    displayContent();
   })
})

