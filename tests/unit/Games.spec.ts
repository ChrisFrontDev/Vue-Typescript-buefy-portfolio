// import 'jest';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex, { Store } from 'vuex';
import flushPromises from 'flush-promises';
import Games from '@/components/Games.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Games', () => {
  let actions: { getGameDetails: any };
  let store: Store<unknown>;
  let wrapper: any;

  beforeEach(() => {
    actions = { getGameDetails: jest.fn() };

    store = new Vuex.Store({
      modules: {
        game: {
          namespaced: true,
          state: { list: [] },
          actions,
        },
      },
    });
    wrapper = shallowMount(Games, { store, localVue });
  });

  it('display message to user if cant get gamelist', async () => {
    await flushPromises();
    expect(wrapper.find('.error').text()).toBe('Can not Load Games :(');
  });
});
