$().ready(function() {
  $("#inputForm").validate({
    rules: {
      start_x: {
        required: true,
        number: true,
        range: [-50, 50]
      },
      end_x: {
        required: true,
        number: true,
        range: [-50, 50]//,
        //greaterThan: start_x
      },
      start_y: {
        required: true,
        number: true,
        range: [-50, 50]
      },
      end_y: {
        required: true,
        number: true,
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
$(function() {
  //start_x slider
  $("#sx").slider({
    min:-50, max:50, step:1, value:0,
    slide: function (event, ui) {
      $("#start_x").val(ui.value);
      makeTable();
    }
  });
  var initialValue_sx = $("#sx").slider("option", "value");
  $("#start_x").val(initialValue_sx);
  $("#start_x").change(function() {
    var oldVal = $("#sx").slider("option", "value");
    var newVal = $(this).val();
    if (isNaN(newVal) || newVal < -50 || newVal > 50) {
      $("#start_x").val(oldVal);
    } else {
      $("#sx").slider("option", "value", newVal);
    }
    makeTable();
  });
  //god I hate web development
  //if I had known this course was WEB DEV, not (actual, desktop program) GUI
  //I would NOT have taken it in a million years
  //but I guess it's my fault for assuming and not reading the course description carefully
  //because "oh, it's GUI. Of course it's regular, normal GUI because if it was web dev they would have CALLED IT WEB DEV AAAAAAAAAa"
  //...rant over

  //end_x slider
  $("#ex").slider({
    min:-50, max:50, step:1, value:0,
    slide: function (event, ui) {
      $("#end_x").val(ui.value);
      makeTable();
    }
  });
  var initialValue_sx = $("#ex").slider("option", "value");
  $("#end_x").val(initialValue_sx);
  $("#end_x").change(function() {
    var oldVal = $("#ex").slider("option", "value");
    var newVal = $(this).val();
    if (isNaN(newVal) || newVal < -50 || newVal > 50) {
      $("#end_x").val(oldVal);
    } else {
      $("#ex").slider("option", "value", newVal);
    }
    makeTable();
  });

  //start_y slider
  $("#sy").slider({
    min:-50, max:50, step:1, value:0,
    slide: function (event, ui) {
      $("#start_y").val(ui.value);
      makeTable();
    }
  });
  var initialValue_sx = $("#sy").slider("option", "value");
  $("#start_y").val(initialValue_sx);
  $("#start_y").change(function() {
    var oldVal = $("#sy").slider("option", "value");
    var newVal = $(this).val();
    if (isNaN(newVal) || newVal < -50 || newVal > 50) {
      $("#start_y").val(oldVal);
    } else {
      $("#sy").slider("option", "value", newVal);
    }
    makeTable();
  });

  //end_y slider
  $("#ey").slider({
    min:-50, max:50, step:1, value:0,
    slide: function (event, ui) {
      $("#end_y").val(ui.value);
      makeTable();
    }
  });
  var initialValue_sx = $("#ey").slider("option", "value");
  $("#end_y").val(initialValue_sx);
  $("#end_y").change(function() {
    var oldVal = $("#ey").slider("option", "value");
    var newVal = $(this).val();
    if (isNaN(newVal) || newVal < -50 || newVal > 50) {
      $("#end_y").val(oldVal);
    } else {
      $("#ey").slider("option", "value", newVal);
    }
    makeTable();
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
