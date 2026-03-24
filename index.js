function calculate(){
    const principalinput = document.getElementById("principal");
    const rateinput = document.getElementById("rate");
    const yearsinput = document.getElementById("years");
    const total = document.getElementById("total")

    let principal = principalinput.value;
    let rate = rateinput.value;
    let years = yearsinput.value;
    const result = principal *Math.pow((rate/100+1), years);

    if(principal<0 || isNaN(principal)){
        principal=0;
        principal.textContent=0;
    }
    if(rate<0 || isNaN(rate)){
        rate=0;
        rate.textContent=0;
    }
    if(years<0 || isNaN(years)){
        years=0;
        years.textContent=0;
    }
    total.textContent=result.toLocaleString(undefined, {style:"currency", currency:"USD"});
}