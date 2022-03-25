var formEl = document.forms[0];
var outputEl = document.getElementById("output")

var length = formEl.Cylinderlength;
var outDiameter = formEl.outerDiameter;
var inDiameter = formEl.innerDiameter;


formEl.addEventListener('submit', function(e){
    e.preventDefault();

    let lengthInt = length.value
    let outDiameterInt = outDiameter.value
    let inDiameterInt = inDiameter.value

    volumeInt = ((outVolume(lengthInt, outDiameterInt)) - (inVolume(lengthInt, inDiameterInt)));
    bettongAmountInt = (bettongAmount(volumeInt)).toFixed(2);
    cost = costCalc(bettongAmount(volumeInt)).toFixed(2);

    if(lengthInt == 0 || inDiameterInt == 0 || outDiameterInt == 0 ){
        outputEl.innerHTML = "Insert values"
    } else if(volumeInt == 0) {
        outputEl.innerHTML = "Inner diameter is larger than outer diameter"
    } else if(inDiameterInt == outDiameterInt) {
        outputEl.innerHTML = "Inner diameter is equal to outer diameter"
    } else {


    outputEl.innerHTML = (
    "Røret har ett indre volum på " + volumeInt + " cm\xb3" +
    "\r\nDu trenger: " + bettongAmountInt + " sekker" +
    "\r\nBettongen har en kostnad av " + cost + " -,kr"
    )
    console.log(volumeInt)
    console.log(outVolume(lengthInt, outDiameterInt))
}
});

function costCalc(bettongAmount) {
    var pris = 89
    return bettongAmount*pris;
}

function bettongAmount(volum) {
    var sekkLiterIcm = 12.5*1000;
    return volum / sekkLiterIcm;
}

function inVolume(length, inDiameter) {
    var r = inDiameter/2;
    return Math.PI*(r*r)*length;
}

function outVolume(length, outDiameter) {
    var r = outDiameter/2;
    return Math.PI*(r*r)*length;
}