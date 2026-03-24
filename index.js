function calculate(){
    const principalinput = document.getElementById("principal");
    const rateinput = document.getElementById("rate");
    const yearsinput = document.getElementById("years");
    const total = document.getElementById("total")

    let principal = Number(principalinput.value);
    let rate = Number(rateinput.value);
    let years = Number(yearsinput.value);
    

    if(principal<0 || isNaN(principal)){
        principal=0;
        principalinput.value=0;
    }
    if(rate<0 || isNaN(rate)){
        rate=0;
        rateinput.value=0;
    }
    if(years<0 || isNaN(years)){
        years=0;
        yearsinput.value=0;
    }
    const result = principal *Math.pow((rate/100+1), years);
    total.textContent=result.toLocaleString(undefined, {style:"currency", currency:"USD"});
}