(function() {

  function init() {
    var checklist           = document.querySelector('.checklist');
    var checklistLine1      = document.querySelector('#checklist-line-1');
    var checklistLine2      = document.querySelector('#checklist-line-2');
    var checklistLine3      = document.querySelector('#checklist-line-3');
    var checklistLine4      = document.querySelector('#checklist-line-4');
    var checklistCheckmark  = document.querySelector('.checklist-checkmark');

    var computer            = document.querySelector('.computer');
    var computerLine1       = document.querySelector('#computer-line-1');
    var computerLine2       = document.querySelector('#computer-line-2');
    var computerLine3       = document.querySelector('#computer-line-3');
    var computerBlip        = document.querySelector('.computer-blip');

    var cross               = document.querySelector('.cross');
    var crossBorder1        = document.querySelector('#cross-border-1');
    var crossBorder2        = document.querySelector('#cross-border-2');
    var crossCross          = document.querySelector('.cross-cross');

    var svgText1            = document.querySelector('#svg-text-1');
    var svgText2            = document.querySelector('#svg-text-2');
    var svgText3            = document.querySelector('#svg-text-3');

    function animateChecklist() {

      checklist.style.opacity = '1';
      svgText1.style.opacity = '1';

      setTimeout(function() {
          computerBlip.classList.add('computer-blip-animate');
      }, 250);

      setTimeout(function() {
          checklistLine1.classList.add('checklist-animate');
      }, 250);
      setTimeout(function() {
        checklistLine2.classList.add('checklist-animate');
      }, 500);
      setTimeout(function() {
        checklistLine3.classList.add('checklist-animate');
      }, 750);
      setTimeout(function() {
        checklistLine4.classList.add('checklist-animate');
      }, 1000);
      setTimeout(function() {
        checklistCheckmark.classList.add('checklist-animate');
      }, 1400);
    }

    function animateComputer() {
        computer.style.opacity = '1';
        svgText2.style.opacity = '1';

        setTimeout(function() {
            computerLine1.classList.add('computer-lines-animate');
        }, 250);
        setTimeout(function() {
            computerLine2.classList.add('computer-lines-animate');
        }, 1400);
        setTimeout(function() {
            computerLine3.classList.add('computer-lines-animate');
        }, 2800);
    }

    function animateCross() {
      cross.style.opacity = '1';
      svgText3.style.opacity = '1';

      setTimeout(function() {
          crossBorder1.classList.add('cross-border-animate');
      }, 250);
      setTimeout(function() {
          crossBorder2.classList.add('cross-border-animate-backward');
      }, 300);
      setTimeout(function() {
          crossBorder2.classList.add('cross-border-color');
          crossCross.classList.add('cross-cross-color');
      }, 1000);
    }

    setTimeout(animateChecklist, 1000);
    setTimeout(animateComputer, 3500);
    setTimeout(animateCross, 8000);

  }

  init();

})();
