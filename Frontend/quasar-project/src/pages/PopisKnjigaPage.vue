<template>
  <q-page padding>
    <!-- Naslov stranice -->
    <div class="text-h5 q-mb-md">Lista knjiga</div>

    <!-- Lista predmeta s opisima i slikama -->
    <q-list bordered>
      <q-item v-for="item in items" :key="item.id" clickable>
        <q-item-section avatar>
          <!-- Slika predmeta -->
          <img
            :src="item.image"
            alt="Slika predmeta"
            class="q-mr-sm"
            style="width: 60px; height: 60px; object-fit: cover"
          />
        </q-item-section>

        <q-item-section>
          <div class="text-h6">{{ item.name }}</div>
          <div>{{ item.description }}</div>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      // Dummy podaci za predmete, uključujući opis i sliku
      items: [
        {
          id: 1,
          name: "1984",
          description: "Distopijski roman",
          image:
            "https://tankmuseumshop.org/cdn/shop/products/1984.jpg?v=1588779384&width=1284",
        },
        {
          id: 2,
          name: "Sto godina samoće",
          description: "Magijski realizam",
          image:
            "https://www.antikvarijat-vremeplov.hr/media/img/products/26900/gabriel-garcia-marquez-sto-godina-samoce-17027658810PYzZ5tew.webp",
        },
        {
          id: 3,
          name: "Lovac u žitu",
          description: "Klasična literatura",
          image:
            "https://znanje.hr/product-images/c04d81d7-06a5-4f00-b12d-2a0fb65abe73.jpg",
        },
        {
          id: 4,
          name: "Hobit",
          description: "Fantastika",
          image:
            "https://www.hocuknjigu.hr/getmedia/5a7676a3-f097-4976-82db-c2e14a1dbcf0/9780007458424.jpg",
        },
        {
          id: 5,
          name: "Ubiti pticu rugalicu",
          description: "Društvena drama",
          image:
            "https://shop.skolskaknjiga.hr/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/0/108774.jpg",
        },
        {
          id: 6,
          name: "Djevojka iz vlaka",
          description: "Psihološki triler",
          image:
            "https://mozaik-knjiga.hr/wp-content/uploads/2016/09/Djevojka-u-vlaku_NASLOVNICA_FILM.jpg",
        },
        {
          id: 7,
          name: "Sapiens: Kratka povijest čovječanstva",
          description: "Publicistika",
          image:
            "https://shop.skolskaknjiga.hr/media/catalog/product/1/1/111907.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Stilizacija ako je potrebna */
</style>
