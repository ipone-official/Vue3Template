<template>
  <v-container class="home-container" fluid>
    <v-row justify="center" align="center">
      <v-col cols="12" md="8" class="text-center">
        <h1 class="welcome-message">สวัสดีชาว ไอพีวัน</h1>
        <p class="description">ยินดีต้อนรับเข้าสู่แอปพลิเคชันของคุณ!</p>
        <p v-if="isAuthenticated">Welcome, {{ username }}</p>
    <p v-else>Please log in.</p>
    <button @click="toggleAuth">{{ isAuthenticated ? 'Logout' : 'Login' }}</button>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { useUserStore } from '../stores/userStore.js';
import { computed } from 'vue';

export default {
  setup() {
    const userStore = useUserStore();

    const toggleAuth = () => {
      if (userStore.isAuthenticated) {
        userStore.logout();
      } else {
        userStore.login('John Doe');
      }
    };

    // ใช้ computed เพื่อให้ reactive
    const username = computed(() => userStore.username);
    const isAuthenticated = computed(() => userStore.isAuthenticated);

    return {
      username,
      isAuthenticated,
      toggleAuth,
    };
  },
};
</script>

<style scoped>
.home-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #007fc4, #efeff0);
  color: #ffffff;
}

.welcome-message {
  font-size: 2.5rem;
  font-weight: bold;
  color: #ffffff;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
}

.description {
  font-size: 1.2rem;
  color: #f0f0f0;
  margin-top: 10px;
}
</style>
