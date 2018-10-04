var currentForm = 0;
var currentCard = 0;

$(document).ready(function() {
    $($('div.question:first')[0]).fadeIn(1000);
    $('#heading').fadeIn(1000);
    $('#quoteform').submit(function(e) {
        e.preventDefault();
        var data = {};
        $('#quoteform').serializeArray().map(function (input) {
            console.log(input);
            data[input.name] = input.value;
        });
        
        console.log(data);
    });

    $($('.carousel:first')[0]).fadeIn(1000);
    setInterval(changeCard, 3000);

});

function changeCard() {
    var cards = $('.panel1').find('.carousel');
    $(cards[currentCard % 3]).fadeOut(300)
        .promise()
        .done(function () {
            currentCard += 1;
            $(cards[currentCard % 3]).fadeIn(300);
        });
}

function changeForm() {
    var questions = $('form').find('.question');
    $(questions[currentForm]).fadeOut(300)
        .promise()
        .done(function () {
            currentForm += 1;
            $(questions[currentForm]).fadeIn(300);
        });
}

function topScroll() {
    /*document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0; 
    */
    $('html, body').animate({
        scrollTop: 0
    }, 500);
}
