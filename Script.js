

var btn = document.querySelector("#FG-btn");
var userInput = document.querySelector("#FG-input");
var container = document.querySelector(".FG-Container");
var imgCon = document.querySelector(".Koala-MT");

var classic=["Enjoy Classic Taste of Goodness"];
var black=["Sweetness of mango and milktea"];
var matcha=["Minty matcha indulgence"];
var red=["Taste of Sofistication and Royalty"];
var cookies=["Taste of Wonder and creaminess"];


btn.addEventListener("click", printDescription);
userInput.addEventListener("keydown", printDescription);

function printDescription()

{
  this.userInput=printDescription;
  if(userInput.value=="1")
    {
      var paraNode = document.createTextNode(classic+" <3!!!");
      var imgNew = document.createElement("img");
      imgNew.src="thristea.jpg"
      container.replaceChild(paraNode, container.childNodes[1]);
      imgCon.replaceChild(imgNew, imgCon.childNodes[1]);

    }
  else if(userInput.value=="2")
    {
      var paraNode = document.createTextNode(black+" <3!!!");
      var imgNew = document.createElement("img");
      imgNew.src="Mango.jpg"
      container.replaceChild(paraNode, container.childNodes[1]);
      imgCon.replaceChild(imgNew, imgCon.childNodes[1]);
    }
  else if(userInput.value=="3")
    {
      var paraNode = document.createTextNode(matcha+" <3!!!");
      var imgNew = document.createElement("img");
      imgNew.src="MATCHA.jpg"
      container.replaceChild(paraNode, container.childNodes[1]);
      imgCon.replaceChild(imgNew, imgCon.childNodes[1]);
    }
  else if(userInput.value=="4")
    {
      var paraNode = document.createTextNode(red+" <3!!!");
      var imgNew = document.createElement("img");
      imgNew.src="RV.jpg"
      container.replaceChild(paraNode, container.childNodes[1]);
      imgCon.replaceChild(imgNew, imgCon.childNodes[1]);
    }
  else if(userInput.value=="5")
    {
      var paraNode = document.createTextNode(cookies+" <3!!!");
      var imgNew = document.createElement("img");
      imgNew.src="Choco3.jpeg"
      container.replaceChild(paraNode, container.childNodes[1]);
      imgCon.replaceChild(imgNew, imgCon.childNodes[1]);
    }
  }
