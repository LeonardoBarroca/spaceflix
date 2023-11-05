import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CardView from "../views/CardView.vue";
import PlanetCard from "../components/PlanetCard.vue";
import data from "@/assets/data.json";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomeView,
    },
    {
      path: "/card",
      component: CardView,
    },
  ],
});

data.forEach(planet => {
  router.addRoute({
    path: `/${planet.planetNameEnglish}`,
    component: PlanetCard,
    props: {
      planetName: planet.planetName,
      planetNameEnglish: planet.planetNameEnglish,
      planetPathBaseColor: planet.planetPathBaseColor,
      planetPathDisplacement: planet.planetPathDisplacement,
      planetPathRoughness: planet.planetPathRoughness,
      planetPathNormal: planet.planetPathNormal
    }
  });
});

export default router;
