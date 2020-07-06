<template>
  <div id="app">
    <SideBar />
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SideBar from '@/components/SideBar.vue';

@Component({
  components: {
    SideBar,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import '@/styles/main.scss';
</style>
