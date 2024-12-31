let valueArray = [];
function addValue(){
  let value = "";
  let createElement = "";
  let inputValue = document.getElementById('inputValue').value;
  let pushValue = valueArray.push(inputValue);
  console.log(valueArray);
  document.getElementById('inputValue').value ="";

  if((inputValue.trim())){
    document.getElementById('errRequired').style="display:none"
    document.getElementById('errCharacter').style="display:block"

    console.log(',,,,,,,,,')
    if((inputValue.trim()).length>=3){
    document.getElementById('errCharacter').style="display:none"
      for(let i=0; i<valueArray.length; i++){
        value = valueArray[i];
        createElement = document.createElement('li');
        createDeleteElement = document.createElement('button');
        createElement.innerHTML = value;
        createDeleteElement.innerHTML ="delete";
        
      }
    
      createElement.appendChild(createDeleteElement);
      displayList.appendChild(createElement);
    
      createDeleteElement.addEventListener("click",function(){
      createElement.remove();
      })
    }
  }
  else{
   document.getElementById('errRequired').style="display:block"
    
  }

  
}