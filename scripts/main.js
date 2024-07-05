// Old Style wirting:
// $(document).ready(function () {
//     $('#button').on('click', function () {
//         alert('Hello!')
//     });
// });

// $(function() {
//     $('#button').on('click', function () {
//         alert('Another method!')
//     });
// });

// Selectors

// Element's tag
// $('h1').addClass('selected');
// Class
// $('.inner').addClass('selected');
// Add all childern elements class = 'selected'
// $('.block').children().addClass('selected');
// Get element with tag = 'li' with id = 'second-list-item' and 
// put class = 'selected' parent element with tag = 'ul'
// $('li#second-list-item').closest('ul').addClass('selected');
// Find in element with class = 'block' element with tag = 'h4'
// put class = 'selected'
// $('.block').find('h4').addClass('selected');

// Events

// $('#button-1').click();

// If click on button with id = 'button-1' - 
// element with id = 'top-header' change (add/remove)
// class 'pinkColor' that in css styles
// Use in static page
// If we have some dinamic elements on the page
// that maybe AJAX load
// this method don't work 
// $('#button-1').click(function() {
//     $('#top-header').toggleClass('pinkColor');
// });

// This is 'best practices' method
// $('#button-1').on('dblclick', function() {
//     $('#top-header').toggleClass('pinkColor');
// });

$('#button-1').on('click', function() {
    $('#top-header').toggleClass('pinkColor');
});

// Could work together
$('#testArea').on('mouseenter', function () {
    $('#testArea').toggleClass('orangeBg');
});

$('#testArea').on('mouseleave', function () {
    //$('#testArea').toggleClass('orangeBg');
    $(this).toggleClass('orangeBg');
});

// Also could work together

$('#inputName').on('focus', function () {
    $(this).addClass('focus');
    // $(this).toggleClass('orangeBg');
});

$('#inputName').on('blur', function () {
    $(this).removeClass('focus');
});

// $('#inputName').on('change', function () {
//     // alert('Hello!')
//     // $('#textHolder').text($('#inputName').val());
//     $('#textHolder').text($(this).val());
// });

$('#inputName').on('keyup', function () {
    $('#textHolder').text($(this).val());
});

// Don't work (

// $('#inputName').on('keyup', function (event) {
//     if (event.which = 27) {
//         $('#textHolder').text('');
//     }
// });

// space = 32 )

// $('#inputName').on('keyup', function (event) {
//     if (event.which = 32) {
//         $('#textHolder').text('');
//     }
// });

// Animation

// animate ({css props}, duration in ms)
$('#customWidth').on('click', function () {
    $('#testBox').animate({'width': '200px'}, 4000);
});

$('#customOpacity').on('click', function () {
    $('#testBox').animate({'opacity': '0'}, 1000);
});

$('#hide').on('click', function () {
    $('#testBox').hide(1000);
});

$('#show').on('click', function () {
    $('#testBox').show('slow');
});

// Fade - show and hide some element

$('#fadeOut').on('click', function () {
    $('#testBox').fadeOut('1000');
});

$('#fadeIn').on('click', function () {
    $('#testBox').fadeIn('1000');
});

// Slide

$('#slideUp').on('click', function () {
    $('#testBox').slideUp();
});

$('#slideDown').on('click', function () {
    $('#testBox').slideDown();
});

$('#slideToggle').on('click', function () {
    $('#testBox').slideToggle('1000');
});

// Form for summ two integers

// From previous lesson
$('#numberOne').on('focus', function () {
    $(this).addClass('focus');
});

$('#numberOne').on('blur', function () {
    $(this).removeClass('focus');
});

$('#numberTwo').on('focus', function () {
    $(this).addClass('focus');
});

$('#numberTwo').on('blur', function () {
    $(this).removeClass('focus');
});

$(function() {
    $('#formSum').on('submit', function (event) {
        event.preventDefault();

        var numberOne,
            numberTwo,
            sum;

        numberOne = $('#numberOne').val();
        numberTwo = $('#numberTwo').val();   

        // Don't work (
        if ( isNaN(numberOne)) {
            numberOne = 0;
        };

        if ( isNaN(numberTwo)) {
            numberTwo = 0;
        }

        sum = parseInt(numberOne) + parseInt(numberTwo);
        $('#sumResult').text(sum);
    });
});

// Image and color

// 09 - 1-54