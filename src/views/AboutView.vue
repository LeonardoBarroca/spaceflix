<template>

  <div class="planetsArea">
    <h4>Planetas</h4>
    <div class="planets">
      <div class="planet" v-for="planet in dataPlanets">
        <PlanetCard :planet-name=planet.planetName :planet-name-english=planet.planetNameEnglish
          :planet-path-base-color=planet.planetPathBaseColor
          v-bind:planet-path-displacement=planet.planetPathDisplacement />
      </div>
    </div>
  </div>
</template>

<script>
import PlanetCard from '../components/PlanetCard.vue'
import dataPlanets from '../assets/data.json'

export default {
  components: { PlanetCard },

  data() {
    return {
      dataPlanets: dataPlanets
    }
  }
};
</script>


<style scoped>
.planetsArea {
  margin: 5px;
  padding: 5px;
}

h4 {
  margin-left: 15px;
}

.planets {
  display: flex;
}

.planet {
  margin-left: 15px;                          
  cursor: pointer;
}

.centralize {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>