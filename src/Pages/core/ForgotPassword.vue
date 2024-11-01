<template>
  <v-container class="forgot-password-container" fluid>
    <v-row justify="center" align="center">
      <v-col cols="12" md="4">
        <v-card class="forgot-password-card">
          <v-card-title class="text-h5">Forgot Password</v-card-title>

          <v-card-text>
            <!-- OTP Field -->
            <v-otp-input  v-model="otp"></v-otp-input>
    
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
            ></v-text-field>
          </v-card-text>

          <!-- Submit Button -->
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="submitOtp" class="submit-btn" large
              >Submit</v-btn
            >
          </v-card-actions>
        </v-card>

        <!-- Resend OTP Link -->
        <v-row justify="center">
          <v-col class="text-center resend-otp">
            <a href="#" @click.prevent="resendOtp" class="resend-link">Resend OTP</a>
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
      // Handle OTP submission logic here
      console.log("OTP submitted with:", {
        otp: this.otp,
        newPassword: this.newPassword,
        confirmPassword: this.confirmPassword,
      });
    },
    resendOtp() {
      // Handle OTP resend logic here
      console.log("Resending OTP...");
    },
  },
};
</script>

<style scoped>
/* Container styling for the card */
.forgot-password-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(120deg, #007fc4 10%, #a0c4e0 50%, #efeff0 100%);
}

/* Card styling */
.forgot-password-card {
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

/* Submit button */
.submit-btn {
  color: white;
  font-weight: bold;
  width: 100%;
  box-shadow: 0px 7px 14px rgba(0, 127, 196, 0.4);
}

/* Resend OTP link styling */
.resend-otp {
  margin-top: 10px;
}
.resend-link {
    color: #007fc4;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.3s, text-shadow 0.3s;
}
.resend-link:hover {
  text-decoration: underline;
  text-shadow: 0px 2px 5px rgba(0, 127, 196, 0.3);
  text-decoration: underline;
}
</style>
