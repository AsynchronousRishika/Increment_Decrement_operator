const countValue = document.getElementById("counter").innerHTML;
let value2 = parseInt(countValue);
const increment = () => {
  //get the value form UI
  value2 = value2 + 1;
  //upadte the value
  //set the value onto UI
  if(value2<10){
  document.getElementById("counter").innerHTML= "0"+value2;}
  else{
    document.getElementById("counter").innerHTML= value2;}
  
};
const decrement = () => {
  //get the value form UI
 
  value2 = value2 - 1;
  
  //upadte the value
  //set the value onto UI
 document.getElementById("counter").innerHTML= value2;
};