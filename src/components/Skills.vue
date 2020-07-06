<template>
  <section>
    <h2>Skills</h2>
    <div>
      <ul>
        <li>• HTML/CSS/JS</li>
        <li>• React</li>
        <li>• Vue</li>
        <li>• Angular</li>
        <li>• NodeJS</li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Skills extends Vue {
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
}
</style>
