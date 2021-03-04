document.domain = "google.com"
console.log("Inside post.js");
//var _as = window.open("https://research.alpha-sense.com/dashboard", "_self")
var _as = window.open("https://google.com","_self");

setTimeout(function (){
    var div = _as.document.getElementById("toolbar-search-box");
    console.log("DIV loaded");
}, 7000)

/*_as.document.getElementById("")

_as.addEventListener('load', (event) => {
    console.log("Loaded");
    alert("loaded");
})*/

/*_as.onload = function(){
    console.log("loaded ");
    alert("laoded");
};*/

//_as.onload();