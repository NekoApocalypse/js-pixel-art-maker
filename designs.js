//variables to get canvas element,height,width
const canvas = $('#pixel-canvas')
let hsize = $('#input-height')
let wsize = $('#input-width')
let color = $("#colorPicker");
let mouse_down = false;

$(document).ready(function() {
  makeGrid(10, 10);
});

$(document).mousedown(function() {
  mouse_down = true;
})
.mouseup(function() {
  mouse_down = false;
});

$('#input-submit').click(function(event) {
  event.preventDefault();
  makeGrid(hsize.val(), wsize.val());
});

function makeGrid(height, width) {
  let canvas_dom = canvas.get(0);
  canvas_dom.innerHTML = '';
  for (let i=0; i<height; i++) {
    let row = canvas_dom.insertRow(i);
    for (let j=0; j<width; j++) {
      let cell = row.insertCell(j);
      $(cell).mouseover(function() {
        if (mouse_down) {
          $(this).css('background-color', color.val());
        }
      })
      .mousedown(function() {
        $(this).css('background-color', color.val());
      })
      .on('drag', function(event) {
        event.preventDefault();
      });
    }
  }
  $('.canvas').find().on('drag', function(event) {
    event.preventDefault();
  });
}
