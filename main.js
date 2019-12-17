var restaurants = document.getElementsByClassName('restaurants')
var residential = document.getElementsByClassName('residential')
var urban = document.getElementsByClassName('urban')
var corporate = document.getElementsByClassName('corporate')

$('#restaurants-filter').click(
    function() {
        $('.residential, .corporate, .urban').css('display','none')
        $('.restaurants').css('display','unset')
    }
)
$('#residential-filter').click(
    function() {
        $('.residential').css('display','unset')
        $('.restaurants, .corporate, .urban').css('display','none')
    }
)
$('#urban-filter').click(
    function() {
        $('.urban').css('display','unset')
        $('.restaurants, .corporate, .residential').css('display','none')
    }
)
$('#corporate-filer').click(
    function() {
        $('.corporate').css('display','unset')
        $('.restaurants, .residential, .urban').css('display','none')
    }
)
