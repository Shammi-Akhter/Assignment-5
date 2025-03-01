function clickChangeBg() {

    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    let rgbValue = "#" + randomColor;
    document.body.style.backgroundColor = rgbValue;
}


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
            if(taskAssign === 2)
                {
                   
                        alert("Congrats!!!! You have completed all the current tasks!");
                    
                }


            const taskTitle = button.closest(".card-container").querySelectorAll(".card-title").innerText;
            const dateTimeString = new Date().toLocaleTimeString();
        
            const logEntry = document.createElement("p");
            logEntry.classList.add("log");
            logEntry.innerText = `You have Complete ${taskTitle} at ${dateTimeString}`;
        
            const activityLog = document.getElementById("log-container");
            activityLog.appendChild(logEntry);

            

        });
    });


    