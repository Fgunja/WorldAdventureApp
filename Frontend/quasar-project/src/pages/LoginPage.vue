<template>
  <q-page class="login-page">
    <!-- Background Image -->
    <div class="background-image"></div>

    <!-- Login Form -->
    <div class="login-form-container">
      <q-card class="q-pa-md" bordered>
        <q-card-section>
          <div class="text-h6 text-center">Prijava</div>
        </q-card-section>

        <q-card-section>
          <!-- Username Input -->
          <q-input
            v-model="username"
            label="Korisničko ime"
            hint="Unesite korisničko ime"
            filled
            autofocus
          />

          <!-- Password Input -->
          <q-input
            v-model="password"
            label="Lozinka"
            type="password"
            hint="Unesite lozinku"
            filled
          />
        </q-card-section>

        <q-card-actions>
          <!-- Submit Button -->
          <q-btn
            label="Prijavi se"
            color="primary"
            @click="handleLogin"
            class="full-width"
          />
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    handleLogin() {
      // Simple validation: Check if username and password are not empty
      if (this.username && this.password) {
        // Normally, here you would make an API call to verify login credentials
        console.log("Prijava uspješna!", this.username, this.password);
        // Redirect to a different page (e.g., dashboard)
        this.$router.push("/dashboard");
      } else {
        // If validation fails, show an error message
        this.$q.notify({
          color: "negative",
          message: "Molimo vas, unesite korisničko ime i lozinku.",
          icon: "error",
        });
      }
    },
  },
};
</script>

<style scoped>
.login-page {
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("https://bibliolifestyle.com/wp-content/uploads/2022/02/10-Reasons-Why-Libraries-Are-Important.jpeg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  z-index: -1; /* Keep background behind the form */
}

.login-form-container {
  width: 100%;
  max-width: 400px; /* Set max width for the login form */
  z-index: 1;
  position: relative;
}

.q-card {
  background-color: rgba(
    255,
    255,
    255,
    0.8
  ); /* Make card slightly transparent */
  border-radius: 8px;
}

.q-card-section {
  padding: 20px;
}

.text-h6 {
  font-weight: bold;
}

.q-btn.full-width {
  width: 100%;
}
</style>
