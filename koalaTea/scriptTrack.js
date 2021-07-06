
// This line is for the function of Quick Order
var resetBtn = document.querySelector("#Resetform");
var formName = document.querySelector(".Order-form-head");
var addQuantity = document.querySelector("#Increase");
var minusQuantity = document.querySelector("#Decrease");
var orderQuantity = document.querySelector("#Order-Quantity");
var x = 0;
addQuantity.addEventListener("click", increase);
function increase(){
  x+=1;
  orderQuantity.value = x;
  if (x>1) {
    minusQuantity.disabled = false;
  }
}
minusQuantity.addEventListener("click", decreaseQ);
function decreaseQ(){
  if (x<=2) {
    minusQuantity.disabled = true;
  }
  x-=1;
  orderQuantity.value = x;
}

// Restart Order function
resetBtn.addEventListener("click", function restart(){formName.reset(); x = 0;
  orderQuantity.innerHTML = x; y = 0; orderQuantity2.innerHTML = y; minusQuantity.disabled = true;sampChoco1.hidden = true;
  sampCheese1.hidden = true;sampSpecials1.hidden = true; addOrdertext.hidden= true; removeAdditionals(sampContainer);});
function removeAdditionals(parent){
  while(parent.firstChild){
    parent.removeChild(parent.firstChild);}}

// Main form construct
var seriesOpt = document.querySelector(".Series-selector");
var flavorCont = document.querySelector(".Series-Cont");
var sampChoco1 = document.querySelector(".SampChoco1");
var sampCheese1 = document.querySelector(".SampCheese1");
var sampSpecials1 = document.querySelector(".SampSpecials1");
seriesOpt.addEventListener("click", selectedSeries);

function selectedSeries(){
  if(seriesOpt.value == 1){
    sampChoco1.hidden = false;
    sampCheese1.hidden = true;
    sampSpecials1.hidden = true;
  }
  else if (seriesOpt.value==2) {
    sampChoco1.hidden = true;
    sampCheese1.hidden = false;
    sampSpecials1.hidden = true;
  }
  else if (seriesOpt.value==3) {
    sampChoco1.hidden = true;
    sampCheese1.hidden = true;
    sampSpecials1.hidden = false;
  }
  else {
    sampChoco1.hidden = true;
    sampCheese1.hidden = true;
    sampSpecials1.hidden = true;
  }
}
var getButton = document.querySelector("#Get-btn");
var orderContain2 = document.querySelector("#Trackorder");
getButton.addEventListener("click", sampleLang);

function sampleLang(){
  var abc = seriesOpt.selectedIndex;
  var def = seriesOpt.options;
  var mainText1 = document.createTextNode(def[abc].text);
  var mainPara1 = document.createElement("h2");
  mainPara1.appendChild(mainText1);
  orderContain2.appendChild(mainPara1);
}

// Functions for additional orders
var addDink = document.querySelector("#Add-btn");
var closeDink = document.querySelector("#close-addorder");
var moreDink = document.querySelector(".MoreDrink");
closeDink.addEventListener("click", function closeAdd(){moreDink.hidden=true;});
addDink.addEventListener("click", function popAdd(){moreDink.hidden=false;});
addDink.addEventListener("click", restEv);

var addOrdertext = document.querySelector(".Added-order");
var sampContainer = document.querySelector(".MoreOrderlist");
var viewList = document.querySelector(".ViewMoreOrder");
var openListbtn = document.querySelector("#addedorder");
var closeListbtn = document.querySelector("#close-listview");

closeListbtn.addEventListener("click", function closeList(){viewList.hidden=true;})
openListbtn.addEventListener("click", function openList(){viewList.hidden=false;})

var y = 0;
var addQuantity2 = document.querySelector("#Increase2");
var minusQuantity2 = document.querySelector("#Decrease2");
var orderQuantity2 = document.querySelector("#Order-Quantity2");
addQuantity2.addEventListener("click", function inc2(){y+=1; orderQuantity2.value = y; if (y>1) {minusQuantity2.disabled = false;}});
minusQuantity2.addEventListener("click", function dec2(){if (y<=2) {minusQuantity2.disabled = true;} y-=1; orderQuantity2.value = y;});

var drinkSize = document.querySelector(".Select-size2");
var addMoredrink = document.querySelector("#SampleSpecials");
var addMore = document.querySelector("#Add2order");
var errorDisp = document.querySelector("#Errordisplay");
addMore.addEventListener("click", moreAdded);

function moreAdded(){if (addMoredrink.value>0 && drinkSize.value>0 && orderQuantity2.value>0) {addOrdertext.hidden=false;
   moreDink.hidden=true; writeOrder(); viewList.hidden=false;}
   else {errorDisp.hidden=false;}}
function restEv(){addMoredrink.value=0; y=0; orderQuantity2.value=y; drinkSize.value=0; errorDisp.hidden=true;}

function writeOrder(){
  var aj = addMoredrink.selectedIndex;
  var ak = addMoredrink.options;
  var ab = drinkSize.selectedIndex;
  var ac = drinkSize.options;
  var paraText2 = document.createTextNode(orderQuantity2.value+"\ncup/s"+"\n\n"+ac[ab].text+"\n"+ak[aj].text);
  var paraNode2 = document.createElement("p");
  paraNode2.style.cssText="display: inline-block; margin: 2px; padding: 8px 15px; font: bold 15px cursive; border: solid 5px black; border-radius: 10%; background-color: pink; width: 150px;"
  paraNode2.appendChild(paraText2);
  sampContainer.appendChild(paraNode2);
}
