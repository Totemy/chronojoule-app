<template>
    <div>
      <h1>Stopwatch</h1>
      <p v-if="isRunning">Elapsed Time: {{ elapsedTime }} seconds</p>
      <button @click="startStopwatch" :disabled="isRunning">Start</button>
      <button @click="stopStopwatch" :disabled="!isRunning">Stop</button>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      elapsedTime() {
        return this.$store.state.elapsedTime;
      },
      isRunning() {
        return this.$store.state.isRunning;
      },
    },
    methods: {
      startStopwatch() {
        this.$store.commit('startTimer');
      },
      stopStopwatch() {
        this.$store.commit('stopTimer');
      },
    },
  };
  </script>
  