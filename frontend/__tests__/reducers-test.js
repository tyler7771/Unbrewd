import RootReducer from '../reducers/root_reducer';
import UserReducer from '../reducers/user_reducer';
import DrinkReducer from '../reducers/drink_reducer';
import { createStore } from 'redux';

describe('Reducers', () => {
  describe('RootReducer', () => {
    let testStore;

    beforeAll(() => {
      testStore = createStore(RootReducer);
    });

    it('exports a function', () => {
      expect(typeof RootReducer).toEqual('function');
    });

    it('includes the PostsReducer under the key `posts`', () => {
      const drink = { id: 1,
        name: "Banner Dark",
        roaster_id: 6,
        roast_type: "Dark",
        description: "Notes of dark chocolate and brown sugar meet rich undertones of vanilla and maple." };
      const action = { type: 'RECEIVE_DRINK', drink };
      testStore.dispatch(action);

      expect(testStore.getState().posts).toEqual(DrinkReducer({ [drink.id]: drink }, action));
    });
  });
});
