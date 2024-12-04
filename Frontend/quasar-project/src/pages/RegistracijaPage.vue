<template>
  <q-page class="flex flex-center">
    <q-card>
      <q-card-section>
        <div class="text-h6">Registracija</div>
      </q-card-section>

      <q-card-section>
        <q-form @submit.prevent="submitForm">
          <!-- Polje za ime -->
          <q-input v-model="ime" label="Ime" filled required />

          <!-- Polje za prezime -->
          <q-input v-model="prezime" label="Prezime" filled required />

          <!-- Polje za korisničko ime -->
          <q-input v-model="korime" label="Korisničko ime" filled required />

          <!-- Polje za lozinku -->
          <q-input
            v-model="lozinka"
            label="Lozinka"
            type="password"
            filled
            required
          />

          <q-btn
            type="submit"
            label="Registriraj se"
            color="primary"
            class="full-width"
          />
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      ime: "", // Polje za ime
      prezime: "", // Polje za prezime
      korime: "", // Polje za korisničko ime
      lozinka: "", // Polje za lozinku
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await this.$axios.post(
          "http://localhost:6666/api/registracija", // Endpoint vašeg backend servera
          {
            ime: this.ime,
            prezime: this.prezime,
            korime: this.korime, // Korisničko ime umjesto e-maila
            lozinka: this.lozinka, // Lozinka korisnika
          }
        );

        // Ako je registracija uspješna
        alert(response.data.message);
      } catch (error) {
        // Obrada grešaka
        if (error.response) {
          alert(error.response.data.message || "Došlo je do pogreške.");
        } else {
          alert("Greška prilikom povezivanja s serverom.");
        }
      }
    },
  },
};
</script>

<style scoped>
.q-page {
  max-width: 400px;
  margin: 0 auto;
}
</style>
