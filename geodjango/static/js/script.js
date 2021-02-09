function hideSelf(iD) { 
    var subMenu = document.getElementById(iD);
    subMenu.style.display="none"
}

function onLoad() {
    document.getElementById("menuAss").style.display="none"  
    document.getElementById("menuAnn").style.display="none"  
    document.getElementById("menuFeat").style.display="none"  
    document.getElementById("menuSeg").style.display="none"  
    document.getElementById("menuProf").style.display="none"  
}

function hideMenu(iD) {
    onLoad()
    var subMenu = document.getElementById(iD);
    subMenu.style.display="block"
    var mainMenu = document.getElementById("menuMain");
    mainMenu.style.display = "none"
}


function showMenu(iD) {
    onLoad()
    var mainMenu = document.getElementById("menuMain");
    mainMenu.style.display = "block"
}
