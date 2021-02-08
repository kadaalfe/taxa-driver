var id = getParameterByName("id");
var getUrl = "https://taxa-reservation-staging.herokuapp.com/?id="+id+"&access_token=64bca3d3295f58d6234db35bb91dd446a331bf18";

var request = new XMLHttpRequest();
request.onreadystatechange = function() {
  if (request.readyState === 4) {
    if (request.status === 200) {
      var reservation = JSON.parse(request.response);
      document.getElementById('rId').innerHTML = reservation.id;
      document.getElementById('rName').innerHTML = reservation.client;
      document.getElementById('rCell').innerHTML = reservation.mobile;
      document.getElementById('rPhone').innerHTML = reservation.phone;
      document.getElementById('rAddress').innerHTML = reservation.address+" - "+"<a href='https://maps.google.com.mx?q="+reservation.location+"' target='_blank'>"+reservation.area+"</a>";
      document.getElementById('rCapacity').innerHTML = reservation.capacity;
      document.getElementById('rPrice').innerHTML = reservation.price;
      setDateValues(reservation.date);
      confirm(id);
    } else {
      document.getElementById('error').innetHTLM = "Error al obtener la reserva";
    }
  }
};
request.open("GET", getUrl , true);
request.send(null);

function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
  results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function setDateValues(date) {
  var sdate = new Date(date);
  var monthNames = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];

  var sday = sdate.getUTCDate();
  var smonth = monthNames[sdate.getUTCMonth()];
  var smonthplus;
  if (smonth.length == 1) { smonthplus = "0" + smonth; } else {smonthplus = smonth;}
  var syearplus = sdate.getUTCFullYear();
  var syear = syearplus.toString().replace("20","");

  var shours = sdate.getUTCHours();
  shours = shours.toString();
  if (shours.length == 1) { shours = "0" + shours; }

  var sminutes = sdate.getUTCMinutes();
  sminutes = sminutes.toString();

  if (sminutes.length == 1) { sminutes = "0" +sminutes; }
  document.getElementById('rDate').innerHTML = sday + " " + smonth + ", " + syearplus;
  document.getElementById('rTime').innerHTML = shours + ":" + sminutes;
}

function confirm(id) {
  var updateUrl = "https://taxa-assignment-staging.herokuapp.com";
  var parameters = "id="+id+"&status=confirmed";
  var request = new XMLHttpRequest();

  request.onreadystatechange = function() {
    if (request.readyState === 4) {
      if (request.status === 204) {
        console.log("Reserva confirmada");
      } else {
        document.getElementById('error').innetHTLM = "Error al confirmar la reserva";
      }
    }
  };
  request.open("PUT", updateUrl , true);
  request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  request.send(parameters);
}
