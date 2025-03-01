function clickChangeBg() {

    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    let rgbValue = "#" + randomColor;
    document.body.style.backgroundColor = rgbValue;
}
function showAlert(){
    alert("Board Updated Successfully");
    
        let addElement = document.getElementById("checkBox-count");
        addElement.textContent = parseInt(addElement.textContent) + 1;

        let subElement = document.getElementById("task-count");
        subElement.textContent = parseInt(subElement.textContent) - 1;

        let button = document.getElementById("complete-btn");
        button.disabled = true;
        button.classList.add("disabled");  
    
}