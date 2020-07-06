<template>
  <section>
    <h2>Last Contracts</h2>
    <div>
      <ul>
        <li>• IBTI</li>
        <li>• Monumenta</li>
        <li>• Capgemini</li>
        <li>• Tellus S.A</li>
        <li>• CooperSystem</li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Contracts extends Vue {
  // @Prop() private msg!: string;
}
</script>

<style scoped lang="scss">
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 450px;
  background: #821de4;
}
</style>
