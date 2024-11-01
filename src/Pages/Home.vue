<template>
  <v-container class="home-container" fluid>
    <v-row justify="center" align="center">
      <v-col cols="12" md="8" class="text-center">
        <h1 class="welcome-message">สวัสดีชาว ไอพีวัน</h1>
        <p class="description">ยินดีต้อนรับเข้าสู่แอปพลิเคชันของคุณ!</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "PageHome",
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
