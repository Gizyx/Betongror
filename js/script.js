var formEl = document.forms[0];
var outputEl = document.getElementById("output")

var length = formEl.Cylinderlength;
var outDiameter = formEl.outerDiameter;
var inDiameter = formEl.innerDiameter;

console.log(length)

//+ " cm\xb3"

formEl.addEventListener('submit', function(e){
    e.preventDefault();

    let lengthInt = length.value
    let outDiameterInt = outDiameter.value
    let inDiameterInt = inDiameter.value

    if(lengthInt == 0 || inDiameterInt == 0 || inDiameterInt == 0 ){
        outputEl.innerHTML = "Insert values"
    } else {
    inVolumeInt = (inVolume(lengthInt, inDiameterInt)).toFixed(2);
    outVolumeInt = (outVolume(lengthInt, outDiameterInt)).toFixed(2);
    bettongAmountInt = (bettongAmount(inVolume(lengthInt, inDiameterInt))).toFixed(2);
    cost = costCalc(bettongAmount(inVolumeInt)).toFixed(2);

    outputEl.innerHTML = (
    "Du trenger: " + bettongAmountInt +
    "\r\nsekker med betong for å fylle røret med et volum på: " + inVolumeInt + " cm\xb3" +
    "\r\ntil en kostnad av " + cost + " -,kr"
    )
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