var Lat = document.getElementById("Lat");
var Lon = document.getElementById("Lon");
var ID = document.getElementById("ID");
var Ajax = document.getElementById("ajax");

$(document).ready(function(){ 
    var csrf = $("input[name=csrfmiddlewaretoken]").val();
    temp = document.getElementById("ID").value;
    console.log(temp);
    $("#ajax").click(function(){
        getLocation()
        $.ajax({
            url:'',
            data: {ID: ID.value,
                Lon: Lon.value,
                Lat: Lat.value,
                csrfmiddlewaretoken: csrf,
            },
            type: 'post',
            success: function(response){
                console.log('track succesfull')
            }
        })
    });

});

var checkbox = document.querySelector("input[name=trackOn]");
var trackTimer;
checkbox.addEventListener('change', function() {
  if (this.checked) {
    Ajax.click()
    trackTimer = setInterval(function(){ Ajax.click(); }, 60000);
  } else {
    Ajax.click()
    clearInterval(trackTimer);
  }
});


var Lat = document.getElementById("Lat");
var Lon = document.getElementById("Lon");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    Lat.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  Lat.value = position.coords.latitude;
  Lon.value = position.coords.longitude;
}
