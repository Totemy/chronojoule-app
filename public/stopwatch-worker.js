let timer;

self.onmessage = (event) => {
  if (event.data === 'start') {
    timer = setInterval(() => {
      self.postMessage('tick');
    }, 1000);
  } else if (event.data === 'stop') {
    clearInterval(timer);
  }
};