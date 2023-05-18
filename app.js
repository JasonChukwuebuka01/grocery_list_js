Swal.fire({
 title: 'My Grocery list!',
text: `Hint:Click to strike, Double click to delete and
       Pen to Clear All`,
imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5QrdwNF9mHiJjLw_TphJzuw4XgHrwN3mh6cHO_F_BifPFnp9iZrWK4Mth&s=10',
imageWidth: 250,
imageHeight: 200,
imageAlt: 'Custom image',
});

window.onload=()=>{
    
 const pen= document.querySelector("#pen");
 const userInput = document.querySelector("#user_input");
 const stage = document.querySelector("#stage");
 let count= 0;
 
 
 userInput.addEventListener("blur",()=>{
 
     list();     
 });

 userInput.addEventListener("keydown",(event)=>{
      if(event.key == "Enter"){
          list()
      }
 })
    
     
    
//CASE 1: (A list() that creates a new liTag element);
  function list(){
     
     let value= userInput.value.trim();
     
        if(value){
     let liTag= document.createElement("li");
      liTag.innerHTML = `${value} `;
     
     
   
// CASE 1.1: Click event to the created element litag! 

    liTag.addEventListener("dblclick",()=>{
      liTag.style.display="none";
     });//End of Case 1.1
     
     
       
// CASE 1.2: Click event to the created element litag! 

    liTag.addEventListener("click",()=>{
    
       if(liTag.style.textDecoration != "line-through"){
      liTag.style.textDecoration="line-through";
      }else{
          liTag.style.textDecoration="none";
      }
      
     });//End of Case 1.2
    
       stage.appendChild(liTag);
       userInput.value="";
             
// CASE 1.3(Click event to pen to set LiTag to display none);  
   pen.addEventListener("click",()=>{
      liTag.style.display ="none";
      
 })// End of Case 1.3;   
      
        
     }else{
        
       alert("Enter a value");
    }
        
         
  };// End of CASE 1;
    
   
   
    
  
 
 // CASE 2: (Click event to pen to perform shadow animation); 
    pen.addEventListener("click",()=>{
        count+=1
         if(count === 1){
           pen.style.animation="shadow .5s ease";
      
      }else if (count === 2){
          pen.style.animation="shadow2 .5s ease";
          
          count=0;
      }
        
        
        
    });// End of Case 2;
    
    
}// End of General ()✅