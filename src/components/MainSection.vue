<template>
  <section>
    <h1>Christian Santos</h1>

    <h1 class="title-torto">The Frontender</h1>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class MainSection extends Vue {}
</script>

<style scoped lang="scss">
section {
  width: 100%;
  min-height: 450px;
  text-align: center;
  background: url('~@/assets/mainBackground.png') no-repeat center center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .title-torto {
    transform: rotate(-6deg);
  }
}
</style>
