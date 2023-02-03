// console.log("hello world");
// // alert("thik xw");
// let response = prompt("what is your name ? ");
// // console.log(response);
// alert("hello" + response);
// let output = document.querySelector("#output");
// console.log(output);


let yourName = document.querySelector("#yourName");
let theirName = document.querySelector("#theirName");
let output = document.querySelector("#output");
let singlePeople = ['ram', 'shyam', 'hari']
function calculate() {
    let name1 = yourName.value
    let name2 = theirName.value
    if (name1.length == 0 || name2.length == 0) {
        output.innerText = "please enter both name"

    }
    else {
        if (singlePeople.includes(name1.toLowerCase())) {
            output.innerText = "IN relationship "
            yourName.value = ""
            theirName.value = ""
        }
        else {
            let lovepercent = parseInt(Math.random() * 100)
            output.innerText = name1 + " " + name2 + " are in " + lovepercent + "% love"
        }
        yourName.value = ""
        theirName.value = ""
        console.log(name1, name2)
    }
}
