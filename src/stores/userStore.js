// src/stores/userStore.js
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    username: '',
    isAuthenticated: false,
  }),
  actions: {
    login(username) {
      this.username = username;
      this.isAuthenticated = true;
    },
    logout() {
      this.username = '';
      this.isAuthenticated = false;
    },
  },
});
