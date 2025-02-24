function OddOrEven(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

function checkNumber() {
    let num = document.getElementById("numInput").value;
    let result = OddOrEven(parseInt(num));
    document.getElementById("r").innerText = `The number is ${result}.`;
}
console.log(OddOrEven(7));  
console.log(OddOrEven(10));
