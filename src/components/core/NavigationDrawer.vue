<template>
  <v-navigation-drawer
    :model-value="isOpen"
    @update:model-value="$emit('close')"
    app
    class="navigation-drawer"
    width="300"
  >
    <!-- Drawer Header with Avatar -->
    <v-list-item class="drawer-header">
      <v-list-item-avatar class="avatar">
        <img src="../../assets/logo-ipone-white.png" alt="User Avatar" />
      </v-list-item-avatar>
    </v-list-item>

    <!-- Divider -->
    <v-divider></v-divider>

    <!-- Navigation Links -->
    <v-list density="compact" nav>
      <v-list-item
        class="menu-item"
        prepend-icon="mdi-home-city"
        title="Home"
        value="home"
         @click="navigateTo('/Home')"
      ></v-list-item>
      <v-list-item
        class="menu-item"
        prepend-icon="mdi-account"
        title="My Account"
        value="account"
      ></v-list-item>
      <v-list-item
        class="menu-item"
        prepend-icon="mdi-account-group-outline"
        title="Users"
        value="users"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "NavigationDrawer",
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    navigateTo(route) {
      // เปลี่ยนเส้นทางและปิด drawer
      this.$router.push(route);
      // this.$emit('close');
    },
  },
};
</script>

<style scoped>
/* Gradient background */
.navigation-drawer {
  background: linear-gradient(120deg, #007fc4 10%, #a0c4e0 50%, #efeff0 100%);
  color: #ffffff;
}

/* Centered header styling */
.drawer-header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  color: white;
  text-align: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}

/* Avatar styling */
.avatar img {
  width: 60px; /* Adjust the size as desired */
  height: auto;
  /* border-radius: 8px; */
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
}

/* Menu item styling */
.menu-item {
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: 500;
  padding-left: 8px;
  padding-right: 8px;
}

.menu-item:hover {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
}

/* Icon color */
.menu-item .v-icon {
  color: #ffffff;
}
</style>
