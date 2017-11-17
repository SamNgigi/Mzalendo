alert("This is a mock-up of how Mzalendo would work!");
alert("Coming Soon though Fam! :)");

// TODO it would be cool if we could be able to flag certain phrases in reports that would be divisive.
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

   function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


  //var live; live
  setInterval(function(){
    var live = getRandomInt(10, 30);
    $(".dashtext-1").text(live);
    // console.log(live)
  },330);
//monthly
  setInterval(function(){
    var live = getRandomInt(100, 600);
    $(".dashtext-2").text(live);
    // console.log(live)
  },9000);
// weekly
  setInterval(function(){
    var live = getRandomInt(600, 800);
    $(".dashtext-3").text(live);
    // console.log(live)
  },5000);
//daily
  setInterval(function(){
    var live = getRandomInt(20, 50);
    $(".dashtext-4").text(live);
    // console.log(live)
  },3000);
// TODO: loop for report
  setInterval(function(){
    var live = getRandomInt(800, 100500);
    $(".d-report").text(live);
    // console.log(live)
  },500);

  setInterval(function(){
    var live = getRandomInt(100, 1000);
    $(".one").text(live);
    // console.log(live)
  },3000);

  setInterval(function(){
    var live = getRandomInt(1000, 20000);
    $(".two").text(live);
    // console.log(live)
  },7000);

});
