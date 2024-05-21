function Calculate(){
    const hele=parseFloat(document.getElementById("height").value);
    const wele=parseFloat(document.getElementById("weight").value);
    if(isNaN(hele) || isNaN(wele) || hele<=0 || wele<=0){
        document.getElementById("result").innerText="Please Enter the Valid Input";
        return;
    }
    var bmi = wele/Math.pow(hele/100,2);
    document.getElementById("result").innerText="Your BMI is : " + bmi.toFixed(2);
}

function Clear(){
  document.getElementById("hele").value="";
  document.getElementById("wele").value="";
  document.getElementById("result").innerHTML="";
}