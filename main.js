function calc(){
    var bmi;
    var cat;
    var result=document.getElementById("result");
    var weight=parseInt(document.getElementById("weight").value);
    document.getElementById("weight_val").textContent=weight+"kg";
    var height=parseInt(document.getElementById("height").value);
    document.getElementById("height_val").textContent=height+"cm";
    bmi=(weight/Math.pow((height/100),2)).toFixed(1);
    result.textContent=bmi;
    if(bmi<18.5){
        cat="Under Weight";
        result.style.color= "#ffc44d";
    }
    else if(bmi>=18.5 && bmi<24.9){
        cat="Normal Weight";
        result.style.color= "#0be881";
    }
    else if(bmi>=25 && bmi<29.9){
        cat="Over Weight";
        
        result.style.color= "#ff884d";
    }
    else{
        cat="Obese";
        result.style.color="#ff5e57"
    }
    document.getElementById("cat").textContent=cat;
}
