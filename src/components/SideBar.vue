<template>
  <fragment>
    <b-sidebar :fullheight="fullheight" :overlay="overlay" :open.sync="open">
      <div class="p-1">
        <img
          src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
          alt="Lightweight UI components for Vue.js based on Bulma"
        />
        <b-menu>
          <b-menu-list>
            <b-menu-item
              label="Home"
              icon="home"
              @click="goTo('/')"
              :active="isActiveMenu('/')"
            ></b-menu-item>

            <b-menu-item
              label="About"
              icon="link"
              @click="goTo('/about')"
              :active="isActiveMenu('/about')"
            ></b-menu-item>
          </b-menu-list>
        </b-menu>
      </div>
    </b-sidebar>

    <b-button @click="open = true" icon-right="menu" />
  </fragment>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class SideBar extends Vue {
  public open = false;
  public overlay = true;
  public fullheight = true;

  isActiveMenu(url: string) {
    const sameAsCurrent = this.$router.currentRoute.path === url;

    return sameAsCurrent;
  }

  goTo(url: string): void {
    const sameAsCurrent = this.$router.currentRoute.path === url;

    if (!sameAsCurrent) this.$router.push(url);

    this.toggleSidebar();
  }

  toggleSidebar(): void {
    this.open = !open;
  }
}
</script>

<style lang="scss" scoped>
.p-1 {
  padding: 1em;
}
button {
  border: 0;
  background: none;
  position: fixed;
  margin: 16px;
  color: #fff;
}
</style>
