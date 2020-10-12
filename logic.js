const list = [];
const br = document.createElement("br");
let optionNumberedNotes = true;
let noteNumber = "";
let colorNumber = 0;

function changeNumbered() {
    if (document.getElementById("optionNumberedButton").innerHTML === "On") {
        //console.log("on")
       //console.log(list.length)
        for (i = 0; i < list.length; i ++) {
            //console.log(i)
        document.getElementsByClassName("noteNumber")[i].style.visibility = 'hidden';
        document.getElementsByClassName("noteNumber")[i].style.display = 'none';
        //console.log(document.getElementById("listArea"))
        document.getElementById("listArea").style.textAlign = 'center';
    }
        document.getElementById("optionNumberedButton").innerHTML = "Off"
    } else {
        //console.log("off")
        //console.log(list.length)
        for (i = 0; i < list.length; i ++) {
            //console.log(i)
            document.getElementsByClassName("noteNumber")[i].style.visibility = 'visible';
            document.getElementsByClassName("noteNumber")[i].style.display = 'inline';
            document.getElementById("listArea").style.textAlign = 'left';
        }
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
        const newestInput = '<div class="listSlot" id="color' + colorNumber + '","color">'+ '<span class=noteNumber style="visibility:visible;">' + noteNumber + '</span>' +document.getElementById("textBox").value + '</div>'
       
        console.log(document.getElementsByClassName("noteNumber"))
       
        list.push(newestInput)
       // console.log(list)
        document.getElementById("listArea").innerHTML = list.join("")
        document.getElementById("textBox").value = ""
        // console.log(document.getElementById("listArea").innerHTML)
} else {
    document.getElementById("errorMessage").innerHTML = "you cant enter a blank space"
    setTimeout(function(){
        document.getElementById("errorMessage").innerHTML = ""
    }, (1000 * 2.5))
}
}