<template>
  <q-page padding>
    <!-- Naslov stranice -->
    <div class="text-h5 q-mb-md">Pretraživanje</div>

    <!-- Input za pretragu -->
    <q-input
      v-model="searchQuery"
      label="Pretrazi predmete"
      filled
      debounce="300"
      class="q-mb-md"
    />

    <!-- Lista predmeta koja se filtrira prema pretrazi -->
    <q-list bordered>
      <q-item v-for="item in filteredItems" :key="item.id" clickable>
        <q-item-section>
          {{ item.name }}
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      // Dummy podaci za predmete
      items: [
        { id: 1, name: "1984" },
        { id: 2, name: "Sto godina samoće" },
        { id: 3, name: "Lovac u žitu" },
        { id: 4, name: "Hobit" },
        { id: 5, name: "Ubiti pticu rugalicu" },
        { id: 6, name: "Djevojka iz vlaka" },
        { id: 7, name: "Sapiens: Kratka povijest čovječanstva" },
      ],
      searchQuery: "", // Trenutni upit za pretragu
    };
  },
  computed: {
    // Filtriranje predmeta prema pretrazi
    filteredItems() {
      const query = this.searchQuery.toLowerCase();
      return this.items.filter((item) =>
        item.name.toLowerCase().includes(query)
      );
    },
  },
};
</script>

<style scoped>
/* Stilizacija ako je potrebna */
</style>
