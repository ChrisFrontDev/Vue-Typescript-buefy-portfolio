<template>
  <section>
    <h1 class="title-torto">About Me</h1>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class MainSectionAbout extends Vue {}
</script>

<style scoped lang="scss">
section {
  width: 100%;
  min-height: 450px;
  text-align: center;
  background: url('~@/assets/aboutBackground.png') no-repeat center center;
  background-size: cover;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;

  .title-torto {
    transform: rotate(-6deg);
  }
}
</style>
