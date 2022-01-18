function compute()
{
    // Getting DOM elements values
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    // Validation of the principal entry
    if(isNaN(parseInt(principal))){
        alert("Empty field. Please enter a valid amount.");
        document.getElementById("principal").focus();
    }
    else if(parseInt(principal) <= 0){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
    else{
        // Computation of the interest
        var amount = principal * years * rate /100;
        // Computation of the year
        var year = new Date().getFullYear()+parseInt(years);
    
        document.getElementById("result").innerHTML="If you deposit "+"<mark>"+principal+"</mark>"+",\<br\>at an interest rate of "+"<mark>"+rate+"%</mark>\<br\>You will receive an amount of "+"<mark>"+amount+"</mark>"+",\<br\>in the year "+"<mark>"+year+"</mark>"+"\<br\>";
    }
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "%";
}