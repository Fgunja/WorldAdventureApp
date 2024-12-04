<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="text-weight-bolder text-h4">
          Knjiznica
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <!-- Render navigation links from linksList -->
        <q-item
          v-for="link in linksList"
          :key="link.title"
          clickable
          @click="goToPage(link.link)"
        >
          <q-item-section avatar>
            <q-icon :name="link.icon" />
          </q-item-section>
          <q-item-section>
            <div>{{ link.title }}</div>
            <div class="text-caption">{{ link.caption }}</div>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const linksList = [
  {
    title: "Naslovnica",
    caption: "početna stranica",
    icon: "home",
    link: "/", // home page path
  },
  {
    title: "Popis knjiga",
    caption: "sve knjige",
    icon: "book",
    link: "/popis_knjiga", // path for PopisKnjigaPage
  },
  {
    title: "Pretraživanje",
    caption: "tražiti knjigu",
    icon: "search",
    link: "/pretrazivanje", // path for TraziKnjiguPage
  },
  {
    title: "Rezervacija",
    caption: "rezervirajte knjige",
    icon: "reservation",
    link: "/rezervacija", // path for TraziKnjiguPage
  },
  {
    title: "O nama",
    caption: "informacije o stranici",
    icon: "info",
    link: "/o_nama", // path for ONamaPage
  },
  {
    title: "Lokacija",
    caption: "Gdje se nalazimo",
    icon: "pin_drop",
    link: "/lokacija", // path for LokacijaPage
  },
  {
    title: "Login",
    caption: "Prijava u profil",
    icon: "login",
    link: "/login", // path for LoginPage
  },
  {
    title: "Registracija",
    caption: "Registracija na stranicu",
    icon: "how_to_reg",
    link: "/registracija", // path for RegistracijaPage
  },
];

const leftDrawerOpen = ref(false);
const router = useRouter();

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

function goToPage(link) {
  router.push(link); // Use router.push to navigate to the route path
}
</script>
