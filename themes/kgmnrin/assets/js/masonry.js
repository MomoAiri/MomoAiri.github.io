"use strict";

function initGrid() {
  document.querySelectorAll('.cards').forEach(function (grid) {
    var msnry = new Masonry(grid, {
      itemSelector: '.card',
    });
    
    if (grid.classList.contains('card-detail-content')) {
      window.aboutMasonry = msnry;
    }
    
    imagesLoaded(grid, function () {
      grid.style.opacity = 1;
      msnry.layout();
    });
    
    grid.querySelectorAll('.toggle-input').forEach(function(toggle) {
      toggle.addEventListener('change', function() {
        setTimeout(function() {
          msnry.layout();
        }, 300);
      });
    });
  });
}

document.addEventListener('DOMContentLoaded', function() {
  initGrid();
});

if (typeof Turbo !== 'undefined') {
  document.addEventListener('turbo:load', initGrid);
}
