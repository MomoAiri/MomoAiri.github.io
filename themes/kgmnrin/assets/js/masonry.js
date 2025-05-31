"use strict";

function initGrid() {
  document.querySelectorAll('.grid-container').forEach(function (grid) {
    var msnry = new Masonry(grid, {
      itemSelector: '.grid-item',
    });
    
    if (grid.classList.contains('grid-item-hide')) {
      window.aboutMasonry = msnry;
    }
    
    imagesLoaded(grid, function () {
      grid.style.opacity = 1;
      msnry.layout();
    });
    
    grid.querySelectorAll('.toggle-show').forEach(function(toggle) {
      toggle.addEventListener('change', function() {
        setTimeout(function() {
          msnry.layout();
        }, 360);
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
