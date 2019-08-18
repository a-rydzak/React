// Get the modal
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

$(document).ready( function () {
    $('#table_id').DataTable();
} );

$(document).ready(function() {
    var table = $('#table_id').DataTable();
     
    $('#table_id tbody').on('click', 'tr', function () {
        var data = table.row( this ).data();
        // alert( 'You clicked on '+data[0]+'\'s row' );
         modal.style.display = "block";
         var str = "Data is: "+data[0] + " "+ data[1];
         $('#modalText').text(str)
    } );
} );


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// -------------------------------------------------------- start of test materials

// $('#button_html').click(function(){
//   $.ajax({
//           url: '/ajax/all/html', /* Where should this go? */
//           success: function(serverResponse) {  /* What code should we run when the server responds? */
//             console.log("Received this from server:", serverResponse)
//             $('#placeholder1').html(serverResponse)
//           }
//       });
//   });


// def all_html(request):
    
//     return render(request, 'ajaxexample/partial.html', { "users": User.objects.all() })

// <ul>
//   {% for user in users %}
//   <li>{{ user.first_name }}</li>
//   {% endfor %}
// </ul>