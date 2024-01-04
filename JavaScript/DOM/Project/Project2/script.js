const form = document.querySelector('form')
form.addEventListener('submit', function (event) {
    event.preventDefault() // stopping the default action

    const height = parseInt(document.querySelector("#height").value) // getting the value, when once submission is done
    // console.log(height);
    const weight = parseInt(document.querySelector("#weight").value)
    // console.log(weight);
    const results = document.querySelector('#results')

    if(height === '' || weight < 0 || isNaN(height)){
        results.innerHTML = "Please give valid details"
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        // show the results
        // results.innerHTML = `<span> ${bmi}</span>`
        if(bmi < 18.6) 
            results.innerHTML = `<span>${bmi}, Under Weight</span>`
        else if(bmi >= 18.6 && bmi <= 24.9)
            results.innerHTML = `<span>${bmi}, Normal Weight</span>`
        else results.innerHTML = `<span>${bmi}, Over Weight</span>`
         

    }

})