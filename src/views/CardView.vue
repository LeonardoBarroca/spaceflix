<template>
  <div class="search-wrapper">
    <input type="text" v-model="search" placeholder="Search title.." />
    <label>Search title:</label>
  </div>

  <div class="planetsArea">
    <h4>Planetas</h4>
    <div class="planets">
      <div class="planet" v-for="planet in dataPlanets" :key="planet.planetNameEnglish">
          <PlanetCard :planet-name="planet.planetName" :planet-name-english="planet.planetNameEnglish"
            :planet-path-base-color="planet.planetPathBaseColor"
            :planet-path-displacement="planet.planetPathDisplacement" />
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
      data: dataPlanets,
      search: ""
    }
  },
  computed: {
    dataPlanets() {
      return this.data.filter(p => {
        return p.planetName.toLowerCase().includes(this.search.toLowerCase())
      })
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

</style>