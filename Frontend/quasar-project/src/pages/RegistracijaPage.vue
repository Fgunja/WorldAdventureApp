<template>
  <q-page class="flex flex-center">
    <q-form
      @submit.prevent="registerUser"
      class="q-gutter-md"
      :loading="loading"
    >
      <q-input v-model="ime" label="Ime" required />
      <q-input v-model="prezime" label="Prezime" required />
      <q-input v-model="korime" label="Korisničko ime" required />
      <q-input v-model="lozinka" label="Lozinka" type="password" required />
      <q-btn type="submit" label="Registriraj se" color="primary" />
    </q-form>
    <q-banner v-if="errorMessage" color="negative" class="q-mt-md">
      {{ errorMessage }}
    </q-banner>
  </q-page>
</template>

<script>
import { ref } from "vue";
import axios from "axios";

export default {
  name: "RegisteracijaPage",
  setup() {
    const ime = ref("");
    const prezime = ref("");
    const korime = ref("");
    const lozinka = ref("");
    const loading = ref(false);
    const errorMessage = ref("");

    const registerUser = async () => {
      loading.value = true;
      errorMessage.value = "";

      try {
        const response = await axios.post(
          "http://localhost:6666/api/registracija",
          {
            ime: ime.value,
            prezime: prezime.value,
            korime: korime.value,
            lozinka: lozinka.value,
          }
        );
        alert(response.data.message);
      } catch (error) {
        errorMessage.value =
          error.response?.data?.message || "Došlo je do greške!";
      } finally {
        loading.value = false;
      }
    };

    return {
      ime,
      prezime,
      korime,
      lozinka,
      loading,
      errorMessage,
      registerUser,
    };
  },
};
</script>

<style scoped>
.q-page {
  max-width: 400px;
  width: 100%;
}
</style>
