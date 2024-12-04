<template>
  <q-page
    class="flex flex-center"
    style="position: relative; height: 100vh; overflow: hidden"
  >
    <img
      alt="Knjiznica slika"
      src="~assets/KnjiznicaSlika.jpg"
      style="
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: -1;
      "
    />
    <div
      style="position: relative; z-index: 1; text-align: center; color: white"
    >
      <h1 style="font-size: 4rem; text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7)">
        Dobrodošli na stranicu knjižnice!
      </h1>
    </div>
  </q-page>
</template>

<script setup>
defineOptions({
  name: "IndexPage",
});
</script>
