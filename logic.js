const list = []
const br = document.createElement("br");
function addList() {
    if (document.getElementById("textBox").value !== "") {
    const newestInput = '<div class="listSlot" id="color' + list.length + '","color">'+  +(list.length + 1) + ". " + document.getElementById("textBox").value + '</div>'
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