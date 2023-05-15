function somar() {
    var tn1 = document.getElementById('txtn1')
    var tn2 = document.getElementById('txtn2')
    var res = document.getElementById('res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 + n2
    res.innerHTML = ` A soma entre ${n1} + ${n2} é =  ${s}`
}

function noneText(noneText) {
    const elem = document.getElementById("res");
    elem.innerText = noneText;
    
}
function fontSize(fontSize) {
    const elem = document.getElementById("demo").style.fontSize = "70px";
    elem.innerText = fontSize;
    
}

