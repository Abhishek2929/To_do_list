
var count = 0;
function addElement(){
    var task = document.getElementById('taskField').value

    var taskContainer = document.getElementsByClassName('taskContainer')[0];

    taskContainer.innerHTML = `
    <div class="task" id="task${count}">
        <span class="taskDes">${task}</span><button id="deleteBtn${count}">Delete</button>
    </div>
    ` + taskContainer.innerHTML;

    console.log('deleteBtn'+count)

    count++;

    for(var i =0; i<count; i++) {

        document.getElementById(`deleteBtn${i}`).addEventListener('click', function () {
            // console.log(i);
            // document.getElementById(`task${i}`).remove()
        })
    }
    
}

function deleteElement(){
    var deletelement = document.getElementById(`deleteBtn${i}`)
}




document.getElementById('add').addEventListener('click' , addElement);





// function getName(){
//     var firstName = document.getElementById('firstName').value;
//     var lastName = document.getElementById('lastName').value;
//     var element = document.getElementById('listEle');
//     var newElement = document.createElement('li');
//     newElement.innerText = firstName + " " + lastName ;

//     element.appendChild(newElement);

// }



// document.getElementById('btn').addEventListener('click' , getName);
