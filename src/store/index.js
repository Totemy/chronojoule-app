import { createStore } from 'vuex';

export default createStore({
  state: {
    elapsedTime: 0,
    isRunning: false,
  },
  mutations: {
    startTimer(state) {
      state.isRunning = true;
      const worker = new Worker(process.env.BASE_URL + 'stopwatch-worker.js');

      worker.onmessage = () => {
        state.elapsedTime += 1;
      };

      worker.postMessage('start');
    },
    stopTimer(state) {
      state.isRunning = false;
      state.elapsedTime = 0;
    },
  },
});
