/* The dragging code for '.draggable' from the demo above
 * applies to this demo as well so it doesn't have to be repeated. */
 interact('.draggable')
   .draggable({
     // enable inertial throwing
     inertia: true,
     // keep the element within the area of it's parent
     modifiers: [
       interact.modifiers.restrictRect({
         restriction: '.row',
         endOnly: true
       })
     ],
     // enable autoScroll
     autoScroll: true,

     // call this function on every dragmove event
     onmove: dragMoveListener,
     // call this function on every dragend event
     onend: function (event) {

     }
   })
// enable draggables to be dropped into this
interact('.dropzone').dropzone({
  // only accept elements matching this CSS selector
  accept: '#drag-1',
  // Require a 75% element overlap for a drop to be possible
  overlap: 0.20,

  // listen for drop related events:

  ondropactivate: function (event) {
  },
  ondragenter: function (event) {
  },
  ondragleave: function (event) {
  },
  ondrop: function (event) {
  },
  ondropdeactivate: function (event) {
  }
})

function dragMoveListener (event) {
  var target = event.target
  // keep the dragged position in the data-x/data-y attributes
  var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
  var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

  // translate the element
  target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)'

  // update the posiion attributes
  target.setAttribute('data-x', x)
  target.setAttribute('data-y', y)
}

window.dragMoveListener = dragMoveListener
