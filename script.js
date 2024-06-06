// load script after the initial page has rendered so we can see what we want to be manipulated then run those scripts

document.addEventListener("DOMContentLoaded", function () {
    //input. we are accessing this specific id.
    const taskInput = document.getElementById("task");
    // a console log here would return the entire input element, not the input value.

    // specific button 
    const addTaskButton = document.getElementById("addTask")

    // specific ul 
    const taskList = document.getElementById("taskList")

    //event listener for button after a click event happens
    addTaskButton.addEventListener("click", function () {

        // get the input value
        const taskText = taskInput.value;
        console.log(taskText);

        //adding the values in the list
        const taskItem = document.createElement("li") //this is nothing but a li tag created with JS
        // continue if the input is filled in, to prevent submitting an empty value
        if (taskText !== "") {

        //giving the inner html the input value
        taskItem.innerHTML = `${taskText} <button id="delete-btn" class="delete">Delete</button>`

        //appending or adding child inside the parent
        // we are adding a new li inside the ul
        taskList.appendChild(taskItem);


        //delete items via apply event listener and remove the child element. Used querySelector on the element that was newly created.
        const deleteButton = taskItem.querySelector("#delete-btn")
        deleteButton.addEventListener("click", function () {
            taskList.removeChild(taskItem)
        })        
    }
    else {
        alert("Please type your task");
    }   
    // solution: clear the input value after it has posted 
    taskInput.value = "";
}         
)
})