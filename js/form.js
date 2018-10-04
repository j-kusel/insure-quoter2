$(document).ready(function () {
    var dropdowns = ['month', 'day', 'year', 'gender', 'weight', 'height-ft', 'height-in', 'family', 'income'];
    dropdowns.forEach(function (dd) {
        $(`#${dd} button`).on('click', function () {
            $(`#dropdown-${dd}`).text($(this).text());
        });
    });
});

function scrollToTop() {
    $("html").animate({scrollTop: 0}, "slow");
}
