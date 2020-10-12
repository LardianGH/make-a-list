const list = [];
const br = document.createElement("br");
let optionNumberedNotes = true;
let noteNumber = "";
let colorNumber = 0;

function changeNumbered() {
    if (optionNumberedNotes === true) {
        optionNumberedNotes = false;
        document.getElementById("optionNumberedButton").innerHTML = "Off"
    } else {
        optionNumberedNotes = true;
        document.getElementById("optionNumberedButton").innerHTML = "On"
    }
};

function numberSlider() {
    if (optionNumberedNotes === true) {
        noteNumber = (list.length + 1) + ". "
    } else {
        noteNumber = ""
    }
}

function checkColor() {
    if (list.length % 2 === 0) {
        colorNumber = 2
    } else {
        colorNumber = 1
    }
}

function addList() {
    if (document.getElementById("textBox").value !== "") {
        numberSlider()
        checkColor()
        const newestInput = '<div class="listSlot" id="color' + colorNumber + '","color">'+ noteNumber + document.getElementById("textBox").value + '</div>'
        list.push(newestInput)
        console.log(list)
        document.getElementById("listArea").innerHTML = list.join("")
        document.getElementById("textBox").value = ""
        console.log(document.getElementById("listArea").innerHTML)
} else {
    document.getElementById("errorMessage").innerHTML = "you cant enter a blank space"
    setTimeout(function(){
        document.getElementById("errorMessage").innerHTML = ""
    }, (1000 * 2.5))
}
}