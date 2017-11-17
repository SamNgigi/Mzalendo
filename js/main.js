//Modal
$('#report').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text('New message to ' + recipient)
  modal.find('.modal-body input').val(recipient)
})
//Live Analytics
$(document).ready(function() {
   // Stuff to do as soon as the DOM is ready
   var messageReport = document.getElementById('message-report');
   var reportSubmit = document.getElementById('reportSubmit');

   function submitClick() {
     alert("Submit is Working");
   }
   $(".dashtext-1").text("12");

});
