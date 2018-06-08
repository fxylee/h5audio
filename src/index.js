!(() => {
  'use strict';

  const audio = document.querySelector('audio');
  const list = document.querySelectorAll('[data-src]');
  let currentIndex = 0;

  function player(src) {console.log(src);
    audio.src = src;
    audio.play();
  }

  function next (index) {
    if (index >= list.length) {
      index = 0;
    }
    console.log(index);
    currentIndex = index;

    player(list[currentIndex].dataset.src);
  }

  list.forEach((item, index) => {
    item.addEventListener('click', (e) => {
      next(index);
    })
  });

  audio.addEventListener('ended', (e) => {
    next(currentIndex + 1);
    console.log(e);
  });
})();