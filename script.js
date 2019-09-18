//tk1

let studiepuntenHaalbaarKT1 = document.getElementById("studiepuntenHaalbaarKT1").innerHTML;

let UXD = document.getElementById('UXD');
let TPR = document.getElementById('TPR');
let gemiddeldeKT1 = document.getElementById('gemiddeldeKT1');
let studiepuntenKT1 = document.getElementById('studiepuntenKT1');
//functie kt1
UXD.addEventListener('input', berekenGemiddeldeKT1);
TPR.addEventListener('input', berekenGemiddeldeKT1);
function berekenGemiddeldeKT1()

{

let gemiddelde = (parseFloat(UXD.value) + parseFloat(TPR.value))/2;
gemiddeldeKT1.innerHTML = gemiddelde;
if(gemiddelde >=5.5)
{studiebehaaldBehaaldKT1.innerHTML = studiepuntenHaalbaarKT1;}
else {studiebehaaldBehaaldKT1.innerHTML = 0;}
berekenTotaalSP();



}


let studiepuntenHaalbaarKT2 = document.getElementById("studiepuntenHaalbaarKT2").innerHTML;
let PRO1 = document.getElementById('PRO1');
let PRO2 = document.getElementById('PRO2');
let gemiddeldeKT2 = document.getElementById('gemiddeldeKT2');
let studiepuntenKT2 = document.getElementById('studiepuntenKT2');

//functie kt2
PRO1.addEventListener('input', berekenGemiddeldeKT2);
PRO2.addEventListener('input', berekenGemiddeldeKT2);
function berekenGemiddeldeKT2()

{

let gemiddelde = (parseFloat(PRO1.value) + parseFloat(PRO2.value))/2;
gemiddeldeKT2.innerHTML = gemiddelde;
if(gemiddelde >=5.5)
{studiebehaaldBehaaldKT2.innerHTML = studiepuntenHaalbaarKT2;}
else {studiebehaaldBehaaldKT2.innerHTML = 0;}
berekenTotaalSP();

}


let studiepuntenHaalbaarKT3 = document.getElementById("studiepuntenHaalbaarKT3").innerHTML;
let studiebehaaldBehaaldKT3 = document.getElementById('studiebehaaldBehaaldKT3');
let PROJ = document.getElementById('PROJ');
let WVO = document.getElementById('WVO');
let gemiddeldeKT3 = document.getElementById('gemiddeldeKT3');
let studiepuntenKT3 = document.getElementById('studiepuntenKT3');

//functie kt2
PROJ.addEventListener('input', berekenGemiddeldeKT3);
WVO.addEventListener('input', berekenGemiddeldeKT3);
function berekenGemiddeldeKT3()

{

let gemiddelde = (parseFloat(PROJ.value) + parseFloat(WVO.value))/2;
gemiddeldeKT3.innerHTML = gemiddelde;
if(gemiddelde >=5.5)
{studiebehaaldBehaaldKT3.innerHTML = studiepuntenHaalbaarKT3;}
else {studiebehaaldBehaaldKT3.innerHTML = 0;}

berekenTotaalSP();

}

let studiepuntenHaalbaarAVO = document.getElementById("studiepuntenHaalbaarAVO").innerHTML;
let ENG = document.getElementById('ENG');
let NED = document.getElementById('NED');
let REK = document.getElementById('REK');
let gemiddeldeAVO = document.getElementById('gemiddeldeAVO');
let studiepuntenAVO = document.getElementById('studiepuntenAVO');

//functie AVO

ENG.addEventListener('input', berekenGemiddeldeAVO);
NED.addEventListener('input', berekenGemiddeldeAVO);
REK.addEventListener('input', berekenGemiddeldeAVO);

function berekenGemiddeldeAVO()

{

let gemiddelde = (parseFloat(ENG.value) + parseFloat(NED.value) + parseFloat(REK.value))/2;
gemiddeldeAVO.innerHTML = gemiddelde;
if(gemiddelde >=5.5)
{studiebehaaldBehaaldAVO.innerHTML = studiepuntenHaalbaarAVO;}
else {studiebehaaldBehaaldAVO.innerHTML = 0;}
berekenTotaalSP();

}

let studiepuntenHaalbaarPROF = document.getElementById("studiepuntenHaalbaarPROF").innerHTML;
let BUR = document.getElementById('BUR');
let SLB = document.getElementById('SLB');
let gemiddeldePROF = document.getElementById('gemiddeldePROF');
let studiepuntenPROF = document.getElementById('studiepuntenPROF');

//functie PROF
BUR.addEventListener('input', berekenGemiddeldePROF);
SLB.addEventListener('input', berekenGemiddeldePROF);
function berekenGemiddeldePROF()

{

let gemiddelde = (parseFloat(BUR.value) + parseFloat(SLB.value))/2;
gemiddeldePROF.innerHTML = gemiddelde;
if(gemiddelde >=5.5)
{studiebehaaldBehaaldPROF.innerHTML = studiepuntenHaalbaarPROF;}
else {studiebehaaldBehaaldPROF.innerHTML = 0;}

berekenTotaalSP();
}

let totaalSP = document.getElementById('totaalSP');
function berekenTotaalSP()

{

totaalSP.innerHTML = parseFloat(studiebehaaldBehaaldKT1.innerHTML)
+ parseFloat(studiebehaaldBehaaldKT2.innerHTML)+
parseFloat(studiebehaaldBehaaldKT3.innerHTML)+
parseFloat(studiebehaaldBehaaldAVO.innerHTML)+
parseFloat(studiebehaaldBehaaldPROF.innerHTML);


}