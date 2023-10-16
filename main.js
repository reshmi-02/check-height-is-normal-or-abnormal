
var height=parseFloat(prompt("Enter your height in centimeter"));

if(height<150){
    document.write("The person is small");
}
else if(height>=150 && height<165){
  document.write("The person is average heighted");
}
else if(height>=165 && height<=195){
  document.write("The person is taller");
}
else{
  document.write("Abnormal height");
}