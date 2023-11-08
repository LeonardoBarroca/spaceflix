import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CardView from "../views/CardView.vue";
import PlanetArea from "../components/PlanetArea.vue";
import GalaxyArea from "../components/GalaxyArea.vue";
import planetsData from "@/assets/planetsData";
import galaxiesData from "@/assets/galaxiesData";

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

planetsData.forEach(planet => {
  router.addRoute({
    path: `/${planet.englishName}`,
    component: PlanetArea,
    props: {
      name: planet.name,
      englishName: planet.englishName,
      pathBaseColor: planet.pathBaseColor,
      pathDisplacement: planet.pathDisplacement,
      pathRoughness: planet.pathRoughness,
      pathNormal: planet.pathNormal,
      diameter: planet.diameter,
      gravity: planet.gravity,
      distanceFromSun: planet.distanceFromSun,
      mass: planet.mass,
      atmosphericComposition: planet.atmosphericComposition,
      numberOfMoons: planet.numberOfMoons,
      axialTilt: planet.axialTilt,
      surfaceTemperature: planet.surfaceTemperature,
      dayLength: planet.dayLength,
      yearLength: planet.yearLength,
      discoveryDate: planet.discoveryDate,
      discoveryBy: planet.discoveryBy,
      curiosity: planet.curiosity
    }
  });
});

galaxiesData.forEach(galaxy => {
  router.addRoute({
    path: `/${galaxy.englishName}`,
    component: GalaxyArea,
    props: {
      name: galaxy.name,
      englishName: galaxy.englishName,
      type: galaxy.type,
      distanceFromEarth: galaxy.distanceFromEarth,
      diameter: galaxy.diameter,
      numberOfStars: galaxy.numberOfStars,
      discoveryYear: galaxy.discoveryYear,
      discoveredBy: galaxy.discoveredBy,
      interestingFact: galaxy.interestingFact,
      curiosity: galaxy.curiosity
    }
  });
});

export default router;
