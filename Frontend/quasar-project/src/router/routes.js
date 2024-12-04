const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "popis_knjiga",
        component: () => import("pages/PopisKnjigaPage.vue"),
      },
      {
        path: "pretrazivanje",
        component: () => import("pages/TraziKnjiguPage.vue"),
      },
      { path: "o_nama", component: () => import("pages/ONamaPage.vue") },
      {
        path: "rezervacija",
        component: () => import("pages/RezervacijaPage.vue"),
      },
      { path: "lokacija", component: () => import("pages/LokacijaPage.vue") },
      { path: "login", component: () => import("pages/LoginPage.vue") },
      {
        path: "registracija",
        component: () => import("pages/RegistracijaPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
