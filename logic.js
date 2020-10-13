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

function hideNumbers() {
console.log("hiding")
    for (i = 0; i < list.length; i ++) { //for as many notes there are in the list
console.log("hiding numbered")
        document.getElementsByClassName("noteNumber")[i].style.visibility = 'hidden'; //go down the list and change the visiblity to hidden <-- might get rid of one of these
        document.getElementsByClassName("noteNumber")[i].style.display = 'none'; //go down the list and change the display to none  
    }
    document.getElementById("listArea").style.textAlign = 'center'; //center everything in listArea

}

function showNumbers() {

    for (i = 0; i < list.length; i ++) { //for as many notes there are in the list

        document.getElementsByClassName("noteNumber")[i].style.visibility = 'visible'; //go down the list and change the visiblity to visible
        document.getElementsByClassName("noteNumber")[i].style.display = 'inline'; //go down the list and change the display to inline
    }
    document.getElementById("listArea").style.textAlign = 'left'; //justify left everything in listArea

}

function changeNumbered() { //Controls wether the list is presented with numbers or centered
    if (document.getElementById("optionNumberedButton").innerHTML === "On") { // If the "numbered" button says On (literally based off the html so kinda janky)

    hideNumbers()
    document.getElementById("optionNumberedButton").innerHTML = "Off" //Changes the button's HTML from On to Off

    } else { // If the "numbered" button says anything other than On
    showNumbers()
    
    document.getElementById("optionNumberedButton").innerHTML = "On" //Changes the button's HTML from Off to On
    }
};

    /* function numberSlider() { 
    console.log("Number option = " + optionNumberedNotes)
    if (optionNumberedNotes === true) { 
        noteNumber = (list.length + 1) + ". "
    } else {
        noteNumber = ""
    } 
    } */

function checkColor() { //This decides what color each line will be
    if (list.length % 2 === 0) { //If the number is 0 or divisible by 2 without a remainder
        colorNumber = 2 //the colorNumber variable is 2
    } else { //If the number is not divisible by 2 without remainder
        colorNumber = 1 //the colorNumber variable is 1
    }
}

dataRef.ref().orderByChild("dateAdded").on("child_added", function(snapshot) { //Basically acts as an asynchronous loop

    noteNumber = (list.length + 1) + ". " // Generates a number of each item in the list dynamically (remakes the numbers visible by accident when centered)

    checkColor() // Calls checkColor for every note in the list


    const note = snapshot.val().Note; //sets the value of note to the current firebase note

    newestInput = '<div class="listSlot" id="color' + colorNumber + '","color">'+ '<span class=noteNumber style="">' + noteNumber + '</span>' + note + '</div>' //Creates some HTML and sets that equal to a variable
    
    list.push(newestInput) //pushes that HTML into the list array ready to be loaded onto the DOM

    document.getElementById("listArea").innerHTML = list.join("") //gets rid of the commas in the list array and loads the HTML into the listArea
        
    if (document.getElementById("optionNumberedButton").innerHTML === "Off") { //If the hide numbers button is in the off position when a new note is added
        hideNumbers() //Hide numbers is called to re-hide the numbers
    }

    document.getElementById("textBox").value = ""; //Clears the textbox


});

function addNote() { //This submits the textbox data to firebase
    if (document.getElementById("textBox").value !== "") { //If the textbox is not empty

        dataRef.ref().push({ // push the following data
            Note: document.getElementById("textBox").value, //the data in the textbox as the name Note
            dateAdded: firebase.database.ServerValue.TIMESTAMP //the time it was uploaded in a hash form as the name dateAdded (used for retrieving and ordering later)
        });
} else { //If the textbox is empty
    document.getElementById("errorMessage").innerHTML = "you cant enter a blank space" //The error message (Currently "") changes to displays the error
    setTimeout(function(){ //a timer is set, when the time runs out the code inside is run
        document.getElementById("errorMessage").innerHTML = "" //the errorMessage reverts to ""
    }, (1000 * 2.5)) //the timer lasts 2.5 seconds
}
}