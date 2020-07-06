<template>
  <section>
    <h2>Games</h2>

    <div v-if="loading" class="card-list">
      <div class="card" v-for="game in 5" :key="game">
        <div class="card-image">
          <b-skeleton height="230px"></b-skeleton>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <b-skeleton></b-skeleton>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else-if="!loading && list.length < 1">
      <h2 class="error">Can not Load Games :(</h2>
    </div>

    <div v-else class="card-list">
      <div
        @click="openVideoModal(game.video)"
        class="card"
        v-for="game in list"
        :key="game.id"
      >
        <div class="card-image">
          <img :src="game.cover.url" :alt="game.name" />
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-6">{{ game.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

const game = namespace('game');

@Component
export default class Games extends Vue {
  @game.State
  public list!: Array<any>;

  @game.State
  public loading!: boolean;

  @game.Action
  public getGameDetails!: (gameId: string) => Promise<any>;

  mounted() {
    this.getGameDetails('99733,2126,20150,19164,1877');
  }

  public openVideoModal(videoId: string) {
    this.$buefy.modal.open(
      `
        <iframe width="960" height="556" src="https://www.youtube.com/embed/${videoId}"
         frameborder="0"
         allow="accelerometer; autoplay=1; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      `,
    );
  }
}
</script>

<style scoped lang="scss">
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 450px;
  background: #f40cae;

  h2 {
    margin-top: 64px;
  }

  .card-list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
  }

  .card {
    width: 232px;
    margin: 8px;
  }

  p {
    width: auto;
    min-width: 0;
    max-width: 200px;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
