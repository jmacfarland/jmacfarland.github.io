function makeTable() {
  var startX = parseInt(document.getElementById("start_x").value);
  var endX = parseInt(document.getElementById("end_x").value);
  var startY = parseInt(document.getElementById("start_y").value);
  var endY = parseInt(document.getElementById("end_y").value);

  /* validate numbers? if yes then continue */
  if (validateNum(startX) && validateNum(endX) && validateNum(startY) && validateNum(endY) && validateRange(startX, endX) && validateRange(startY, endY)) {
    var xRange = startX + "-" + endX
    var yRange = startY + "-" + endY
    var text = "xRange: " + xRange + "<br>yRange: "+ yRange;

    /* show the range of numbers selected */
    document.getElementById("print_num").innerHTML = text;

    var table = document.getElementById("mult");
    //remove any previous table
    table.innerHTML="";

    //build the new table
    for (var i = startX-1; i <= endX; i++){
      var row = table.insertRow();
      for (var j = startY-1; j <= endY; j++) {
        var td = row.insertCell();
        if (i == startX-1) {
          if (j != startY-1) {
            td.appendChild(document.createTextNode(String(j)));
          }else{
            td.appendChild(document.createTextNode(""));
          }
        } else if (j == startY-1) {
          if (i != startX-1) {
            td.appendChild(document.createTextNode(String(i)));
          }else{
            td.appendChild(document.createTextNode(""));
          }
        } else {
          td.appendChild(document.createTextNode(String(i*j)));
        }
        td.style.border = '1px solid black';

      }
    }
  } else {
    //still remove existing table
    var table = document.getElementById("mult");
    table.innerHTML="";
  }

  return false;

}

function validateRange(start, end) {
  //make sure range is ok
  if (start > end) {
    document.getElementById("print_num").innerHTML = "Invalid input! Starts need to be less than corresponding ends!";
    return false;
  } else {
    return true;
  }
}

function validateNum(num) {
  //make sure inputs are numbers
  if (isNaN(num) || num <-50 || num >50) {
    document.getElementById("print_num").innerHTML = "Invalid input! Needs to be a number in range -50 to 50";
    return false;
  } else {
    return true;
  }
}
