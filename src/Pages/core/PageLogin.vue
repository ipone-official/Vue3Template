<template>
  <v-app>
    <!-- Main Content (Login Form) -->
    <v-container class="login-container" fluid>
      <v-row justify="center" align="center">
        <v-col cols="12" md="4">
          <v-card class="login-card">
            <v-card-title class="text-h5">Login to Your Account</v-card-title>

            <v-card-text>
              <!-- Email Field -->
              <v-text-field
                v-model="email"
                label="Email"
                prepend-inner-icon="mdi-email"
                type="email"
                outlined
                dense
                hide-details
                required
                class="input-field"
              ></v-text-field>

              <!-- Password Field -->
              <v-text-field
                v-model="password"
                label="Password"
                prepend-inner-icon="mdi-lock"
                type="password"
                outlined
                dense
                hide-details
                required
                class="input-field"
              ></v-text-field>

              <!-- Remember Me Checkbox -->
              <v-checkbox
                v-model="rememberMe"
                label="Remember Me"
                class="remember-me-checkbox"
              ></v-checkbox>
            </v-card-text>

            <!-- Login Button -->
            <v-card-actions>
              <v-btn color="primary" @click="login" class="login-btn" large>Login</v-btn>
            </v-card-actions>
          </v-card>

          <!-- Forgot Password Link -->
          <v-row justify="center">
            <v-col class="text-center forgot-password">
              <router-link to="/ForgotPassword" class="forgot-link">Forgot Password?</router-link>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "PageLogin",
  data() {
    return {
      email: "",
      password: "",
      rememberMe: false,
    };
  },
  methods: {
    login() {
      console.log("Logging in with:", {
        email: this.email,
        password: this.password,
        rememberMe: this.rememberMe,
      });
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style scoped>
/* Background gradient for the login container */
.login-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #007fc4, #efeff0);
}

/* Login card styling */
.login-card {
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
  background-color: #ffffff;
  transition: box-shadow 0.3s, transform 0.2s;
}
.login-card:hover {
  box-shadow: 0px 14px 24px rgba(0, 0, 0, 0.25);
  transform: translateY(-3px);
}

/* Input field styling */
.input-field {
  margin-bottom: 20px;
}
.input-field .v-input__control .v-input__slot:focus-within {
  border-color: #007fc4 !important;
  box-shadow: 0 0 0 3px rgba(0, 127, 196, 0.2);
}

/* Remember me checkbox */
.remember-me-checkbox .v-input--selection-controls__ripple {
  color: #007fc4 !important;
}

/* Login button styling */
.login-btn {
  color: white;
  font-weight: bold;
  width: 100%;
  padding: 12px 0;
  font-size: 1.1rem;
  text-transform: uppercase;
  box-shadow: 0px 5px 10px rgba(0, 127, 196, 0.3);
  transition: background-color 0.3s, box-shadow 0.3s;
}
.login-btn:hover {
  background-color: #005f9e;
  box-shadow: 0px 7px 14px rgba(0, 127, 196, 0.4);
}

/* Forgot password link styling */
.forgot-password {
  margin-top: 15px;
}
.forgot-link {
  color: #007fc4;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.3s, text-shadow 0.3s;
}
.forgot-link:hover {
  color: #005f9e;
  text-shadow: 0px 2px 5px rgba(0, 127, 196, 0.3);
  text-decoration: underline;
}
</style>
