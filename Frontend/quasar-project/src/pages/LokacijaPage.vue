<template>
  <q-page padding>
    <!-- content -->
    <div ref="mapContainer" style="height: 400px; width: 100%"></div>

    <!-- Location description -->
    <div class="location-info q-pa-md">
      <h2 class="text-center">Naša Lokacija</h2>
      <p class="text-center">Naša glavna lokacija, smještena je na adresi:</p>
      <p class="text-center font-bold">
        1234 Adventure Street, Rijeka, Hrvatska
      </p>
      <p class="text-center">
        Posjetite nas i otkrijte našu nevjerojatnu zajednicu. Naša lokacija je
        središte svih autorskih djela svih autora i žanrova.
      </p>
    </div>

    <div id="map" style="height: 500px"></div>
  </q-page>
</template>

<script>
import { ref, onMounted } from "vue";
import * as L from "leaflet";
import "leaflet/dist/leaflet.css"; // Required Leaflet CSS

export default {
  setup() {
    const mapContainer = ref(null); // Reference to the map container div

    onMounted(() => {
      // Check if mapContainer is defined
      if (mapContainer.value) {
        // Initialize Leaflet map with coordinates and zoom level
        const map = L.map(mapContainer.value).setView([45.1, 15.2], 13); // Coordinates and zoom level

        // Add OpenStreetMap layer
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);

        // Add a marker with a popup to the map
        L.marker([45.1, 15.2])
          .addTo(map)
          .bindPopup("<b>Dobrodošli!</b><br>Ovo je lokacija na mapi.")
          .openPopup();
      }
    });

    return {
      mapContainer, // Return mapContainer to access it in the template
    };
  },
};
</script>

<style scoped>
/* Use a font that supports special characters */
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap");

.location-info {
  font-family: "Open Sans", sans-serif; /* Open Sans supports special characters */
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  margin-top: 20px;
  font-weight: 400; /* Ensure normal weight to avoid bold 'š' */
}

/* Remove bold from text, specifically for "š" */
h2,
p {
  font-weight: 400 !important; /* Force font weight to 400 */
}

/* Optional: Set the font weight of individual elements */
p {
  font-weight: 400 !important; /* Ensure normal weight for paragraphs */
}
</style>
