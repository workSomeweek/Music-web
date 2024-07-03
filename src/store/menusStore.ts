import {defineStore} from "pinia";

const useMenusStore = defineStore('routerStore', {
  state: () => {
    return {
      menus: []
    }
  },
  getters: {
    routes: (state) => state.menus
  },
});

export default useMenusStore;