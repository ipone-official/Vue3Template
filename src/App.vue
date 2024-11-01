<template>
  <div id="app">
    <template v-if="!$route.meta.allowAnonymous">
    <v-app>
      <page-navigation :isOpen="isDrawerOpen" @close="toggleDrawer" />
      <page-toolbar @toggle-drawer="toggleDrawer" />
      <v-main>
        <page-breadcrumbs :items="breadcrumbItems" />
        <router-view />
      </v-main>
      <page-footer />
    </v-app>
  </template>
  <template v-else>
      <transition>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </template>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      isDrawerOpen: true,
      breadcrumbItems: [
        { name: "Home", link: "/" },
        { name: "Dashboard", link: "/dashboard" },
        { name: "Overview", link: "/dashboard/overview" },
      ],
    };
  },
  methods: {
    toggleDrawer() {
      this.isDrawerOpen = !this.isDrawerOpen;
    },
  },
};
</script>

<style>
@font-face {
  font-family: "SukhumvitSet";
  src: url("../src/assets/fonts/SukhumvitSet-Light.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}
#app {
  font-family: "SukhumvitSet", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.gradient-toolbar {
  background: linear-gradient(135deg, #6dd5fa, #2980b9, #004e92) !important;
  /* เพิ่มมิติสีฟ้าเข้ม-ฟ้าสดใส-น้ำเงินเข้ม */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3); /* เพิ่มเงาให้ toolbar */
  border-radius: 8px; /* เพิ่มขอบมนให้ดูนุ่มนวล */
  padding: 10px 20px; /* เพิ่ม padding ให้มีพื้นที่รอบๆ ภายใน */
  color: white !important; /* บังคับให้ตัวอักษรสีขาว */
}

.gradient-toolbar-title {
  font-size: 24px; /* ปรับขนาดตัวอักษรของหัวข้อ */
  font-weight: bold; /* เพิ่มความหนาให้ตัวอักษร */
  letter-spacing: 1px; /* เพิ่มระยะห่างระหว่างตัวอักษร */
}

.logo-image {
  max-height: 65px;
  max-width: 65px;
  margin-left: 10px; /* เพิ่ม margin ด้านซ้าย */
  margin-right: 10px; /* เพิ่ม margin ด้านขวา */
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
