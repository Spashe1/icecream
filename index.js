"use stirct"
window.onload = function(){
    const submitBtnEl = document.getElementById('submit');
    submitBtnEl.onclick= onSubmitBtnClicked;
    let cupBtnEl = document.getElementById('cupBtn');
    let coneBtnEl = document.getElementById('coneBtn');
    coneBtnEl.onclick = onHideOrShowToppingDiv;
    cupBtnEl.onclick = onHideOrShowToppingDiv;
    //let toppingDiv = document.getElementById('toppingDiv');
};
function onHideOrShowToppingDiv(){
    let coneBtnEl = document.getElementById('coneBtn');
    let toppingDiv =document.getElementById('toppingDiv');
    let cupBtnEl = document.getElementById('cupBtn');
    if(coneBtnEl.checked){
        toppingDiv.style.display ="none";
    }
    else{
        toppingDiv.style.display ="block";
    }
    if(cupBtnEl.checked){
        toppingDiv.style.display = "block";
    }
    else{
        toppingDiv.style.display ="none";
    }
}
 
 function onSubmitBtnClicked() {
     const numScoop = +document.getElementById('numOfScoops').value;
     console.log('numOfScoop',numScoop);
     const ScoopPrice = 2.25;
     //const numOfExtraScoops = numScoop - 1;
     //const extraScoopCost = 1.25;
     

     const basePrice = numScoop * ScoopPrice;
     document.getElementById('basePrice').innerHTML = basePrice.toFixed(2);

     let extraCharge = 0;
     if(document.getElementById('sprinkles').checked) {
        extraCharge += 0.50;
     }
     if(document.getElementById('hotFudge').checked) {
        extraCharge += 1.25;
     }
    if(document.getElementById('whippedCream').checked){
        extraCharge += 0.25;
    }
    if(document.getElementById('cherry').checked){
        extraCharge +=0.25;
    }
    //const toppings = numScoop + extraCharge;
   // document.getElementById('toppings').innerHTML = toppings.toFixed(2);
   
    

    
    const tax = numScoop * 0.4;
    document.getElementById('tax').innerHTML = tax.toFixed(2);

    const totalDue = basePrice + tax;
    document.getElementById('totalDue').innerHTML = totalDue.toFixed(2); 
}

