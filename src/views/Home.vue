<template>
  <fragment>
    <MainSection />
    <Skills />
    <Contracts />
    <Games />
  </fragment>
</template>

<script>
// @ is an alias to /src
import Skills from '@/components/Skills.vue';
import MainSection from '@/components/MainSection.vue';
import Contracts from '@/components/Contracts.vue';
import Games from '@/components/Games.vue';

export default {
  name: 'Home',
  components: {
    Skills,
    Contracts,
    MainSection,
    Games,
  },
};
</script>
