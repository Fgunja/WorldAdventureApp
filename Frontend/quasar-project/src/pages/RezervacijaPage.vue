<template>
  <q-page padding>
    <q-card>
      <q-card-section>
        <div class="text-h6">Rezervacija Knjige</div>
        <q-form @submit="submitForm">
          <!-- Input za datum rezervacije -->
          <q-input
            filled
            v-model="datum"
            label="Datum rezervacije"
            type="date"
            :rules="[
              (val) => (val && val.length > 0) || 'Molimo unesite datum',
            ]"
          />

          <!-- Odabir knjige -->
          <q-select
            filled
            v-model="knjigaId"
            :options="knjige"
            label="Izaberite knjigu"
            :rules="[
              (val) => (val && val.length > 0) || 'Molimo izaberite knjigu',
            ]"
          />

          <!-- Input za korisnikov ID -->
          <q-input
            filled
            v-model="korisnikId"
            label="ID Korisnika"
            type="number"
            :rules="[
              (val) =>
                (val && val > 0) || 'Molimo unesite validan ID korisnika',
            ]"
          />

          <!-- Dugme za slanje forme -->
          <q-btn
            type="submit"
            label="Rezerviši"
            color="primary"
            :loading="loading"
            :disable="loading"
          />
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { ref } from "vue";
import axios from "axios";

export default {
  name: "RezervacijaPage",
  setup() {
    const datum = ref("");
    const knjigaId = ref(null);
    const korisnikId = ref(null);
    const loading = ref(false);
    const knjige = ref([]);

    // Funkcija za dohvat svih knjiga sa backend-a
    const fetchKnjige = async () => {
      try {
        const response = await axios.get("/api/knjige"); // Ovde bi trebalo biti API za dohvat knjiga
        if (response.data) {
          knjige.value = response.data.map((knjiga) => ({
            label: knjiga.naziv, // Pretpostavimo da je naziv knjige u response-u
            value: knjiga.id, // Pretpostavljamo da je ID knjige u response-u
          }));
        }
      } catch (error) {
        console.error("Greška pri dohvaćanju knjiga:", error);
      }
    };

    // Poziva funkciju za dohvat knjiga kada se komponenta učita
    fetchKnjige();

    // Funkcija za slanje rezervacije na backend
    const submitForm = async () => {
      if (!datum.value || !knjigaId.value || !korisnikId.value) {
        return;
      }

      loading.value = true;
      try {
        const response = await axios.post("/api/rezerv_knjige", {
          datum: datum.value,
          id_knjiga: knjigaId.value,
          id_korisnik: korisnikId.value,
        });
        loading.value = false;
        if (response.data) {
          this.$q.notify({
            type: "positive",
            message: "Knjiga uspešno rezervisana!",
          });
        }
      } catch (error) {
        loading.value = false;
        this.$q.notify({
          type: "negative",
          message: "Došlo je do greške pri rezervaciji!",
        });
      }
    };

    return {
      datum,
      knjigaId,
      korisnikId,
      loading,
      knjige,
      submitForm,
    };
  },
};
</script>

<style scoped>
/* Možete dodati stilove po vašoj želji */
</style>
