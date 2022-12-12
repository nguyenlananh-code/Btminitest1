function Add() {
    let number1=document.getElementById("number1").value;
    let number2=document.getElementById("number2").value;
    let Result= Number(number1) + Number(number2);
    document.getElementById("Result").innerText= Result;
}
function Sub() {
    let number1=document.getElementById("number1").value;
    let number2=document.getElementById("number2").value;
    let Result= Number(number1)- Number(number2);
    document.getElementById("Result").innerText= Result;
}
function Core() {
    let number1=document.getElementById("number1").value;
    let number2=document.getElementById("number2").value;
    let Result= Number(number1) * Number(number2);
    document.getElementById("Result").innerText= Result;
}
function Divide() {
    let number1=document.getElementById("number1").value;
    let number2=document.getElementById("number2").value;
    let Result= Number(number1)/ Number(number2);
    document.getElementById("Result").innerText= Result;
}