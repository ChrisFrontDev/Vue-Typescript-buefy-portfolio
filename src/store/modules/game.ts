import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators';
import axios from 'axios';
// interface GameDTO {
//   id: number;
//   cover: object;
//   genres: Array<any>;
//   name: string;
// }

@Module({ namespaced: true })
class Game extends VuexModule {
  public list: Array<any> = [];
  public loading = true;

  @Mutation
  public setGames(data: Array<any>): void {
    this.loading = false;
    this.list = data;
  }

  @Action
  public async getGameDetails(gameId: string): Promise<any> {
    const proxyurl = 'https://cors-anywhere.herokuapp.com/';

    return setTimeout(() => {
      axios({
        url: proxyurl + 'https://api-v3.igdb.com/games',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'user-key': '5e5c50bc1568595130540a9fdd30a1be',
        },
        data: `where id = (${gameId});fields name,genres.name,rating,cover.image_id,videos.video_id;`,
      })
        .then(response => {
          const gameListWithUrl = response.data.map((game: any) => ({
            ...game,
            cover: {
              ...game.cover,
              url: `https://images.igdb.com/igdb/image/upload/t_cover_big/${game.cover.image_id}.jpg`,
            },
            video: `${game.videos[0].video_id}`,
          }));
          this.context.commit('setGames', gameListWithUrl);
        })
        .catch(err => {
          this.context.commit('setGames', []);
        });
    }, 5000);
  }
}
export default Game;
