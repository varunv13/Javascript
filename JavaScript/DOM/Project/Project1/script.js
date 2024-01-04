const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach(function (button) {
    // console.log(button);
    button.addEventListener('click' , function (v) {
        // console.log(v);
        // console.log(v.target);
        // if(v.target.id === 'grey'){
        //     body.style.backgroundColor = v.target.id;
        // }
        // else if(v.target.id === 'white'){
        //     body.style.backgroundColor = v.target.id;
        // }
        // else if(v.target.id === 'blue'){
        //     body.style.backgroundColor = v.target.id;
        // }
        // else body.style.backgroundColor = v.target.id;
        switch (v.target.id) {
            case 'grey':
                body.style.backgroundColor = v.target.id;
                break;
            case 'white':
                body.style.backgroundColor = v.target.id;
                break;
            case 'blue':
                body.style.backgroundColor = v.target.id;
                break;
            case 'yellow':
                body.style.backgroundColor = v.target.id;
                break;
            default:
                break;
        }
    })
});
