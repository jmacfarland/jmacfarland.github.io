$().ready(function() {
  $("#inputForm").validate({
    rules: {
      start_x: {
        required: true,
        range: [-50, 50]
      },
      end_x: {
        required: true,
        range: [-50, 50]//,
        //greaterThan: start_x
      },
      start_y: {
        required: true,
        range: [-50, 50]
      },
      end_y: {
        required: true,
        range: [-50, 50]//,
        //greaterThan: start_y
      }
    },
    messages: {
      required: "Please enter a number",
      range: "Entry must be between [-50, 50]"
    }
  });
});

function makeTable() {
  var startX = parseInt(document.getElementById("start_x").value);
  var endX = parseInt(document.getElementById("end_x").value);
  var startY = parseInt(document.getElementById("start_y").value);
  var endY = parseInt(document.getElementById("end_y").value);

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

  return false;
}
