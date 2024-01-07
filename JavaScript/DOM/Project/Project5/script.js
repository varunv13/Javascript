const randomColor = function () {
    const hex = "0123456789ABCDEF";
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

// console.log(randomColor());
let set;
const startChangingColor = () => {
    if(!set){
        set = setInterval(() => change(), 1000);
        const change = () => {
            document.body.style.backgroundColor = randomColor();
        }
    }
}

const stopChangingColor = () => {
    clearInterval(set);
    set = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);
