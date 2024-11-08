<template>
  <v-container class="forgot-password-container" fluid>
    <v-row justify="center" align="center">
      <v-col cols="12" md="4">
        <v-card class="forgot-password-card">
          <v-card-title class="text-h5">Forgot Password</v-card-title>

          <v-card-text>
            <!-- OTP Field -->
            <v-otp-input v-model="otp"></v-otp-input>

            <!-- New Password Field -->
            <v-text-field
              v-model="newPassword"
              label="New Password"
              prepend-inner-icon="mdi-lock"
              type="password"
              outlined
              dense
              hide-details
              required
              class="input-field"
            ></v-text-field>

            <!-- Confirm New Password Field -->
            <v-text-field
              v-model="confirmPassword"
              label="Confirm Password"
              prepend-inner-icon="mdi-lock-check"
              type="password"
              outlined
              dense
              hide-details
              required
              class="input-field"
            ></v-text-field>
          </v-card-text>

          <!-- Submit Button -->
          <v-card-actions>
            <v-btn color="primary" @click="submitOtp" class="submit-btn login-btn" large>Submit</v-btn>
          </v-card-actions>
        </v-card>

        <!-- Login Link -->
        <v-row justify="center">
          <v-col class="text-center login-link">
            <router-link to="/" class="login-link">Login</router-link>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ForgotPassword",
  data() {
    return {
      otp: "",
      newPassword: "",
      confirmPassword: "",
    };
  },
  methods: {
    submitOtp() {
      console.log("OTP submitted with:", {
        otp: this.otp,
        newPassword: this.newPassword,
        confirmPassword: this.confirmPassword,
      });
    },
  },
};
</script>

<style scoped>
/* Background gradient for the forgot password container */
.forgot-password-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #007fc4, #efeff0);
}

/* Card styling */
.forgot-password-card {
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
  background-color: #ffffff;
  transition: box-shadow 0.3s, transform 0.2s;
}
.forgot-password-card:hover {
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

/* Submit button styling */
.submit-btn {
  color: white;
  font-weight: bold;
  width: 100%;
  padding: 12px 0;
  font-size: 1.1rem;
  text-transform: uppercase;
  box-shadow: 0px 5px 10px rgba(0, 127, 196, 0.3);
  transition: background-color 0.3s, box-shadow 0.3s;
}
.submit-btn:hover {
  background-color: #005f9e;
  color: white;
  text-shadow: 0px 0px 2px rgba(255, 255, 255, 0.8); /* Added text-shadow for clarity */
  box-shadow: 0px 7px 14px rgba(0, 127, 196, 0.4);
}

/* Login link styling */
.login-link {
  margin-top: 15px;
}
.login-link .login-link {
  color: white;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.3s, text-shadow 0.3s;
}
.login-link .login-link:hover {
  color: #007fc4;
  text-shadow: 0px 2px 5px rgba(255, 255, 255, 0.3);
  text-decoration: underline;
}
</style>
