<template>
  <div id="app">
    <Calendar />
  </div>
</template>

<script>
import Calendar from './pages/calendar';
export default {
  name: 'App',
  components: { Calendar },
};
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
