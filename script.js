'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const inner = document.querySelector('.inner'),
        outer = document.querySelector('.outer'),
        controlBtn = document.querySelector('.animate-control'),
        resetBtn = document.querySelector('.animate-reset');
  let   count = 0,
        animate = true,
        animateId;

  function animation() {
    animateId = requestAnimationFrame(animation);
    count++;
    outer.style.left = count + 'px';
    inner.style.transform = 'rotate(' + count + 'deg)';
  }

  controlBtn.addEventListener('click', function () {
    if(animate){
      requestAnimationFrame(animation);
      animate = false;
    } else {
      animate = true;
      cancelAnimationFrame(animateId);
    }
  });
  resetBtn.addEventListener('click', function () {
    cancelAnimationFrame(animateId);
    animate = true;
    count = 0;
    outer.style.left = '';
    inner.style.transform = '';
  });
});