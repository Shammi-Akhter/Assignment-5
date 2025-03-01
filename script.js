function clickChangeBg() {

    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    let rgbValue = "#" + randomColor;
    document.body.style.backgroundColor = rgbValue;
}
function showAlert() {
    alert("Board Updated Successfully");

    let addElement = document.getElementById("checkBox-count");
    addElement.textContent = parseInt(addElement.textContent) + 1;

    let subElement = document.getElementById("task-count");
    subElement.textContent = parseInt(subElement.textContent) - 1;
    let taskAssign = subElement.textContent;

    let button = document.getElementById("complete-btn");
    button.disabled = true;
    button.classList.add("disabled");
    button.style.background = "gray";

    const now = new Date();
    const dateTimeString = now.toLocaleString();

    const logEntry = document.createElement('p');
    logEntry.classList.add("log")
    logEntry.textContent = `You have Complete "${card - title}" at ${dateTimeString}`;

    const activityLog = document.getElementById("log-container");
    activityLog.appendChild(logEntry);



    if (taskAssign === 0) {
        alert('Congrates!!!1You have completed all the current task!')
    }


    const clearHistory = document.getElementById("clear-history") 
    clearHistory.addEventListener('click', function(){
        const logContainer = document.getElementById("log-container");
        logContainer.innerHTML = "";
    })

}