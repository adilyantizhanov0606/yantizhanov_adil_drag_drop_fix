console.log("JavaScript File is linked");

// variables
const labels = document.querySelectorAll(".label");
const targetZones = document.querySelectorAll(".target-zone");
const resetButton = document.querySelector("#reset-btn");
const labelBox = document.querySelector("#label-box");
let currrentDraggedElement = null;
//add variables for resett button and label box


// functions
function dragStart() {
    console.log("Started Dragging");
    // whatever the user is dragging, store it in currrentDraggedElement
    currrentDraggedElement = this;
}

function dragOver(e) {
    e.preventDefault();
    console.log("drag over called");
}

function dropped(e) {
    e.preventDefault();
    console.log("dropped");

    //prevent double drops here
    //if this dropzone has a child, don't let it drop
    //use a return statement

if(this.children.length>=1) {
    return;
}

    //drop the piece
    this.appendChild(currrentDraggedElement);

    //reset the reference
    currrentDraggedElement = null;
}


function reset() {
    labels.forEach(label => {
        labelBox.appendChild(label);
    }); // find label and briing back to labelbox

    targetZones.forEach(zone => {
        zone.innerHTML = "";
    }); // empty each targetzone
}

// Event Listeners
labels.forEach(label => {
    label.addEventListener("dragstart", dragStart);
});

targetZones.forEach(zone => {
    zone.addEventListener("dragover", dragOver);
    zone.addEventListener("drop", dropped);
})

resetButton.addEventListener("click", reset)
//listen for the click event, call a reset function 

//FIRST CONSOLE THEN DO OTHER THINGS
