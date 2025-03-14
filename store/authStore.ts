import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    authCode: '',
    accessToken: '',
  }),
  actions: {
    setAuthCode(code: string) {
      this.authCode = code;
    },
    setAccessToken(token: string) {
      this.accessToken = token;
    },
    clearAuth() {
      this.authCode = '';
      this.accessToken = '';
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.accessToken,
  },
});