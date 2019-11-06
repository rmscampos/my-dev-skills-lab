//AAU i dont want to see any skills when the page first loads 
//aau i want to be able to type in a skill and have it added to my list byt clicking a button
//aau i want to be able to remove an individual skill one at a time

let skillList = [];


$(document).ready(function() {
$('#add').click(function() {
    input = $('#text').val();
    $('thead').append('<tr class="skill"> <td><button class = "remove" > X </button>  ' + input + '</td>' + '</tr>')
});
});

//cannot get the styling of the new <tr> to match the existing list



$('.remove').on('click', function() {
    $(this).closest('tr')
    .fadeOut(1000, function () {
        $(this).remove();
    });
});

