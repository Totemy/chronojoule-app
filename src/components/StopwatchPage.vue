<template>
    <div>
      <h1>Stopwatch</h1>
      Elapsed Time: {{ formattedTime.hours }} : {{ formattedTime.minutes }} : {{ formattedTime.seconds }} 
      <button @click="startStopwatch" :disabled="isRunning">Start</button>
      <button @click="stopStopwatch" :disabled="!isRunning">Stop</button>
      <button @click="pauseStopwatch" :disabled="!isRunning">Pause</button>
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
      formattedTime() {
        return this.$store.getters.formattedTime;
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
  