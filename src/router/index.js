import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CardView from "../views/CardView.vue";
import PlanetArea from "../components/PlanetArea.vue";
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
    path: `/${planet.planetNameEnglish}`,
    component: PlanetArea,
    props: {
      planetName: planet.planetName,
      planetNameEnglish: planet.planetNameEnglish,
      planetPathBaseColor: planet.planetPathBaseColor,
      planetPathDisplacement: planet.planetPathDisplacement,
      planetPathRoughness: planet.planetPathRoughness,
      planetPathNormal: planet.planetPathNormal,
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
/*
galaxiesData.forEach(galaxy => {
  router.addRoute({
    path: `/${galaxy.englishName}`,
    component: Card,
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
 */
export default router;
