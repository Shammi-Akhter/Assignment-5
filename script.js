function clickChangeBg() {

    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    let rgbValue = "#" + randomColor;
    document.body.style.backgroundColor = rgbValue;
}