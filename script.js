const submitBtn = document.getElementById("submit")
const consumption = document.getElementById("consumption-input")
const output = document.getElementById("output")
const costLiter = document.getElementById("cost-liter")
const costLpg = document.getElementById("cost-lpg")
const fuelType = document.getElementsByName("fuel-type")

calorific_values = {
    'diesel': 10400,
    'Furnace-oil': 10200,
    'natural-gas': 8600,
    'lpg': 55000,
    "light-diesel-oil": 10300,
    'petrol': 8000,
}

function checkedOption(arr){
    for(let i=0; i< arr.length; i++){
        if(arr[i].checked) {
            return arr[i].value
        }
    }
}

function calculate_savings(current_fuel, current_fuel_amount, current_fuel_price, lpg_price){
    let current_fuel_calorific_value = calorific_values[current_fuel] * current_fuel_amount

    let lpg_amount = current_fuel_calorific_value / calorific_values['lpg']
    
    let current_fuel_cost = current_fuel_amount * current_fuel_price
    
    let lpg_cost = lpg_amount * lpg_price
    
    let savings = current_fuel_cost - lpg_cost
    
    return savings.toFixed(3)
}


submitBtn.addEventListener("click", (e)=>{
    e.preventDefault()
    let selectedFuelType = checkedOption(fuelType)
    let saving = calculate_savings(selectedFuelType, consumption.value, costLiter.value, costLpg.value)
    output.innerHTML = `<h2 class="result">Monthly Savings: <span class="result-number">₹ ${saving}</span></h2>
                        <h2 class="result">Annual Saving: <span class="result-number">₹ ${saving * 12}</span></h2>`
    console.log(consumption.value, costLiter.value, costLpg.value ,selectedFuelType)

})