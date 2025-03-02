function clickChangeBg() {

    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    let rgbValue = "#" + randomColor;
    document.body.style.backgroundColor = rgbValue;
}
   
       
        const currentDate = new Date();

        
        const dayOfWeek = currentDate.toLocaleString('en-US', { weekday: 'short' }); 
        const month = currentDate.toLocaleString('en-US', { month: 'short' }); 
        const day = currentDate.getDate(); 
        const year = currentDate.getFullYear(); 

        const formattedDate = `${dayOfWeek},`;
        const date = `${month} ${day} ${year}`;

        document.getElementById('current-day').textContent = ` ${formattedDate}`;
        document.getElementById('current-date').textContent = ` ${date}`;
     
const buttons = document.querySelectorAll('.card button')
buttons.forEach((button) => {
    button.addEventListener('click', function () {

        if (button.disabled) return;
        button.disabled = true;
        button.style.backgroundColor = "gray";
        button.style.cursor = "not-allowed";
        alert("Board Updated Successfully");


        let addElement = document.getElementById("checkBox-count");
        addElement.textContent = parseInt(addElement.textContent) + 1;

        let subElement = document.getElementById("task-count");
        subElement.textContent = parseInt(subElement.textContent) - 1;

        let taskAssign = subElement.textContent;
        if (taskAssign == 0) {
            alert("Congrats!!!! You have completed all the current tasks!");

        }

        const taskTitle = button.closest(".card-div").querySelector(".card-title").innerText;
        const dateTimeString = new Date().toLocaleTimeString();
       
        const logEntry = document.createElement("p");
        logEntry.classList.add("log");
        logEntry.innerText = `You have Complete ${taskTitle} at ${dateTimeString}`;

        const activityLog = document.getElementById("log-container");
        activityLog.appendChild(logEntry);

        document.getElementById("clear-history").addEventListener("click", function () {
            const logContainer = document.getElementById('log-container');
            logContainer.innerHTML = '';

        })

    });
});


