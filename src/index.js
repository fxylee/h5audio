!(() => {
  'use strict';

  const audio = document.querySelector('audio');
  const list = document.querySelectorAll('[data-src]');
  let currentIndex = 0;
  // 0单曲播放完停止；1列表顺序播放（播放全部）
  let mode = 0;

  function player(src) {console.log(src);
    audio.src = src;
    audio.play();
  }

  function next (index) {
    if (index >= list.length) {
      currentIndex = 0;
      // 播放完最后一个，停止播放
      return false;
    }

    // 下一首
    currentIndex = index;

    player(list[currentIndex].dataset.src);
  }

  list.forEach((item, index) => {
    if (item.dataset.src) {
      item.addEventListener('click', (e) => {
        next(index);
        mode = 0;
      });
    }
  });

  document.querySelector('button').addEventListener('click', function (e) {
    mode = mode === 0 ? 1 : 0;
    // 从第一个开始顺序播放
    next(0);
  })

  // audio 绑定 ended事件
  audio.addEventListener('ended', (e) => {
    if (mode === 1) {
      next(currentIndex + 1);
    }
    
    console.log(e);
  });
})();