  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB0zZEIbl2kBwOmEbw6PcQIeA0Kg2JRDOU",
    authDomain: "tutor-devs.firebaseapp.com",
    databaseURL: "https://tutor-devs.firebaseio.com",
    projectId: "tutor-devs",
    storageBucket: "", //tutor-devs.appspot.com
    messagingSenderId: "451544851996",
    appId: "1:451544851996:web:352121938879bcd6aa21d9"
  };
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  var dataRef = firebase.database();

let list = [];
let newestInput = "";
const br = document.createElement("br");
let optionNumberedNotes = true;
let noteNumber = "";
let colorNumber = 0;

function changeNumbered() { //Controls wether the list is presented with numbers or centered
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

dataRef.ref().orderByChild("dateAdded").on("child_added", function(snapshot) {

    document.getElementById("listArea").innerHTML = "";

    const note = snapshot.val().Note;
    console.log("How many times am i getting called?")
    console.log(note) //something wrong here


    newestInput = '<div class="listSlot" id="color' + colorNumber + '","color">'+ '<span class=noteNumber style="visibility:visible;">' + noteNumber + '</span>' + note + '</div>'
    
    list.push(newestInput)

    console.log("the list is : " + list)

    console.log('complete run-through')
    //console.log("List is : " + newestInput)
    //console.log("List is : " + list)

    document.getElementById("listArea").innerHTML = list.join("")
        
    document.getElementById("textBox").value = "";


});

function addNote() {
    if (document.getElementById("textBox").value !== "") {
        numberSlider()
        checkColor()

        console.log("---------------------Start-----------------------")

        dataRef.ref().push({
            Note: document.getElementById("textBox").value,
            dateAdded: firebase.database.ServerValue.TIMESTAMP
        });

        /*
        const newestInput = '<div class="listSlot" id="color' + colorNumber + '","color">'+ '<span class=noteNumber style="visibility:visible;">' + noteNumber + '</span>' +document.getElementById("textBox").value + '</div>'
        
        console.log(document.getElementsByClassName("noteNumber"))
       
        list.push(newestInput)
       // console.log(list)
        document.getElementById("listArea").innerHTML = list.join("")
        document.getElementById("textBox").value = ""
        // console.log(document.getElementById("listArea").innerHTML)
        */
} else {
    document.getElementById("errorMessage").innerHTML = "you cant enter a blank space"
    setTimeout(function(){
        document.getElementById("errorMessage").innerHTML = ""
    }, (1000 * 2.5))
}
}