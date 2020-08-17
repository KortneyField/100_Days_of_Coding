let html = '';
let red;
let green;
let blue;
let randomRGB;
function randomValue() {
    let num = Math.floor(Math.random() * 256);
    return num; 
};

function randomRGB2(value) {
    const color = `rgb( ${value() }, ${ value() }, ${ value() })`;
    return color; 
}

for (let i = 1; i <=10; i++) {;
    html += `<div style="background-color: ${randomRGB2(randomValue)}">${i}</div>`;
}



document.querySelector('main').innerHTML = html;