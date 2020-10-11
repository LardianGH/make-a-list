const list = []
const br = document.createElement("br");
function addList() {
    const newestInput = (list.length + 1) + " " + document.getElementById("textBox").value
    list.push(newestInput)
    console.log(list)
    document.getElementById("listArea").innerHTML = list.join("<br>")
    document.getElementById("textBox").value = ""
    console.log(document.getElementById("listArea").innerHTML)
}