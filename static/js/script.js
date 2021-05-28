var x ;
var y;
var currentSegmentID;
var currentFeat;
var currentMarkerID;
var currentTrackID;

var menuMainSet = ["cMenuMain","cMenuN","cMenuNE","cMenuE","cMenuSE","cMenuS","cMenuSW","cMenuW","cMenuNW"];
var menuLayerSet = ["lMenuMain","lMenuN","lMenuNE","lMenuE","lMenuSE","lMenuS","lMenuSW","lMenuW","lMenuNW"];
var menuSegmentSet = ["sMenuMain","sMenuN","sMenuNE","sMenuE","sMenuSE","sMenuS","sMenuSW","sMenuW","sMenuNW"];
var menuFeatureSet = ["fMenuMain","fMenuN","fMenuNE","fMenuE","fMenuSE","fMenuS","fMenuSW","fMenuW","fMenuNW"];
var menuIndicateSet = ["iMenuMain","iMenuN","iMenuNE","iMenuE","iMenuSE","iMenuS","iMenuSW","iMenuW","iMenuNW"];

function hideSelf(iD) { 
    var subMenu = document.getElementById(iD);
    subMenu.style.display="none"
}

function hideMenuMain(){
    document.getElementById("cMenuMain").style.display="none" ;  
    document.getElementById("cMenuN").style.display="none";  
    document.getElementById("cMenuNE").style.display="none" ;  
    document.getElementById("cMenuNW").style.display="none" ;  
    document.getElementById("cMenuE").style.display="none" ;  
    document.getElementById("cMenuW").style.display="none" ;  
    document.getElementById("cMenuS").style.display="none" ;  
    document.getElementById("cMenuSE").style.display="none" ;  
    document.getElementById("cMenuSW").style.display="none";
    // document.getElementById("cMenuN").style.transform="scale(0)";  
    // document.getElementById("cMenuNE").style.transform="scale(0)";   
    // document.getElementById("cMenuNW").style.transform="scale(0)"; 
    // document.getElementById("cMenuE").style.transform="scale(0)"; 
    // document.getElementById("cMenuW").style.transform="scale(0)";  
    // document.getElementById("cMenuS").style.transform="scale(0)";  
    // document.getElementById("cMenuSE").style.transform="scale(0)"; 
    // document.getElementById("cMenuSW").style.transform="scale(0)"; 
    // var ele = document.getElementById("menuMainSet");
    // ele.classList.add("shrink");
}

function showMenuMain(){
    document.getElementById("cMenuMain").style.display="block" ;  
    document.getElementById("cMenuN").style.display="block";  
    document.getElementById("cMenuNE").style.display="block" ; 
    document.getElementById("cMenuNW").style.display="block" ;
    document.getElementById("cMenuE").style.display="block" ;  
    document.getElementById("cMenuW").style.display="block" ; 
    document.getElementById("cMenuS").style.display="block" ; 
    document.getElementById("cMenuSE").style.display="block" ;
    document.getElementById("cMenuSW").style.display="block";
    // document.getElementById("cMenuN").style.transform="scale(1)";  
    // document.getElementById("cMenuNE").style.transform="scale(1)";   
    // document.getElementById("cMenuNW").style.transform="scale(1)"; 
    // document.getElementById("cMenuE").style.transform="scale(1)"; 
    // document.getElementById("cMenuW").style.transform="scale(1)";  
    // document.getElementById("cMenuS").style.transform="scale(1)";  
    // document.getElementById("cMenuSE").style.transform="scale(1)"; 
    // document.getElementById("cMenuSW").style.transform="scale(1)"; 
    // var ele = document.getElementById("menuMainSet");
    // ele.classList.remove("shrink");
}
function hideLayerMenu(){
    document.getElementById("menuLayerSet").style.display="none";
};
function hideSegmentMenu(){
    document.getElementById("menuSegmentSet").style.display="none";
};
function hideFeatureMenu(){
    document.getElementById("menuFeatureSet").style.display="none";
};
function hideIndicateMenu(){
    document.getElementById("menuIndicateSet").style.display="none";
};
function hideSegmentEditMenu(){
    document.getElementById("segmentEditMenu").style.display="none";
};
function hideMarkerEditMenu(){
    document.getElementById("markerEditMenu").style.display="none";
};
function hideGridMenu(){
    document.getElementById("gridOptions").style.display="none";
};

function hideAssignMenu(){
    document.getElementById("assignSidebar").style.display="none";
    document.getElementById("assignToggle").innerHTML = ">";
    document.getElementById("assignToggle").style.left = "0%";
};
function showAssignMenu(){
    hideAssignMenu();
    document.getElementById("assignSidebar").style.display="block";
    document.getElementById("assignToggle").innerHTML = "<";
    document.getElementById("assignToggle").style.left = "20%";
};
function showSegmentEditMenu(){
    hideSegmentEditMenu();
    document.getElementById("segmentEditMenu").style.display="block";
    document.getElementById("segName").value = currentSegmentID;
};

function showMarkerEditMenu(){
    document.getElementById("markerEditMenu").style.display="block";
    document.getElementById("markerName").value = currentMarkerID;
};
function showGridMenu(){
    hideGridMenu();
    document.getElementById("gridOptions").style.display="block";
    document.getElementById("gridSize").value = gridsize;
};

function toggleAssignMenu(){
    var state = document.getElementById("assignSidebar").style.display;
    if (state == "block"){
        hideAssignMenu();
    }else{
        showAssignMenu();
    };
};
function layerMenuBack(){
    document.getElementById("menuLayerSet").style.display="none";
    openMenuMain()
};
function segmentMenuBack(){
    document.getElementById("menuSegmentSet").style.display="none";
    openMenuMain()
};
function featureMenuBack(){
    document.getElementById("menuFeatureSet").style.display="none";
    openMenuMain()
};
function indicateMenuBack(){
    document.getElementById("menuIndicateSet").style.display="none";
    openMenuMain()
};
function onLoad() {
    // var ele = document.getElementById("menuMainSet");
    // ele.classList.add("shrink");
    hideIndicateMenu();
    hideAssignMenu();
    hideLayerMenu();
    hideGridMenu();
    hideSegmentMenu();
    hideMenuMain(); 
    hideFeatureMenu(); 
    hideMarkerEditMenu();
    document.getElementById("menuMinMap").style.display="none" ;   
};


// function hideMenu(iD) {
//     subMenu.style.display="block"
// }


// function showMenu(iD) {
//     subMenu.style.display="block"
// }

document.onmousemove = function(e){
   x= e.screenX;
   y= e.screenY; 
   }


/*!
* long-press-event - v2.4.2
* Pure JavaScript long-press-event
* https://github.com/john-doherty/long-press-event
* @author John Doherty <www.johndoherty.info>
* @license MIT
*/
!function(e,t){"use strict";var n=null,a="ontouchstart"in e||navigator.MaxTouchPoints>0||navigator.msMaxTouchPoints>0,i=a?"touchstart":"mousedown",o=a?"touchend":"mouseup",m=a?"touchmove":"mousemove",r=0,u=0,s=10,c=10;function l(e){var n;d(),n=e,e=a&&n.touches&&n.touches[0]?n.touches[0]:n,this.dispatchEvent(new CustomEvent("long-press",{bubbles:!0,cancelable:!0,detail:{clientX:e.clientX,clientY:e.clientY},clientX:e.clientX,clientY:e.clientY,offsetX:e.offsetX,offsetY:e.offsetY,pageX:e.pageX,pageY:e.pageY,screenX:e.screenX,screenY:e.screenY}))||t.addEventListener("click",function e(n){t.removeEventListener("click",e,!0),function(e){e.stopImmediatePropagation(),e.preventDefault(),e.stopPropagation()}(n)},!0)}function v(a){d(a);var i=a.target,o=parseInt(function(e,n,a){for(;e&&e!==t.documentElement;){var i=e.getAttribute(n);if(i)return i;e=e.parentNode}return a}(i,"data-long-press-delay","1500"),10);n=function(t,n){if(!(e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame&&e.mozCancelRequestAnimationFrame||e.oRequestAnimationFrame||e.msRequestAnimationFrame))return e.setTimeout(t,n);var a=(new Date).getTime(),i={},o=function(){(new Date).getTime()-a>=n?t.call():i.value=requestAnimFrame(o)};return i.value=requestAnimFrame(o),i}(l.bind(i,a),o)}function d(t){var a;(a=n)&&(e.cancelAnimationFrame?e.cancelAnimationFrame(a.value):e.webkitCancelAnimationFrame?e.webkitCancelAnimationFrame(a.value):e.webkitCancelRequestAnimationFrame?e.webkitCancelRequestAnimationFrame(a.value):e.mozCancelRequestAnimationFrame?e.mozCancelRequestAnimationFrame(a.value):e.oCancelRequestAnimationFrame?e.oCancelRequestAnimationFrame(a.value):e.msCancelRequestAnimationFrame?e.msCancelRequestAnimationFrame(a.value):clearTimeout(a)),n=null}"function"!=typeof e.CustomEvent&&(e.CustomEvent=function(e,n){n=n||{bubbles:!1,cancelable:!1,detail:void 0};var a=t.createEvent("CustomEvent");return a.initCustomEvent(e,n.bubbles,n.cancelable,n.detail),a},e.CustomEvent.prototype=e.Event.prototype),e.requestAnimFrame=e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame||e.msRequestAnimationFrame||function(t){e.setTimeout(t,1e3/60)},t.addEventListener(o,d,!0),t.addEventListener(m,function(e){var t=Math.abs(r-e.clientX),n=Math.abs(u-e.clientY);(t>=s||n>=c)&&d()},!0),t.addEventListener("wheel",d,!0),t.addEventListener("scroll",d,!0),t.addEventListener(i,function(e){r=e.clientX,u=e.clientY,v(e)},!0)}(window,document);
 /*!
*/


document.addEventListener('long-press', function(e) {
   console.log(e.target);
    openMenuMain();
 });

function openMenuMain(){   
    console.log(x);
    console.log(y);
 
    for (i = 0; i < menuMainSet.length; i++){
         var cMenu = document.getElementById(menuMainSet[i]);
         cMenu.style.display="block";
         if (i==0){
             cMenu.style.top = (y-130)+'px';
             cMenu.style.left = (x-60)+'px';
         }else if(i==1){
             cMenu.style.top = (y-115-160)+'px';
             cMenu.style.left = (x-50)+'px';
         }else if(i==2){
             cMenu.style.top = (y-115-120)+'px';
             cMenu.style.left = (x-50+120)+'px';
         }
         else if(i==3){
             cMenu.style.top = (y-115)+'px';
             cMenu.style.left = (x-50+160)+'px';
         }else if(i==4){
             cMenu.style.top = (y-115+120)+'px';
             cMenu.style.left = (x-50+120)+'px';
         }else if(i==5){
             cMenu.style.top = (y-115+160)+'px';
             cMenu.style.left = (x-50)+'px';
         }else if(i==6){
             cMenu.style.top = (y-115+120)+'px';
             cMenu.style.left = (x-50-120)+'px';
         }
         else if(i==7){
             cMenu.style.top = (y-115)+'px';
             cMenu.style.left = (x-50-160)+'px';
         }else {
             cMenu.style.top = (y-115-120)+'px';
             cMenu.style.left = (x-50-120)+'px';
         }    
         var cMenu = document.getElementById(menuMainSet[i]);
         console.log(cMenu);
 
    }
     showMenuMain();
}
 function openMenuLayers(){
    hideMenuMain();
    document.getElementById("menuLayerSet").style.display="block";
    for (i = 0; i < menuLayerSet.length; i++){
        var cMenu = document.getElementById(menuLayerSet[i]);
        if (i==0){
            cMenu.style.top = (y-130)+'px';
            cMenu.style.left = (x-60)+'px';
        }else if(i==1){
            cMenu.style.top = (y-115-160)+'px';
            cMenu.style.left = (x-50)+'px';
        }else if(i==2){
            cMenu.style.top = (y-115-120)+'px';
            cMenu.style.left = (x-50+120)+'px';
        }
        else if(i==3){
            cMenu.style.top = (y-115)+'px';
            cMenu.style.left = (x-50+160)+'px';
        }else if(i==4){
            cMenu.style.top = (y-115+120)+'px';
            cMenu.style.left = (x-50+120)+'px';
        }else if(i==5){
            cMenu.style.top = (y-115+160)+'px';
            cMenu.style.left = (x-50)+'px';
        }else if(i==6){
            cMenu.style.top = (y-115+120)+'px';
            cMenu.style.left = (x-50-120)+'px';
        }
        else if(i==7){
            cMenu.style.top = (y-115)+'px';
            cMenu.style.left = (x-50-160)+'px';
        }else {
            cMenu.style.top = (y-115-120)+'px';
            cMenu.style.left = (x-50-120)+'px';
        }    
        var cMenu = document.getElementById(menuMainSet[i]);
        console.log(cMenu);

   }
}

function openMenuSegment(){
    hideMenuMain();
    document.getElementById("menuSegmentSet").style.display="block";
    for (i = 0; i < menuLayerSet.length; i++){
        var cMenu = document.getElementById(menuSegmentSet[i]);
        if (i==0){
            cMenu.style.top = (y-130)+'px';
            cMenu.style.left = (x-60)+'px';
        }else if(i==1){
            cMenu.style.top = (y-115-160)+'px';
            cMenu.style.left = (x-50)+'px';
        }else if(i==2){
            cMenu.style.top = (y-115-120)+'px';
            cMenu.style.left = (x-50+120)+'px';
        }
        else if(i==3){
            cMenu.style.top = (y-115)+'px';
            cMenu.style.left = (x-50+160)+'px';
        }else if(i==4){
            cMenu.style.top = (y-115+120)+'px';
            cMenu.style.left = (x-50+120)+'px';
        }else if(i==5){
            cMenu.style.top = (y-115+160)+'px';
            cMenu.style.left = (x-50)+'px';
        }else if(i==6){
            cMenu.style.top = (y-115+120)+'px';
            cMenu.style.left = (x-50-120)+'px';
        }
        else if(i==7){
            cMenu.style.top = (y-115)+'px';
            cMenu.style.left = (x-50-160)+'px';
        }else {
            cMenu.style.top = (y-115-120)+'px';
            cMenu.style.left = (x-50-120)+'px';
        }    
        var cMenu = document.getElementById(menuMainSet[i]);
        console.log(cMenu);

   }
}

function openMenuFeature(){
    hideMenuMain();
    document.getElementById("menuFeatureSet").style.display="block";
    for (i = 0; i < menuLayerSet.length; i++){
        var cMenu = document.getElementById(menuFeatureSet[i]);
        if (i==0){
            cMenu.style.top = (y-130)+'px';
            cMenu.style.left = (x-60)+'px';
        }else if(i==1){
            cMenu.style.top = (y-115-160)+'px';
            cMenu.style.left = (x-50)+'px';
        }else if(i==2){
            cMenu.style.top = (y-115-120)+'px';
            cMenu.style.left = (x-50+120)+'px';
        }
        else if(i==3){
            cMenu.style.top = (y-115)+'px';
            cMenu.style.left = (x-50+160)+'px';
        }else if(i==4){
            cMenu.style.top = (y-115+120)+'px';
            cMenu.style.left = (x-50+120)+'px';
        }else if(i==5){
            cMenu.style.top = (y-115+160)+'px';
            cMenu.style.left = (x-50)+'px';
        }else if(i==6){
            cMenu.style.top = (y-115+120)+'px';
            cMenu.style.left = (x-50-120)+'px';
        }
        else if(i==7){
            cMenu.style.top = (y-115)+'px';
            cMenu.style.left = (x-50-160)+'px';
        }else {
            cMenu.style.top = (y-115-120)+'px';
            cMenu.style.left = (x-50-120)+'px';
        }    
        var cMenu = document.getElementById(menuMainSet[i]);
        console.log(cMenu);

   }
}
function openMenuLayers(){
    hideMenuMain();
    document.getElementById("menuLayerSet").style.display="block";
    for (i = 0; i < menuLayerSet.length; i++){
        var cMenu = document.getElementById(menuLayerSet[i]);
        if (i==0){
            cMenu.style.top = (y-130)+'px';
            cMenu.style.left = (x-60)+'px';
        }else if(i==1){
            cMenu.style.top = (y-115-160)+'px';
            cMenu.style.left = (x-50)+'px';
        }else if(i==2){
            cMenu.style.top = (y-115-120)+'px';
            cMenu.style.left = (x-50+120)+'px';
        }
        else if(i==3){
            cMenu.style.top = (y-115)+'px';
            cMenu.style.left = (x-50+160)+'px';
        }else if(i==4){
            cMenu.style.top = (y-115+120)+'px';
            cMenu.style.left = (x-50+120)+'px';
        }else if(i==5){
            cMenu.style.top = (y-115+160)+'px';
            cMenu.style.left = (x-50)+'px';
        }else if(i==6){
            cMenu.style.top = (y-115+120)+'px';
            cMenu.style.left = (x-50-120)+'px';
        }
        else if(i==7){
            cMenu.style.top = (y-115)+'px';
            cMenu.style.left = (x-50-160)+'px';
        }else {
            cMenu.style.top = (y-115-120)+'px';
            cMenu.style.left = (x-50-120)+'px';
        }    
        var cMenu = document.getElementById(menuMainSet[i]);
        console.log(cMenu);

   }
}

function openMenuIndicate(){
    hideMenuMain();
    document.getElementById("menuIndicateSet").style.display="block";
    for (i = 0; i < menuLayerSet.length; i++){
        var cMenu = document.getElementById(menuIndicateSet[i]);
        if (i==0){
            cMenu.style.top = (y-130)+'px';
            cMenu.style.left = (x-60)+'px';
        }else if(i==1){
            cMenu.style.top = (y-115-160)+'px';
            cMenu.style.left = (x-50)+'px';
        }else if(i==2){
            cMenu.style.top = (y-115-120)+'px';
            cMenu.style.left = (x-50+120)+'px';
        }
        else if(i==3){
            cMenu.style.top = (y-115)+'px';
            cMenu.style.left = (x-50+160)+'px';
        }else if(i==4){
            cMenu.style.top = (y-115+120)+'px';
            cMenu.style.left = (x-50+120)+'px';
        }else if(i==5){
            cMenu.style.top = (y-115+160)+'px';
            cMenu.style.left = (x-50)+'px';
        }else if(i==6){
            cMenu.style.top = (y-115+120)+'px';
            cMenu.style.left = (x-50-120)+'px';
        }
        else if(i==7){
            cMenu.style.top = (y-115)+'px';
            cMenu.style.left = (x-50-160)+'px';
        }else {
            cMenu.style.top = (y-115-120)+'px';
            cMenu.style.left = (x-50-120)+'px';
        }    
        var cMenu = document.getElementById(menuMainSet[i]);
        console.log(cMenu);

   }
}

////////////////////////////////////// resource management stuff //////////////////////////////
var resourceList = [];
var activeBox;
var body =document.getElementById("assignHelper");

function addResource(){
    var newResourceName = document.getElementById("resourceName").value;
    var newResourceType = document.getElementById("resourceType").value;
    resourceList.push([newResourceName,newResourceType,"not assigned","idle","not tracked",""]);
    updateResourceList();
};

function updateResourceList(){
    boxArea.innerHTML = '';
    resourceList.forEach(x => genNewAssignEntry(x));
};

var boxArea = document.getElementById("resourceList");
function genNewAssignEntry(resourceData){
    for (i=0; i<names.length;i++){
        if(names[i]==resourceData[0]){
        resourceData[3]=stats[i];
        resourceData[4]=message[i];
        };
    };
    var box = document.createElement("div");
    box.className = "assignBox";
    box.id = resourceData[0];
    box.draggable = true;

    box.onmouseover = function() {setActiveBox(this)};
    
    box.ondragstart = function() {createBoxTarget()};
    console.log(box);
    if (resourceData[5] != ""){
        console.log('assignment made');
        resourceData[2] = resourceData[5].getId();
    };
    box.innerHTML=resourceData[0].concat("<button id='assignDelete' class='assignDelete' onclick='deleteBox(this)' style='align:right'>x</button>","<br>",resourceData[1],"<br>",resourceData[2],"<br>",resourceData[3],"<br>",resourceData[4]);
    boxArea.appendChild(box);
};

function setActiveBox(boxSel){
    activeBox = boxSel;
};

function deleteBox(boxSel){
    var box = boxSel.parentElement;
    for (i=0;i<resourceList.length;i++){
        if (box.id == (resourceList[i])[0]){
            resourceList.splice(i,1);
        };
    };
    box.remove();
    updateResourceList();
};

function createBoxTarget(){
    var target = document.createElement("div");
    target.style.width = "100%";
    target.style.height = "100%";
    target.style.background = "#ffffff66";
    //target.style.zIndex = "3000";
    target.ondragover= function() {dropabble(event)};
    target.ondrop = function() {dragAssign(this,event)};
    console.log(target);
    body.style.display="block";
    body.appendChild(target);
};

function dragAssign(self,e){
    e.preventDefault();
    var hoverArray = map.getFeaturesAtPixel([e.clientX,e.clientY]);
    var segArray = segColl.getArray();
    segArray.forEach(feature => checkFeat(feature,hoverArray));
    body.style.display="none";
    self.remove();
    console.log(activeBox.id);
    if (hovering==true){
        for (i=0;i<resourceList.length;i++){
            if (activeBox.id == (resourceList[i])[0]){
                (resourceList[i])[5] = selected;
            };
        };
    };
    updateResourceList();
};

function dropabble(e) {
    e.preventDefault();
};

///////////////////////// ajax for tracking updates/////////////////////////
var AjaxT = document.getElementById("AjaxT");
var csrf = $("input[name=csrfmiddlewaretoken]").val();
$(document).ready(function(){     
    $(".AjaxT").click(function(){
        $.ajax({
            url: '',
            type: 'get',
            data: {
                info: 'test hello'
            },
            success: function(response){
                console.log(response.data);
                buildTrackSet2(response.data);
            }
        });
    });
});

var updateTimer;
updateTimer = setInterval(function(){ AjaxT.click(); }, 60000);
 